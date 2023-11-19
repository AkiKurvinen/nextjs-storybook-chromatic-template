// custom converter
import fs from 'fs';
import { createTheme } from '@mui/material';

let importpath = './themes/tokens.json';
let themename = 'light';
let parentelement = 'Theme';

const mui_base_typography = createTheme().typography;
const args = process.argv.slice(2);

if (args[0] && args[0].length > 0) {
  themename = args[0];
}
let exportfile = themename + '_theme';

if (args[1] && args[1].length > 0) {
  exportfile = args[1];
}
if (args[2] && args[2].length > 0) {
  importpath = args[2];
}
if (args[3] && args[3].length > 0) {
  parentelement = args[3];
}

const json = JSON.parse(fs.readFileSync(importpath));

function getActualValue(subelement, item) {
  let itemi = item.replace('{', '').replace('}', '');
  let result = itemi
    .split('.')
    .reduce((json, i) => json[i], json[`${parentelement}`]);
  if (result.value / 16) {
    let pxvalue = result.value / 16;
    return `${Math.round(pxvalue * 100) / 100}em`;
  } else if (result.value == '0px' || result.value == '0') {
    result.value = 0;
  } else if (subelement != 'fontFamily') {
    result.value = result.value.toLowerCase();
  }

  return result.value;
}

function getTokens() {
  let muiTheme = {};
  let finalJsonTheme = {};
  if (!json[`${parentelement}`]) {
    console.error(`Parent element "${parentelement}" not found in JSON file`);
    return;
  }
  muiTheme.palette = json[`${parentelement}`].palette[`${themename}`];

  let colorPalette = {};
  if (muiTheme.palette) {
    Object.keys(muiTheme.palette).forEach((element) => {
      Object.keys(muiTheme.palette[element]).forEach((subelement) => {
        if (!colorPalette[`${element}`]) {
          colorPalette[`${element}`] = {};
        }
        if (!colorPalette[`${element}`][`${subelement}`]) {
          colorPalette[`${element}`][`${subelement}`] = {};
        }
        colorPalette[`${element}`][`${subelement}`] =
          muiTheme.palette[`${element}`][subelement].value;
      });
    });
    finalJsonTheme.palette = colorPalette;
  } else {
    console.info('No theme palette for ' + themename);
  }
  let typography = mui_base_typography;

  try {
    typography.fontFamily = getActualValue(
      'fontFamily',
      json[`${parentelement}`].typography[`${themename}`].body.value.fontFamily
    );
  } catch (error) {
    console.info('No base font set');
  }
  if (json[`${parentelement}`].typography[`${themename}`]) {
    Object.keys(json[`${parentelement}`].typography[`${themename}`]).forEach(
      (element) => {
        let elementMuikey = element;
        if (element == 'body') {
          elementMuikey = 'body1';
        }
        if (!typography[`${elementMuikey}`]) {
          typography[`${elementMuikey}`] = {};
        }
        Object.keys(
          json[`${parentelement}`].typography[`${themename}`][`${element}`]
            .value
        ).forEach((subelement) => {
          if (!typography[`${elementMuikey}`][`${subelement}`]) {
            typography[`${elementMuikey}`][`${subelement}`] = {};
          }
          let val = getActualValue(
            subelement,
            json[`${parentelement}`].typography[`${themename}`][`${element}`]
              .value[`${subelement}`]
          );
          typography[`${elementMuikey}`][`${subelement}`] = val;
        });
      }
    );
    finalJsonTheme.typography = typography;
  } else {
    console.info('No theme typography for ' + themename);
  }

  const updatedJson = JSON.stringify(finalJsonTheme, null, 4);
  let jsonPretty = JSON.stringify(JSON.parse(updatedJson), null, 2);
  fs.writeFileSync(`./themes/${exportfile}.json`, jsonPretty);
  console.log('Conversion completed!');
}

getTokens();

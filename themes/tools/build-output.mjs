// npmjs.com/package/@tokens-studio/sd-transforms

import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ['./themes/tokens.json'],
  platforms: {
    js: {
      transformGroup: 'tokens-studio',
      buildPath: './themes/build/js/',
      files: [
        {
          destination: 'variables.js',
          format: 'javascript/es6',
        },
      ],
    },
    css: {
      transforms: [
        'ts/descriptionToComment',
        'ts/size/px',
        'ts/opacity',
        'ts/size/lineheight',
        'ts/typography/fontWeight',
        'ts/resolveMath',
        'ts/size/css/letterspacing',
        'ts/typography/css/fontFamily',
        'ts/typography/css/shorthand',
        'ts/border/css/shorthand',
        'ts/shadow/css/shorthand',
        'ts/color/css/hexrgba',
        'ts/color/modifiers',
        'name/cti/kebab',
      ],
      buildPath: './themes/build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();

import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  // globalScript: 'src/global/app.ts',
  devServer: {
    hotReplacement: false,
  },
  outputTargets: [
    {
      type: 'www',
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
    }
  ],
  copy: [{
    src: 'assets',
    dest: 'assets',
  }]
};

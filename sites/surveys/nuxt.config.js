import DefaultConfig from "../../nuxt.config";

import {merge} from "lodash";

const CustomConfig = {
  dir: {
    pages: 'sites/surveys/pages',
  },
  generate: {
    dir: 'sites/surveys/dist'
  },
  server: {
    port: 4567
  },
  buildDir: '.nuxt/surveys',
  env: {
    syncUrlBase: process.env.SYNC_URL_BASE || 'http://localhost:3456'
  }
}

export default merge(DefaultConfig, CustomConfig);

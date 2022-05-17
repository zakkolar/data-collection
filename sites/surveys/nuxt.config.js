import DefaultConfig from "../../nuxt.config";

const CustomConfig = {
  dir: {
    pages: 'sites/surveys/pages',
    layouts: 'sites/surveys/layouts'
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

export default {...DefaultConfig, ...CustomConfig}

import DefaultConfig from "../../nuxt.config";

import {merge} from "lodash";

const CustomConfig = {
  head: {
    title: 'Data Privacy Articles'
  },
  dir: {
    pages: 'sites/articles/pages',
  },
  generate: {
    dir: 'sites/articles/dist'
  },
  content: {
    dir: 'sites/articles/content',
  },
  server: {
    port: 3456
  },
  buildDir: '.nuxt/articles',
  env: {
    syncUrlBase: process.env.SYNC_URL_BASE || 'http://localhost:4567',
    site: 'articles'
  }
}

export default merge(DefaultConfig, CustomConfig)

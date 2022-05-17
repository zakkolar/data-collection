import DefaultConfig from "../../nuxt.config";

const CustomConfig = {
  dir: {
    pages: 'sites/articles/pages',
    layouts: 'sites/articles/layouts',
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
    syncUrlBase: process.env.SYNC_URL_BASE || 'http://localhost:4567'
  }
}

export default {...DefaultConfig, ...CustomConfig}

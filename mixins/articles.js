export default {
  data() {
    return {
      articles: []
    }
  },
  async fetch() {
    this.articles = await this.$content('articles').fetch()
  }
}

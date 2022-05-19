export default {
  computed: {
    articleActivity() {
      return this.$store.state.articleActivity.events;
    }
  },
  methods: {
    logArticleEvent(event){
      this.$store.dispatch('articleActivity/logEvent', event);
    }
  }
}

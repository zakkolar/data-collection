<template>
  <div>
      <h1>Data Privacy Articles</h1>
      <p class="tc">Click on an article to read it</p>
      <div v-for="article in articles">
        <div class="fl tc w-33 pa2">
          <h2 @mouseenter="logHover" @mouseleave="logLeave" @click="logClick"><nuxt-link :to="`/article/${article.slug}`">{{article.title}}</nuxt-link></h2>
        </div>
      </div>
    </div>
</template>
<style>
</style>
<script>
import articles from "@/mixins/articles";
import articleLogger from "@/mixins/articleLogger";
import articleScrollSpy from "@/mixins/articleScrollSpy";


export default {
  layout: 'articles',
  mixins: [articles, articleLogger, articleScrollSpy],
  head() {
    return {
      title: "Data Privacy Articles"
    }
  },
  data() {
    return  {
      eventLog: [],
      articleStartTime: 0,
    }
  },
  mounted(){
    this.logLoad();
  }
}
</script>

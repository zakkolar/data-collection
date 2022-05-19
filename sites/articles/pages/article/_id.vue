<template>
  <div class="col-md-8 offset-md-2">
    <span @mouseenter="logHover" @mouseleave="logLeave" @click="logClick"><nuxt-link to="/" class="btn btn-dark mb-2">Back to articles</nuxt-link></span>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" ></nuxt-content>
    <hr style="border-color: rgba(0,0,0,0.4); margin-top:20px; margin-bottom:20px; border-width:1px">
    <p>{{article.source}}</p>
  </div>
</template>
<script>

import articleLogger from "@/mixins/articleLogger";
import {ReadArticleEvent} from "@/EventLogger";
import articleScrollSpy from "@/mixins/articleScrollSpy";

export default {
  mixins: [articleLogger, articleScrollSpy],
  layout: 'articles',
  head() {
    return {
      title: this.article.title,
    }
  },
  async asyncData({$content, route}){
    const article = await $content('articles', route.params.id).fetch();
    return {
      article
    }
  },
  data() {
    return {
      startTime: 0
    }
  },
  mounted() {
    this.logLoad();
    this.startTime = Date.now()
  },
  beforeDestroy() {
    this.logArticleEvent(new ReadArticleEvent(this.article.title, Date.now() - this.startTime))
  }

}
</script>

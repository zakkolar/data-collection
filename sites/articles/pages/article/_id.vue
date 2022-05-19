<template>
  <div class="col-md-8 offset-md-2">
    <nuxt-link to="/" class="btn btn-dark mb-2">Back to articles</nuxt-link>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" ></nuxt-content>
    <hr style="border-color: rgba(0,0,0,0.4); margin-top:20px; margin-bottom:20px; border-width:1px">
    <p>{{article.source}}</p>
  </div>
</template>
<script>

import articleLogger from "../../../../mixins/articleLogger";

export default {
  mixins: [articleLogger],
  layout: 'articles',
  head() {
    return {
      title: this.article.title
    }
  },
  async asyncData({$content, route}){
    const article = await $content('articles', route.params.id).fetch();
    return {
      article
    }
  }

}
</script>

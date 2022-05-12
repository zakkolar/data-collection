<template>
  <div>
    <nuxt-link to="/articles" class="btn btn-dark">Back to articles</nuxt-link>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article"></nuxt-content>
    <hr style="border-color: rgba(0,0,0,0.4); margin-top:20px; margin-bottom:20px; border-width:1px">
    <p>{{article.source}}</p>
  </div>
</template>
<script>

export default {
  layout: 'articles',
  async asyncData({$content, route}){
    const article = await $content('articles', route.params.id).fetch();
    return {
      article
    }
  }

}
</script>

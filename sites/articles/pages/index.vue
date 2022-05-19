<template>
  <div>
      <h1>Data Privacy Articles</h1>
      <p class="tc">Click on an article to read it</p>
      <div v-for="article in articles">
        <div class="fl tc w-33 pa2">
          <h2><nuxt-link :to="`/article/${article.slug}`" @mouseenter="logHover" @mouseleave="logLeave" @click.prevent="setArticle(article)">{{article.title}}</nuxt-link></h2>
        </div>
      </div>
    </div>
</template>
<style>
</style>
<script>
import {HoverEvent, LeaveEvent, ReadArticleEvent} from "@/EventLogger";
import * as dayjs from "dayjs";
import articles from "../../../mixins/articles";
import articleLogger from "../../../mixins/articleLogger";


export default {
  layout: 'articles',
  mixins: [articles, articleLogger],
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
  methods: {
    logEvent(event){
      this.eventLog.push(event);
    },
    setArticle(article){
      if(article === null){
        this.logEvent(new ReadArticleEvent(this.currentArticle.title, Date.now() - this.articleStartTime));
        this.articleStartTime = 0;
      }
      else{
        this.articleStartTime = Date.now();
      }

      this.currentArticle = article;
    },
    formatDate(val, template){
      if(isNaN(val)){
        val = parseInt(val);
      }
      return dayjs(val).format(template)
    },
    logHover(e){
      this.logEvent(HoverEvent.fromEvent(e));
    },
    logLeave(e){
      this.logEvent(LeaveEvent.fromEvent(e));
    },
  }
}
</script>

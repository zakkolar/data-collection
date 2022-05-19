import Vue from "vue";
import userData from "../mixins/userData";
import readFromUrl from "../mixins/readFromUrl";
import clearAllData from "../mixins/clearAllData";
import articleActivity from "../mixins/articleActivity";

if(!Vue.__data_collection_custom_mixins_loaded__){
  Vue.__data_collection_custom_mixins_loaded__ = true;
  Vue.mixin(userData)
  Vue.mixin(readFromUrl)
  Vue.mixin(clearAllData)
  Vue.mixin(articleActivity)
}

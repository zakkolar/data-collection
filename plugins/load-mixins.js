import Vue from "vue";
import userData from "../mixins/userData";
import readFromUrl from "../mixins/readFromUrl";

if(!Vue.__data_collection_custom_mixins_loaded__){
  Vue.__data_collection_custom_mixins_loaded__ = true;
  Vue.mixin(userData)
  Vue.mixin(readFromUrl)
}

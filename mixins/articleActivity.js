import {CookieSync} from "../backend/cookieSync";
import {USER_DATA_COOKIE_NAME} from "../store/userData";

export default {
  computed: {
    articleActivity() {
      return this.$store.state.articleActivity.events;
    },
    externalArticleActivity() {
      return (Object.keys(this.allUserData).length === 0) && parseInt(CookieSync.get(USER_DATA_COOKIE_NAME) || 0) > 0;
    }
  },
  methods: {
    logArticleEvent(event){
      this.$store.dispatch('articleActivity/logEvent', event);
    }
  }
}

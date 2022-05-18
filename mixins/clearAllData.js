import {defaultValues, userDataProperties} from "../store/userData";
import {dataStorage} from "../backend/dataStorage"
export default {
  methods: {
    clearAllData(){
      if(window.location.hash.length > 1){
        history.pushState("", document.title, window.location.pathname + window.location.search);
      }
      userDataProperties.forEach(prop => {
        this.$store.dispatch(`userData/${prop}`, defaultValues[prop] || null)
      })
      dataStorage.clearAll();
      document.cookie.split(";").forEach(cookie => document.cookie = `${cookie};path=/;domain=${process.env.domainBase};expires=Thu, 01 Jan 1970 00:00:01 GMT"`)
    }
  }
}

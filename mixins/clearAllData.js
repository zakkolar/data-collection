import {defaultValues, userDataProperties} from "../store/userData";
export default {
  methods: {
    clearAllData(){
      if(window.location.hash.length > 1){
        history.pushState("", document.title, window.location.pathname + window.location.search);
      }
      userDataProperties.forEach(prop => {
        this.$store.dispatch(`userData/${prop}`, defaultValues[prop] || null)
      })
    }
  }
}

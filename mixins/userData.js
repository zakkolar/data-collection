import {userDataProperties} from "../store/userData";

function makeComputed(scope, key){
  return {
    get() {
      return this.$store.state[scope][key]
    },
    set(value) {
      this.$store.dispatch(`${scope}/${key}`, value)
    }
  }
}
export default {
  computed: userDataProperties.reduce((prev, current) => ({...prev, [current]: makeComputed('userData', current)}), {} )
}

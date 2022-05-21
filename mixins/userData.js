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
  computed: {
    allUserData() {
      const data = {};
      userDataProperties.forEach(prop => {
        const propVal = this.$store.state['userData'][prop];
        if(!!propVal && !!propVal.length){
          data[prop] = this.$store.state['userData'][prop]
        }
      })
      return data;
    },
    ... userDataProperties.reduce((prev, current) => ({...prev, [current]: makeComputed('userData', current)}), {} )
  }
}

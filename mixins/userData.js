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
    number: makeComputed('userData', 'number'),
    color: makeComputed('userData', 'color'),
    entertainment: makeComputed('userData', 'entertainment'),
  },
}

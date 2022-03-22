export default {
  computed: {
    number: {
      get () {
        return this.$store.state.userData.number
      },
      set (value) {
        this.$store.dispatch('userData/number', value)
      }
    },
    color: {
      get() {
        return this.$store.state.userData.color
      },
      set(value) {
        this.$store.dispatch('userData/color', value)
      }
    },
    entertainment: {
      get() {
        return this.$store.state.userData.entertainment
      },
      set(value) {
        this.$store.dispatch('userData/entertainment', value)
      }
    }
  }
}

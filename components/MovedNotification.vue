<template>
  <div v-if="show" class="redirect-banner">
    The domain for this app will soon change from techlit.app to techlit.tools. To continue using it, please update your link to: <a :href="newUrl">{{newUrl}}</a> <button @click="acknowledge">x</button>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      newUrl: null,
      acknowledged: false
    }
  },
  computed: {
    show() {
      return this.newUrl && !this.acknowledged;
    }
  },
  mounted() {
    this.acknowledged = localStorage.getItem('acknowledged') === 'true';
    const url = new URL(window.location)
    if(url.hostname.indexOf('techlit.app') > -1 || url.hostname.indexOf('localhost') > -1) {
      this.newUrl = window.location.toString().replace('techlit.app', 'techlit.tools')
    }
    if(url.href.indexOf('acknowledged=true') > -1) {
      this.acknowledge();
    }
  },
  methods: {
    acknowledge() {
      localStorage.setItem('acknowledged', 'true');
      this.acknowledged = true;
    }
  }
})
</script>
<style scoped>
.redirect-banner {
  padding: 8px 34px 8px 8px;
  background-color: #ffffa2;
  position: relative;
  z-index: 1000;
}

.redirect-banner button {
  position: absolute;
  right: 5px;
  top: 5px;
  border: none;
  width: 24px;
  text-align: center;
}
</style>

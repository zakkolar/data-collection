<template>
  <div v-if="show">

  </div>
</template>
<script>
import { mapState } from 'vuex'
import userData from "~/mixins/userData";
export default {
  data() {
    return {
      keyPresses: 0
    }
  },
  computed: {
    show() {
      return this.keyPresses >= 3;
    },
  },

  mounted() {
    document.addEventListener('keydown', this.keyDown)
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.keyDown)
  },
  mixins: [userData],
  methods: {
    keyDown(e) {
      const key = e.key;
      if(key === 'p'){
        this.keyPresses++;
      }
      else {
        this.keyPresses = 0;
      }
    }
  }
}
</script>
<style scoped lang="scss">
#collected {
  position: absolute;
  width: 400px;
  border: #333333 4px solid;
  background: #fff;
  left: auto;
  right: auto;
  top: 0;
  padding: 5px;

}

h1 {
  font-size: 30px;
  text-align: center;
}

table {
  border-collapse: collapse
}

td {
  padding: 5px;

  &:first-child {
    font-weight: bold;
    text-align: right;
  }
}

ul, li{
  margin-bottom: 0;
  padding-bottom: 0;
}

.clearData {
  margin: 10px auto 5px;
  display: block;
}

</style>

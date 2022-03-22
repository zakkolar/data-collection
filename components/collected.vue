<template>
  <div v-if="show">
    <div id="collected">
      <h1>Collected Data</h1>
      <div v-if="number">
        <b>Number: </b>{{number}}
      </div>
      <div v-if="color">
        <b>Color: </b>{{color}}
      </div>
      <div v-if="entertainment">
        <b>Book, movie, or TV show: </b>{{entertainment}}
      </div>
    </div>
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
  width: 300px;
  border: #333333 4px solid;
  background: #fff;
  left: auto;
  right: auto;
  top: 0;

  h1 {
      font-size: 30px;
  }

}

</style>

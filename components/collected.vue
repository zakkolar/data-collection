<template>
  <div v-if="show">
    <div id="collected">
      <h1>Collected Data</h1>
      <table>
        <tr v-if="number">
          <td>Number:</td>
          <td>{{number}}</td>
        </tr>
        <tr v-if="color">
          <td>Color:</td>
          <td>{{color}}</td>
        </tr>
        <tr v-if="entertainment">
          <td>Book, movie, or TV show:</td>
          <td>{{entertainment}}</td>
        </tr>
        <tr v-if="firstName">
          <td>First name:</td>
          <td>{{firstName}}</td>
        </tr>
        <tr v-if="lastName">
          <td>Last Name:</td>
          <td>{{lastName}}</td>
        </tr>
        <tr v-if="devices.length">
          <td>Devices:</td>
          <td>
            <ul>
              <li v-for="device in devices">
                {{device}}
              </li>
            </ul>
          </td>
        </tr>
        <tr v-if="socialMedia.length">
          <td>Social media:</td>
          <td>
            <ul>
              <li v-for="site in socialMedia">
                {{site}}
              </li>
            </ul>
          </td>

        </tr>
      </table>
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
  width: 400px;
  border: #333333 4px solid;
  background: #fff;
  left: auto;
  right: auto;
  top: 0;

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

</style>

<template>
  <div>
    <form @submit:prevent="" class="form-card">
      <fieldset class="form-fieldset">
        <legend class="form-legend">
          Personality Quiz
        </legend>

        <div class="form-element form-input">
          <input id="number" class="form-element-field" v-model="number"  type="number" required/>
          <div class="form-element-bar"></div>
          <label class="form-element-label" for="number">Favorite number</label>
        </div>

        <div class="form-element form-input">
          <input id="entertainment" class="form-element-field" v-model="entertainment" type="text" required/>
          <div class="form-element-bar"></div>
          <label class="form-element-label" for="entertainment">Favorite book, movie, or TV show</label>
        </div>

        <div class="form-radio form-radio-inline">
          <div class="form-radio-legend">
            Choose a color
          </div>
          <label v-for="c of colors" class="form-radio-label">
            <input name="color" :value="c" type="radio" v-model="color" class="form-radio-field">
            <i class="form-radio-button"></i>
            <span>{{ c | capitalize }}</span>
          </label>

        </div>


      </fieldset>

      {{ JSON.stringify({color, entertainment, number})}}

      <div class="form-actions">
        <button class="form-btn" type="submit">Submit</button>
      </div>
    </form>

  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap-reboot.min.css"
        }
      ]
    }
  },

  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },

  data(){
    return {
      colors: ['red', 'green', 'blue', 'yellow']
    }
  },
    computed: {
      number: {
        get () {
          return this.$store.state.personality.number
        },
        set (value) {
          this.$store.commit('personality/setNumber', value)
        }
      },
      color: {
        get() {
          return this.$store.state.personality.color
        },
        set(value) {
          this.$store.commit('personality/setColor', value)
        }
      },
      entertainment: {
        get() {
          return this.$store.state.personality.entertainment
        },
        set(value) {
          this.$store.commit('personality/setEntertainment', value)
        }
      }
    },
}
</script>

<style>

@import '~/assets/personality.css';


</style>

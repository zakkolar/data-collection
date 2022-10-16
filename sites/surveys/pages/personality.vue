<template>
  <div>
    <form @submit.prevent="submitted = true" class="form-card">
      <fieldset class="form-fieldset">
        <legend class="form-legend">
          Personality Quiz
        </legend>
        <div v-if="submitted">
          <p style="font-size: 1.5em" v-if="displayName && personalize">Thanks for submitting, {{displayName}}!</p>
          <table>
            <tr v-if="displayName">
              <td>Name</td>
              <td>{{displayName}}</td>
            </tr>
            <tr v-if="number">
              <td>
                Favorite Number:
              </td>
              <td>
                {{number}}
              </td>
            </tr>
            <tr v-if="entertainment">
              <td>Book, movie, or TV show:</td>
              <td>{{entertainment}}</td>
            </tr>
            <tr>
              <td>Color:</td>
              <td :style="`color: white; background-color: ${color}`">{{color}}</td>
            </tr>
          </table>
        </div>
        <div v-else>
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
              <input name="color" :value="c" type="radio" v-model="color" required class="form-radio-field">
              <i class="form-radio-button"></i>
              <span>{{ c | capitalize }}</span>
            </label>
          </div>

        </div>

      </fieldset>
      <div class="form-actions" v-if="!submitted">
        <button class="form-btn" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
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
</style>

<script>
export default {
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  data(){
    return {
      colors: ['red', 'green', 'blue', 'purple'],
      submitted: false,
      personalize: true
    }
  },
  head: {
    title: 'Personality Survey'
  }
}
</script>

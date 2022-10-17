<template>
  <div>
    <form @submit.prevent="submitted = true" class="form-card">
      <fieldset class="form-fieldset">
        <legend class="form-legend">
          School Survey
        </legend>
        <div v-if="submitted">
          <table class="data">
            <tr v-if="subject">
              <td>Favorite subject:</td>
              <td>{{subject}}</td>
            </tr>
            <tr v-if="inferenceLabel && inferenceValue">
              <td>{{inferenceLabel}}:</td>
              <td>{{inferenceValue}}</td>
            </tr>
          </table>


        </div>
        <div v-else>
          <div class="form-element form-input">
            <input id="subject" class="form-element-field" v-model="subject"  type="text" required/>
            <div class="form-element-bar"></div>
            <label class="form-element-label" for="subject">Favorite subject</label>
          </div>

        </div>

      </fieldset>
      <div class="form-actions" v-if="!submitted">
        <button class="form-btn" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      submitted: false,
      personalize: true
    }
  },
  head: {
    title: 'School Survey'
  }
}
</script>

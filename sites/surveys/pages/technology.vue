<template>
  <div>
    <form @submit.prevent="submitted = true" class="form-card">
      <fieldset class="form-fieldset">
        <legend class="form-legend">
          Technology Survey
        </legend>
        <div v-if="submitted">
          <p>Thanks for submitting<span v-if="name && personalize">, {{name}}</span>!</p>
        </div>
        <div v-else>
          <div class="form-checkbox">
            <div class="form-checkbox-legend">
              What kind of device(s) do you use regularly?
            </div>
            <label v-for="c of deviceChoices" class="form-checkbox-label">
              <input name="color" :value="c" type="checkbox" v-model="devices" class="form-checkbox-field">
              <i class="form-checkbox-button"></i>
              <span>{{ c }}</span>
            </label>
          </div>

          <div class="form-checkbox">
            <div class="form-checkbox-legend">
              What social media service(s) do you use regularly?
            </div>
            <label v-for="c of socialMediaChoices" class="form-checkbox-label">
              <input name="color" :value="c" type="checkbox" v-model="socialMedia" class="form-checkbox-field">
              <i class="form-checkbox-button"></i>
              <span>{{ c }}</span>
            </label>
          </div>

        </div>

      </fieldset>
      <div class="form-actions" v-if="!submitted">
        <button class="form-btn" type="submit">Submit</button>
      </div>
    </form>
    <collected></collected>
  </div>
</template>

<script>
import loadTechnologyData from "../../../mixins/loadTechnologyData";
export default {
  mixins: [loadTechnologyData],
  data(){
    return {
      deviceChoices: ['Chromebook','PC','iPhone','Android phone','iPad','Android tablet','Other'],
      socialMediaChoices: ["I don't use social media",'YouTube', 'SnapChat', 'TikTok', 'Instagram', 'Twitter', 'Facebook', 'Other'],
      submitted: false,
      personalize: true
    }
  },
  head: {
    title: 'Technology Survey'
  }
}
</script>

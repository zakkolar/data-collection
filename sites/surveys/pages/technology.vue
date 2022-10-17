<template>
  <div>
    <form @submit.prevent="submitted = true" class="form-card">
      <fieldset class="form-fieldset">
        <legend class="form-legend">
          Technology Survey
        </legend>
        <div v-if="submitted">
          <table class="data">
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
            <tr v-if="ip">
              <td>IP Address:</td>
              <td>{{ip}}</td>
            </tr>
            <tr v-if="country">
              <td>Country:</td>
              <td>{{country}}</td>
            </tr>
            <tr v-if="region">
              <td>State/region:</td>
              <td>{{region}}</td>
            </tr>
            <tr v-if="language">
              <td>Language:</td>
              <td>{{language}}</td>
            </tr>
            <tr v-if="userAgent">
              <td>User agent:</td>
              <td>{{userAgent}}</td>
            </tr>
            <tr v-if="platform">
              <td>Platform:</td>
              <td>{{platform}}</td>
            </tr>
            <tr v-if="screenSize">
              <td>Screen size:</td>
              <td>{{screenSize}}</td>
            </tr>
            <tr v-if="browserSize">
              <td>Browser size</td>
              <td>{{browserSize}}</td>
            </tr>
            <tr v-if="darkMode">
              <td>Dark mode</td>
              <td>{{darkMode}}</td>
            </tr>
            <tr v-if="timeZone">
              <td>Time Zone</td>
              <td>{{timeZone}}</td>
            </tr>
            <tr v-if="operatingSystem">
              <td>Operating System</td>
              <td>{{operatingSystem}}</td>
            </tr>
            <tr v-if="colorDepth">
              <td>Color Depth</td>
              <td>{{colorDepth}}</td>
            </tr>
          </table>

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
      submitted: false
    }
  },
  head: {
    title: 'Technology Survey'
  }
}
</script>

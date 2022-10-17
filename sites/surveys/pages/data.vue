<template>
  <div>
    <div class="form-card">
      <div class="form-fieldset">
        <h1 class="form-legend">All data collected from your device</h1>
        <div style="margin-top: 30px;">
          <table class="data">
            <tr v-if="displayName">
              <td>Name:</td>
              <td>{{displayName}}</td>
            </tr>
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
            <tr v-if="city">
              <td>City:</td>
              <td>{{city}}</td>
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
              <td>Browser size:</td>
              <td>{{browserSize}}</td>
            </tr>
            <tr v-if="darkMode">
              <td>Dark mode:</td>
              <td>{{darkMode}}</td>
            </tr>
            <tr v-if="timeZone">
              <td>Time Zone:</td>
              <td>{{timeZone}}</td>
            </tr>
            <tr v-if="operatingSystem">
              <td>Operating System:</td>
              <td>{{operatingSystem}}</td>
            </tr>
            <tr v-if="colorDepth">
              <td>Color Depth:</td>
              <td>{{colorDepth}}</td>
            </tr>
            <tr v-if="subject">
              <td>Favorite subject:</td>
              <td>{{subject}}</td>
            </tr>
            <tr v-if="inferenceValue && inferenceLabel">
              <td>{{inferenceLabel}}:</td>
              <td>{{inferenceValue}}</td>
            </tr>
          </table>
          <button class="clearData" @click="clearAllData">Clear all collected data</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userData from "../../../mixins/userData";
export default {
  mixins: [userData],
  head: {
    title: 'Collected Data'
  }
}
</script>
<style lang="scss">
h1 {
  padding: 0; margin: 0;
}


h1 {
  font-size: 30px;
  text-align: center;
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

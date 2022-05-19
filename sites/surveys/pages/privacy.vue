<template>
  <div>
    <div class="form-card">
      <div class="form-fieldset">
        <h1 class="form-legend">Privacy</h1>
        <h2>Overview</h2>
        <p>This purpose of this website is to simulate techniques used by many apps and websites to demonstrate how they prevent privacy. At the same time, the demonstration is designed to be incredibly respectful of user privacy. No data is stored outside of your web browser, and very little data even leaves the browser.</p>

        <h2>IP Lookup</h2>
        <p>
          The only piece of data that leaves the browser is the user's IP address. The IP address is sent to <a href="https://ip-api.com" target="_blank">ip-api</a> to retrieve the approximate location associated with that particular IP address. Per their <a href="https://ip-api.com/docs/legal" target="_blank">privacy policy</a>, ip-api does not log requests and discards any data it receives after returning the corresponding location.
        </p>

        <h2>Cookies</h2>
        <p>
          If you fill out the personality survey, the site places a cookie on your computer that identifies the color you chose (in addition to the local storage, described below). Cookies are also set to track the number of pieces of data collected on the survey pages and whether any article reading data has been collected. In both cases, the actual data collected is not stored in the cookie.
        </p>
        <p>
          Web browsers automatically send cookies back to the servers that host websites when you navigate between pages. However, all cookie values are ignored by this website's server and nothing is stored.
        </p>

        <h2>Local storage</h2>
        <p>
          All other data, including the retrieved location, are only stored in the user's browser using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">local storage API</a>. No data are transmitted anywhere else, nor can any be accessed by other websites. You may view all data stored at the bottom of this page. You can delete it by clearing local storage for this website in your browser or using the button at the bottom of this page.
        </p>


        <h2>Currently Collected Data</h2>

        <div v-if="collectedDataExists">
          <pre>{{ collectedDataString }}</pre>
          <p>
            <button style="margin-top:0" @click="clearAllData" class="form-btn">Clear All Data</button>
          </p>

          <p>The site will continue storing local data if you revisit any of the pages after clearing. However, you can always return to this page and clear it again if you so choose.</p>
        </div>

        <p v-else>
          There is currently no data for this site stored in your browser.
        </p>

        <div v-if="externalArticleActivity || externalUserData">
          <h2>Additional data</h2>
          <p>
            There may be additional data that cannot be displayed or deleted on this site due to your browser security settings. To check for additional data and/or remove it, click <a :href="`${otherSiteUrl}/privacy`">here</a>.
          </p>
        </div>



      </div>
  </div>

  <collected></collected>
  </div>
</template>
<script>
import {userDataProperties, defaultValues} from "../../../store/userData";

export default {
  data() {
    return {
      otherSiteUrl: process.env.syncUrlBase
    }
  },
  computed: {
    collectedData() {
      const data = this.allUserData;


      if(this.articleActivity.length > 0){
        data.articleActivity = this.articleActivity;
      }

      return data;
    },
    collectedDataString() {


      return JSON.stringify(this.collectedData, null, 2);
    },

    collectedDataExists() {

      return Object.keys(this.collectedData).length > 0;
    }
  },
  head: {
    title: 'Privacy'
  }
}
</script>
<style>
h2 {
  font-size: 1.2em;
  font-weight: bold;
}
</style>

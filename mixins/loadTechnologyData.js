export default {
  mounted() {
    this.language = navigator.language;

    this.userAgent = navigator.userAgent;

    this.platform = navigator.platform || navigator.userAgentData?.platform;

    this.screenSize = `${window.screen.width} x ${window.screen.height}`;

    this.browserSize = `${window.innerWidth} x ${window.innerHeight}`

    this.$axios.get('/.netlify/functions/ip').then(response => {
      
      if(response.data){
        this.ip = response.data.ip;
        this.region = response.data.region;
        this.country = response.data.country;
        this.city = response.data.city;
        this.zip = response.data.zip;
      }
    })
  }
}

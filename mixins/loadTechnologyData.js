export default {
  mounted() {
    this.language = navigator.language;

    this.userAgent = navigator.userAgent;

    this.platform = this.getPlatform();

    this.screenSize = `${window.screen.width} x ${window.screen.height}`;

    this.browserSize = `${window.innerWidth} x ${window.innerHeight}`

    this.darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches+'';

    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    this.operatingSystem = this.getOs();

    this.colorDepth = screen.colorDepth;


    this.$axios.get('/.netlify/functions/ip').then(response => {

      if(response.data){
        this.ip = response.data.ip;
        this.region = response.data.region;
        this.country = response.data.country;
        this.city = response.data.city;
        this.latitude = response.data.latitude;
        this.longitude = response.data.longitude;
      }
    })
  },
  methods: {
    getPlatform() {
      return navigator.platform || navigator.userAgentData?.platform;
    },
    getOs() {

      const platform = this.getPlatform();

      let OSName="Unknown OS"
      if (platform. indexOf ( "Win" )!==-1) OSName="Windows";
      if (platform. indexOf ( "Mac")!==-1) OSName="MacOS";
      if (platform. indexOf ("X11")!==-1) OSName="UNIX";
      if (platform.indexOf ("Linux")!==-1) OSName="Linux";
      if (platform. indexOf ("iPhone")!==-1) OSName="iOS"
      if (platform.indexOf ("Android")!==-1) OSName="Android"

      return OSName;

    }
  }
}

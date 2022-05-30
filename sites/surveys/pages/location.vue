<template>
  <div>
    <div class="form-card">
      <div class="form-fieldset">
        <h1 class="form-legend">Map</h1>
        <Map v-if="latitude && longitude" :lat="latitude" :long="longitude" :zoom="zoom"></Map>
        <p v-else>No location data collected.</p>
      </div>
    </div>
  </div>
</template>
<script>
import Map from "../../../components/map";
export default {
  components: {Map},
  head: {
    title: "Map"
  },
  methods: {
    updateLocation(position){
      if(position.coords){
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      }
    }
  },
  mounted() {
    // if(navigator.geolocation){
    //   navigator.geolocation.getCurrentPosition(this.updateLocation);
    // }
  },
  computed: {
    zoom() {
      const latDecimals = this.latitude.toString().split(".")[1]?.length || 0;
      const longDecimals = this.longitude.toString().split(".")[1]?.length || 0;

      const zoomConsidration = Math.max(latDecimals, longDecimals);

      return zoomConsidration < 7 ? 15: 18;

    }
  }
}
</script>

<template>
  <div>
    <div :id="id" class="map">
    </div>
  </div>

</template>
<script>
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from "ol/proj";
import "ol/ol.css";
export default {
  data() {
    return {
      map: null
    }
  },
  props: {
    id: {
      default() {
        let mapId;
        do {
          mapId = `_map_${Math.random().toString().substring(2)}`
        }
        while(document.getElementById(mapId))
        return mapId;
      }
    },
    lat: {
      default: 0
    },
    long: {
      default: 0
    },
    zoom: {
      default: 15
    }
  },
  mounted(){
    this.createMap();
    this.updateMap();
  },
  watch: {
   lat() {
     this.updateMap();
   },
    long() {
     this.updateMap();
    },
    zoom() {
     this.updateMap()
    }
  },
  methods: {
    createMap() {
      this.map = new Map({
        target: this.id,
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
      })
    },
    updateMap() {
      this.map.setView(new View({
        center: fromLonLat([this.long, this.lat]),
        zoom: this.zoom
      }));
    }
  }
}
</script>
<style scoped>
.map {
  height: 400px;
  width: 100%;
  margin-top: 20px;
}
</style>

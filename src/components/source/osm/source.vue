<script>
  import OSMSource from 'ol/source/osm'
  import xyzSource from '../xyz/source.vue'

  const props = {
    attributions: {
      type: String,
      default: OSMSource.ATTRIBUTION.getHTML()
    },
    url: {
      type: String,
      default: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    maxZoom: {
      type: Number,
      default: 19
    }
  }

  const methods = {
    createSource () {
      // always EPSG:3857, size: 256x256, format png
      return new OSMSource({
        url: this.currentUrl,
        attributions: this.currentAttributions,
        crossOrigin: this.crossOrigin,
        maxZoom: this.currentMaxZoom,
        cacheSize: this.cacheSize,
        opaque: this.opaque,
        reprojectionErrorThreshold: this.reprojectionErrorThreshold,
        wrapX: this.wrapX
      })
    }
  }

  export default {
    name: 'vl-source-osm',
    mixins: [ xyzSource ],
    props,
    methods
  }
</script>

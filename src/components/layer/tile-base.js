import ol from 'vl-ol'
import layer from 'vl-components/layer/layer'

const props = {
  preload: Number
}

const methods = {
  createLayer () {
    return new ol.layer.Tile({
      id: this.id,
      minResolution: this.minResolution,
      maxResolution: this.maxResolution,
      opacity: this.opacity,
      visible: this.visible,
      preload: this.preload,
      projection: this.projection,
      extent: this.extent,
      zIndex: this.zIndex
    })
  }
}

export default {
  mixins: [ layer ],
  props,
  methods
}

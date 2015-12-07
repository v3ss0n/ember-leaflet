import BoundsPathLayer from 'ember-leaflet/components/bounds-path-layer';

export default BoundsPathLayer.extend({

  leafletOptions: [
    'smoothFactor', 'noClip'
  ],

  createLayer() {
    return this.L.rectangle(...this.get('requiredOptions'), this.get('options'));
  }
});

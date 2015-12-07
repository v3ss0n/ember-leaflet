import PathLayer from 'ember-leaflet/components/path-layer';

export default PathLayer.extend({

  leafletRequiredOptions: [
    'bounds'
  ],

  leafletProperties: [
    'bounds:setBounds'
  ]
});

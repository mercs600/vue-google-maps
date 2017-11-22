'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkerClusterer = exports.MountableMixin = exports.Autocomplete = exports.MapElementMixin = exports.Map = exports.InfoWindow = exports.loaded = exports.load = undefined;
exports.install = install;

var _manager = require('./manager.js');

var _infoWindow = require('./components/infoWindow.vue');

var _infoWindow2 = _interopRequireDefault(_infoWindow);

var _map = require('./components/map.vue');

var _map2 = _interopRequireDefault(_map);

var _autocomplete = require('./components/autocomplete.vue');

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _mapElementMixin = require('./components/mapElementMixin');

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

var _mountableMixin = require('./utils/mountableMixin');

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _deferredReady = require('./utils/deferredReady');

var _markerclusterer = require('./utils/markerclusterer');

var _markerclusterer2 = _interopRequireDefault(_markerclusterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export everything
exports.load = _manager.load;
exports.loaded = _manager.loaded;
exports.InfoWindow = _infoWindow2.default;
exports.Map = _map2.default;
exports.MapElementMixin = _mapElementMixin2.default;
exports.Autocomplete = _autocomplete2.default;
exports.MountableMixin = _mountableMixin2.default;
exports.MarkerClusterer = _markerclusterer2.default;
// import StreetViewPanorama from './components/streetViewPanorama.vue';
// import PlaceInput from './components/placeInput.vue';

// import Marker from './components/marker';
// import Cluster from './components/cluster';
// import Polyline from './components/polyline';
// import Polygon from './components/polygon';
//import Circle from './components/circle';
//import Rectangle from './components/rectangle';

// Vue component imports

function install(Vue, options) {
  options = Object.assign({}, {
    installComponents: true
  }, options);

  Vue.use(_deferredReady.DeferredReady);

  var defaultResizeBus = new Vue();
  Vue.$gmapDefaultResizeBus = defaultResizeBus;
  Vue.mixin({
    created: function created() {
      this.$gmapDefaultResizeBus = defaultResizeBus;
    }
  });

  if (options.load) {
    (0, _manager.load)(options.load);
  }

  if (options.installComponents) {
    Vue.component('GmapMap', _map2.default);
    Vue.component('GmapInfoWindow', _infoWindow2.default);
    Vue.component('GmapAutocomplete', _autocomplete2.default);
  }
}
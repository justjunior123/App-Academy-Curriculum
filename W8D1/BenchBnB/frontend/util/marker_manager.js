// class MarkerManager {
//   constructor(map){
//     this.map = map;
//     this.markers = [];
//   }
//
//   updateMarkers(benches){
//     this._benchesToAdd(benches).forEach( bench => {
//       this._createMarkerFromBench(bench);
//     });
//     this._markersToRemove(benches).forEach( marker => {
//       this._removeMarker(marker);
//     });
//   }
//
//   _benchesToAdd(benches) {
//     const benchDescriptions = this.markers.map( marker => {
//       return marker.title;
//     });
//
//     const toAdd = [];
//
//     benches.forEach( bench => {
//       if (!benchDescriptions.includes(bench.description)) {
//         toAdd.push(bench);
//       }
//     });
//     return toAdd;
//   }
//
//   _createMarkerFromBench(bench) {
//     const marker = new google.maps.Marker({
//     position: {lat: bench.lat, lng: bench.lng},
//     map: this.map,
//     title: bench.description
//     });
//     this.markers.push(marker);
//   }
//
//   _markersToRemove(benches) {
//     const benchDescriptions = benches.map( bench => {
//       return bench.description;
//     });
//
//     const toRemove = [];
//     this.markers.forEach( marker => {
//       if (!benchDescriptions.includes(marker.title)) {
//         toRemove.push(marker);
//       }
//     });
//     return toRemove;
//   }
//
//   _removeMarker(marker) {
//     marker.setMap(null);
//     const markerIdx = this.markers.indexOf(marker);
//     this.markers.splice(markerIdx, 1);
//   }
// }
//
//
// export default MarkerManager;

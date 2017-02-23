if (Meteor.isServer) {
  Meteor.methods({
    getBrands() {
      return Meteor.http.call('GET', 'https://car-api.firebaseio.com/rest.json');
    }
  });
}
Template.carsList.helpers({
  cars() {
    const cars = CarCustomizer.Cars.getAll();
    if (!! cars && cars.length > 0) {
      return cars
    } else {
      FlowRouter.go('/');
    }
  }
});

Template.carsList.events({
  'click .js-edit': function (e, tpl) {
    const carId = this._id;
    if (!! carId) {
      FlowRouter.go(`/new/${carId}`);
    }
  },
  'click .js-remove': function (e, tpl) {
    const carId = this._id;
    if (!! carId) {
      Meteor.call('carcustomizer.car.remove', carId);
    }
  }
});
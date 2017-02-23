const getCar = () => {
  if (FlowRouter.getParam('carId')) {
    return CarCustomizer.Cars.get(FlowRouter.getParam('carId'));
  }
  return false;
};

Template.carCustomizer.helpers({
  car() {
    const car = getCar();

    if (!! car) {
     return car; 
    }
    return false;
  }
});

Template.carCustomizer.events({
  'change #name': (e, tpl) => {
    const carId = FlowRouter.getParam('carId'),
          name = $(e.currentTarget).val();

    if (!! name) {
      Meteor.call('carcustomizer.car.update.name', carId, name);
    }
  }
});
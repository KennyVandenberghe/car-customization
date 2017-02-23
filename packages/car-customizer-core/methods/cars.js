if (Meteor.isServer) {
  Meteor.methods({
    'carcustomizer.car.create'(car){
      return CarCustomizer.Car.create(car);
    },
    'carcustomizer.car.remove'(id){
      return CarCustomizer.Car.remove(id);
    },
    'carcustomizer.car.update.name'(id, name){
      return CarCustomizer.Car.updateName(id, name);
    },
    'carcustomizer.car.update.brand'(id, brand){
      return CarCustomizer.Car.updateBrand(id, brand);
    },
    'carcustomizer.car.body.update.type'(id, type){
      return CarCustomizer.Car.updateBodyType(id, type);
    },
    'carcustomizer.car.body.update.color'(id, color){
      return CarCustomizer.Car.updateBodyColor(id, color);
    },
    'carcustomizer.car.wheels.update.type'(id, type){
      return CarCustomizer.Car.updateWheelsType(id, type);
    },
    'carcustomizer.car.wheels.update.color'(id, color){
      return CarCustomizer.Car.updateWheelsColor(id, color);
    },
  });

}
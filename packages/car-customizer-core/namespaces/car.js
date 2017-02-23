if (! CarCustomizer.Car) {
  CarCustomizer.Car = {};
}

_.extend(CarCustomizer.Car, {
  create: function(car = {body: {}, wheels: {}}) {
    const defaultColor = '#606060';
    car.body.type = 'rectangle';
    car.body.color = defaultColor;
    car.wheels.type = 'circle';
    car.wheels.color = defaultColor;
    
    return CarCustomizer.Cars.insert(car);
  },
  remove: function(carId) {
    return CarCustomizer.Cars.remove(carId);
  },
  updateName: function(_id, name) {
    CarCustomizer.Cars.update({
      _id: _id
    }, {
      $set: {
        name
      }
    });
  },
  updateBrand: function(_id, brand) {
    CarCustomizer.Cars.update({
      _id: _id
    }, {
      $set: {
        brand
      }
    });
  },
  updateBodyType: function(_id, type) {
    CarCustomizer.Cars.update({
      _id: _id
    }, {
      $set: {
        'body.type': type
      }
    });
  },
  updateBodyColor: function(_id, color) {
    CarCustomizer.Cars.update({
      _id: _id
    }, {
      $set: {
        'body.color': color
      }
    });
  },
  updateWheelsType: function(_id, type) {
    CarCustomizer.Cars.update({
      _id: _id
    }, {
      $set: {
        'wheels.type': type
      }
    });
  },
  updateWheelsColor: function(_id, color) {
    CarCustomizer.Cars.update({
      _id: _id
    }, {
      $set: {
        'wheels.color': color
      }
    });
  },
  
  
});

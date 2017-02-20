// TODO ES6
Cars = new Mongo.Collection('cars');

// Collection helpers to centralize all Cars queries
_.extend(Cars, {
  get: function(id) {
    return CarCustomizer.Cars.findOne(id);
  },
  findById: function(_id) {
    return CarCustomizer.Cars.find({ _id });
  },
  getByName: function(name) {
    return CarCustomizer.Cars.find({
      name
    });
  }
});

// Document instance helpers
Cars.helpers(_.extend({}, {
  getName() {
    return this.name;
  },
  getBodyType() {
    return this.body.type;
  },
  getBodyColor() {
    return this.body.color;
  },
  getWheelsType() {
    return this.wheels.type;
  },
  getWheelsColor() {
    return this.wheels.color;
  }
}));

CarCustomizer.Cars = Cars;
const getCar = () => {
  if (FlowRouter.getParam('carId')) {
    return CarCustomizer.Cars.get(FlowRouter.getParam('carId'));
  }
  return false;
};

const colors = [
  '#F44336', 
  '#E91E63', 
  '#9C27B0', 
  '#673AB7', 
  '#3F51B5', 
  '#2196F3', 
  '#03A9F4', 
  '#00BCD4', 
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722',
  '#795548',
  '#9E9E9E',
  '#607D8B'
];

Template.carCustomizer.onCreated(function() {
  this.bodyTypes = new carOptions({
    name: 'bodyTypes',
    action: 'body.update.type',
    items: ['rectangle', 'parallelogram', 'oval']
  });
  this.bodyColors = new carOptions({
    name: 'bodyColors',
    type: 'color',
    action: 'body.update.color',
    items: colors
  });
  this.wheelTypes = new carOptions({
    name: 'wheelTypes',
    action: 'wheels.update.type',
    items: ['circle', 'oval', 'square']
  });
  this.wheelColors = new carOptions({
    name: 'wheelColors',
    type: 'color',
    action: 'wheels.update.color',
    items: colors
  });
});

Template.carCustomizer.helpers({
  car() {
    const car = getCar();

    if (!! car) {
     return car; 
    }
    return false;
  },
  bodyTypeContext() {
    return {
      carOptions: Template.instance().bodyTypes
    }
  },
  bodyColorContext() {
    return {
      carOptions: Template.instance().bodyColors
    }
  },
  wheelsTypeContext() {
    return {
      carOptions: Template.instance().wheelTypes
    }
  },
  wheelsColorContext() {
    return {
      carOptions: Template.instance().wheelColors
    }
  }
});

Template.carCustomizer.events({
  'click .option-block': function (e, tpl) {
    const carId = FlowRouter.getParam('carId'),
          $el = $(e.currentTarget),
          action = $el.data('action');
          name = $el.data('name');
    Meteor.call(`carcustomizer.car.${action}`, carId, tpl[name].getSelectedItem());
  },
  'change #name': function (e, tpl) {
    const carId = FlowRouter.getParam('carId'),
          name = $(e.currentTarget).val();

    if (!! name) {
      Meteor.call('carcustomizer.car.update.name', carId, name);
    }
  }
});
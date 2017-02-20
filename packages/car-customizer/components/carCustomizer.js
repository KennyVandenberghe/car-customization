const getCar = () => {
  if (FlowRouter.getParam('carId')) {
    return CarCustomizer.Cars.get(FlowRouter.getParam('carId'));
  }
  return false;
};

Template.carCustomizer.onCreated(function() {
  this.bodyTypes = new carOptions({
    action: 'body.update.type',
    items: ['rectangle', 'parallelogram', 'oval']
  });
  this.bodyColors = new carOptions({
    type: 'color',
    action: 'body.update.color',
    items: ['#aeaeae', '#eaeaea', '#368dea']
  });
  this.wheelTypes = new carOptions({
    action: 'wheels.update.type',
    items: ['circle', 'oval', 'square']
  });
  this.wheelColors = new carOptions({
    type: 'color',
    action: 'wheels.update.color',
    items: ['#aeaeae', '#eaeaea', '#368dea']
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
    Meteor.call(`carcustomizer.car.${action}`, carId, this.toString());
  }
});
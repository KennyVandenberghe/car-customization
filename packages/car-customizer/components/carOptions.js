const getCar = () => {
  if (FlowRouter.getParam('carId')) {
    return CarCustomizer.Cars.get(FlowRouter.getParam('carId'));
  }
  return false;
};

const colors = Meteor.settings.public.CarCustomizer.Colors,
      bodyTypes = Meteor.settings.public.CarCustomizer.Body.Types
      wheelTypes = Meteor.settings.public.CarCustomizer.Wheels.Types;

Template.carOptions.onCreated(function() {
  this.carBrands = new ReactiveVar();
  this.autorun(() => {
    Meteor.call('getBrands', (err, res) => {
      this.carBrands.set(res.data);
    });
  }); 
  this.bodyTypes = new carOptionBlocks({
    name: 'bodyTypes',
    action: 'body.update.type',
    items: bodyTypes,
    selectedItem: this.data.car.body.type
  });
  this.bodyColors = new carOptionBlocks({
    name: 'bodyColors',
    type: 'color',
    action: 'body.update.color',
    items: colors,
    selectedItem: this.data.car.body.color
  });
  this.wheelTypes = new carOptionBlocks({
    name: 'wheelTypes',
    action: 'wheels.update.type',
    items: wheelTypes,
    selectedItem: this.data.car.wheels.type
  });
  this.wheelColors = new carOptionBlocks({
    name: 'wheelColors',
    type: 'color',
    action: 'wheels.update.color',
    items: colors,
    selectedItem: this.data.car.wheels.color
  });
});

Template.carOptions.helpers({
  carBrands() {
    return Template.instance().carBrands.get(); 
  },
  isSelected() {
    car = getCar();
    return !! car && car.brand.make === this.make ;
  },
  bodyTypeContext() {
    return {
      carOptionBlocks: Template.instance().bodyTypes
    }
  },
  bodyColorContext() {
    return {
      carOptionBlocks: Template.instance().bodyColors
    }
  },
  wheelsTypeContext() {
    return {
      carOptionBlocks: Template.instance().wheelTypes
    }
  },
  wheelsColorContext() {
    return {
      carOptionBlocks: Template.instance().wheelColors
    }
  }
});

Template.carOptions.events({
  'click .option-block': (e, tpl) => {
    const carId = FlowRouter.getParam('carId'),
          $el = $(e.currentTarget),
          action = $el.data('action');
          name = $el.data('name');
    if (!! carId && !! action && !! name) {
      Meteor.call(`carcustomizer.car.${action}`, carId, tpl[name].getSelectedItem());
    }
  },
  'click .brand-info': function (e, tpl) {
    const carId = FlowRouter.getParam('carId');
    if (!! carId) {
      Meteor.call(`carcustomizer.car.update.brand`, carId, this);
    }
  }
});
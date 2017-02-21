carOptions = class {
  constructor(options) {
    this.options = options;
    this.items = new ReactiveVar(this.options.items);
    this.type = new ReactiveVar(this.options.type);
    this.name = new ReactiveVar(this.options.name);
    this.action = new ReactiveVar(this.options.action);
    this.selectedItem = new ReactiveVar();
  }
  setItems(items) {
    this.items.set(items);
  }
  getItems() {
    return this.items.get();
  }
  setSelectedItem(item) {
    this.selectedItem.set(item);
  }
  getType() {
    return this.type.get();
  }
  getName() {
    return this.name.get(); 
  }
  getSelectedItem() {
    return this.selectedItem.get();
  }
  getAction() {
    return this.action.get(); 
  }
};

Template.carOptions.onCreated(function() {
  if (this.data && this.data.carOptions) {
    this.optionBlocks = this.data.carOptions;
  } else {
    this.optionBlocks = new carOptions(this.data);
  }
});

Template.carOptions.helpers({
  getItems() {
    return Template.instance().optionBlocks.getItems();
  },
  getAction() {
    return Template.instance().optionBlocks.getAction();
  },
  getName() {
    return Template.instance().optionBlocks.getName();
  },
  isSelected() {
    return Template.instance().optionBlocks.getSelectedItem();
  },
  isColor() {
    return Template.instance().optionBlocks.getType() === 'color';
  }
});

Template.carOptions.events({
  'click .option-block': function (e, tpl) {
    const prop = !! this.color ? 'color' : 'type';
    tpl.optionBlocks.setSelectedItem(this[prop]);
  }
});
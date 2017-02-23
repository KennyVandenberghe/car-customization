carOptionBlocks = class {
  constructor(options) {
    this.options = options;
    this.items = new ReactiveVar(this.options.items);
    this.type = new ReactiveVar(this.options.type);
    this.name = new ReactiveVar(this.options.name);
    this.action = new ReactiveVar(this.options.action);
    this.selectedItem = new ReactiveVar(this.options.selectedItem);
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

Template.carOptionBlocks.onCreated(function() {
  if (this.data && this.data.carOptionBlocks) {
    this.optionBlocks = this.data.carOptionBlocks;
  } else {
    this.optionBlocks = new carOptionBlocks(this.data);
  }
});

Template.carOptionBlocks.helpers({
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
    const selected = Template.instance().optionBlocks.getSelectedItem();
    return this.toString() === selected ? true : false;
  },
  isColor() {
    return Template.instance().optionBlocks.getType() === 'color';
  }
});

Template.carOptionBlocks.events({
  'click .option-block': function (e, tpl) {
    const prop = !! this.color ? 'color' : 'type';
    tpl.optionBlocks.setSelectedItem(this[prop]);
  }
});
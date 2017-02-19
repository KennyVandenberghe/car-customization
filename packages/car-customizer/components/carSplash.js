Template.carSplash.events({
  'click .new-car': () => {
    FlowRouter.go('/new');
  },
  'click .view-cars': () => {
    FlowRouter.go('/cars');
  }
});
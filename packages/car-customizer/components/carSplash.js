Template.carSplash.events({
  'click .new-car': () => {
    Meteor.call('carcustomizer.car.create', (err, res) => {
      if (! err) {
        FlowRouter.go(`/new/${res}`);
      }
    });
  },
  'click .view-cars': () => {
    FlowRouter.go('/cars');
  }
});
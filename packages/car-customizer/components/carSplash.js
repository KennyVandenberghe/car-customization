Template.carSplash.events({
  'click .new-car': () => {
    Meteor.call('carcustomizer.car.create', (err, res) => {
      if (! err) {
        console.log(res);
        FlowRouter.go(`/new/${res}`);
      }
    });
  },
  'click .view-cars': () => {
    FlowRouter.go('/cars');
  }
});
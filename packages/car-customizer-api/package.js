Package.describe({
  name: 'car-customizer-api',
  version: '0.0.1',
  summary: 'car-customizer api umbrella package.'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  var c = 'client',
      s = 'server',
      cs = [c, s];

  api.imply([
    'car-customizer-core',
    'http@1.1.1'
  ], cs);
});

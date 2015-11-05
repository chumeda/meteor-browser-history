/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListStuff'
});

Router.route('/add', {
  name: 'AddStuff'
});

Router.route('/internetexplorer', function() {
  this.render('InternetExplorer');
});

Router.route('/firefox', function() {
  this.render('Firefox');
});

Router.route('/chrome', function() {
  this.render('Chrome');
});

Router.route('/intro', function() {
  this.render('Introduction');
});

Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});

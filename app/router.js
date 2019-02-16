import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('profile', function() {
    this.route('index');
    this.route('housings', function() {
      this.route('index');
      this.route('edit', { path: '/:housing_id' }, function(){
        this.route('meters', function() {
          this.route('edit', { path: '/:meter_id' });
        });
      });


    });
  });


  this.route('dashboard');
  this.route('housings', function() {
    this.route('meters', { path: '/:housing_id/meters' }, function() {
      this.route('readings', {path: '/:meter_id/readings'}, function() {
        this.route('edit', { path: '/:reading_id' });
      });
    });
  });
});

export default Router;

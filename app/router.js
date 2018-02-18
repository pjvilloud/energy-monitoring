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
});

export default Router;

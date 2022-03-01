import EmberRouter from '@ember/routing/router';
import config from 'novadiscs/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('scorecard');

  this.route('players', {path: '/getting-in-touch'});
  // this.route('contact', { path: '/getting-in-touch' });
});

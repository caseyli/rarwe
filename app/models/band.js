import Ember from 'ember';

export default Ember.Object.extend({
  name: '',
  language: '',
  description: '',
  slug: Ember.computed('name', function(){
    return this.get('name').dasherize();
  }),
  site: Ember.computed('slug', 'language', function(){
    return 'http://bands.com/' + this.get('slug') + '.' + this.get('language');
  }),

  setupSongs: Ember.on('init', function(){
    if(!this.get('songs')) {
      this.set('songs', []);
    }
  })
});
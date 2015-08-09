import Ember from 'ember';

export default Ember.Object.extend({
  name: '',
  language: '',
  slug: Ember.computed('name', function(){
    console.log('Recomputing slug');
    return this.get('name').dasherize();
  }),
  site: Ember.computed('slug', 'language', function(){
    conole.log('Recomputing slug');
    return 'http://bands.com/' + this.get('slug') + '.' + this.get('language');
  }),

  setupSongs: Ember.on('init', function(){
    if(!this.get('songs')) {
      this.set('songs', []);
    }
  })
});
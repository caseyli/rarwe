import Ember from 'ember';

export default Ember.Controller.extend({
  title: '',
  songCreationStarted: false,
  canCreateSong: Ember.computed('songCreationStarted', 'model.length', function(){
    return this.get('songCreationStarted') || this.get('model.length');
  }),
  isAddButtonDisabled: Ember.computed('title', function(){
    return Ember.isEmpty(this.get('title'));
  }),
  actions: {
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    }
  }
});

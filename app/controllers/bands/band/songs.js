import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  songCreationStarted: false,
  canCreateSong: Ember.computed('songCreationStarted', 'model.length', function(){
    return this.get('songCreationStarted') || this.get('model.length');
  }),
  isAddButtonDisabled: Ember.computed('name', function(){
    return Ember.isEmpty(this.get('name'));
  }),
  actions: {
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    }
  }
});

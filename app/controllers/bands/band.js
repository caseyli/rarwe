import Ember from 'ember';

export default Ember.Controller.extend({
  name: Ember.computed('model.name', function(){
    return this.get('model.name');
  })
});

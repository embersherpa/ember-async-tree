// BEGIN-SNIPPET simple-controller
import Ember from 'ember';

const {
  on,
  get,
  isNone
} = Ember;

export default Ember.Controller.extend({
  actions: {
    fetch (node) {
      let result;
      if (isNone(node)) {
        result = [
          {type: 'character', name: 'George Costanza'},
          {type: 'character', name: 'Cosmo Kramer'}
        ];
      } else {
        let type = get(node, 'type');
        if (type === 'character') {
          result = [
            { type: 'location', name: 'Jerry\'s house' },
            { type: 'location', name: 'Dinner'}
          ];
        }
        if (type === 'location') {
          result = [
            { type: 'prop', name: 'Fork' },
            { type: 'prop', name: 'Shoe'}
          ];
        }
      }
      return new Ember.RSVP.Promise(function(resolve){
        Ember.run.later(resolve, result, 3000);
      });
    }
  }
});
// END-SNIPPET

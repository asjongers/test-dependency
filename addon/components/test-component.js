import Ember from 'ember';
import layout from '../templates/components/test-component';

export default Ember.Component.extend({
  layout,
  messages: [
    {text: "I am the first test."},
    {text: "I am the second test."},
    {text: "I am the third test."}
  ]
});

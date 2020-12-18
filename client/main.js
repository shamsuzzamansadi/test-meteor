import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import '../lib/EmailAddresses.js';
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    let findData = EmailAddresses.find().fetch();
    for(i=0; i < findData.length; i++){
      console.log(findData[i].emailAdress);
      if(findData[i].hasBeenUsed === false)
      {
        console.log('this one is used: ' + findData[i].hasBeenUsed['false'])
      }
    }
  },
});
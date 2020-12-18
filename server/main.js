import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import '../lib/EmailAddresses.js';


Meteor.startup(() => {
  
  for(i =0; i<10; i++){
    let username = 'cleverSadi'+Math.random();
    let emailadress = username + '@mailbox.org';
    EmailAddresses.insert({
      emailaddress: `${emailadress}`,
      hasUsed: true
    });
  }
  
  console.log(EmailAddresses.find().fetch());
});

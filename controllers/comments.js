Chirper.CommentsController = Ember.ArrayController.extend({  
  needs: ['chirp'] //sets up array of other controller objects (comments) inside the chirp array via the controller property below (controllers.chirp)

  actions: {
    save_comment: function() {
      var comment = this.store.createRecord('comment', { //store.createRecord creates the record in the store (which contains all the data for records loaded from the server)
        text: this.get('text') //get retrieves the value of a property from an object
      });
      comment.save();

      var self = this;
      self.set('text',''); //set = sets the key to the value

      var chirp = this.get('controllers.chirp.model');
      chirp.get('comments').pushObject(comment); //pushObject= pushes the object into the end of the array. 
      chirp.save()

      this.transitionToRoute('chirp', chirp.id); //transitionToRoute transitions the application into another route
    }
  }
});

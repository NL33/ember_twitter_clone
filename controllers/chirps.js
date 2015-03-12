Chirper.ChirpsController = Ember.ArrayController.extend({  
  sortProperties: ["date"],
  isAddingChirp: false,
  actions: {
    add_new_chirp: function() {
      this.set('isAddingChirp', true);
    },
    save_chirp: function() {
      chirps.addObject({id: (chirps.length + 1).toString(), 
      text: this.text, 
      user_id: this.user_id,
      date: new Date().toLocaleString()
      })
      this.set('isAddingChirp', false);
    }
  }
});

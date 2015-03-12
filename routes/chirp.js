Chirper.ChirpRoute = Ember.Route.extend({
  model: function(params) {
    //return this.store.find('chirp', params.chirp_id);
    return chirps.findBy('id', chirps.post_id); 
  }
});
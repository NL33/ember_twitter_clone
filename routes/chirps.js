Chirper.ChirpsRoute = Ember.Route.extend({
  model: function(){
  	return chirps;  //model returns the chirps array set in the sample data. This is now available in the controller and template
  }
});
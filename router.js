Chirper.Router.map(function() { 
	this.resource('chirps', {path: '/'});  //chirps will be home page
    this.resource('chirp', {path: 'chirps/:chirp_id'}, function() {
       this.resource('new-comment');
    });
});

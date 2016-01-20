Router.configure({ //global iron-router configuration
	
	layoutTemplate: 'Layout'
});

 Router.map(function(){
	
	this.route('Website',{path:'/'});
	this.route('Home',{path:'/Home'}); //passing name of the route to display static information. 
	this.route('Resume',{path:'/About'}); //Associates template with path
	this.route('Contact',{path:'/Builder'});
	this.route('Hobbies',{path:'/Hobbies'});

	
});
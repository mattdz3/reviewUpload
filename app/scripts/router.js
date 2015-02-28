var Router = Parse.Router.extend({
	
	routes: {
		''                 : 'home',
		'home'             : 'home',
		'createReview'     : 'create',
		'login'            : 'login',
		'review'           : 'review',
	},

	initialize: function(options) {
		this.currentView = null;
		var user = Parse.User.current();
		$('.views-container').empty();
	},

	home: function(){
		$('.views-container').empty();
		var user = Parse.User.current();
		var gameQuery = new Parse.Query(Review);
		gameQuery.find({
			success: function(reviews) {
				reviews.forEach(function(review) {
					new ReviewView({
						model: review
					});	
				});
			}
		}).done(function() {
			var reviewerQuery = new Parse.Query(Reviewer);

			reviewerQuery.find({
				success: function(reviewers) {
					reviewers.forEach(function(reviewer) {
						new ReviewView({
							model: reviewer
						});
					})
				}
			});
		}).done(function() {
			var newsQuery = new Parse.Query(News);
			newsQuery.find({
				success: function(allNews) {
					
					allNews.forEach(function(news) {
						new ReviewView({
							model: news
						});
					});
				}
			});
		});
	},

	create: function() {
		$('.views-container').empty();
		var view = new CreateReviewView();
		this.swap(view);
	},

	login: function() {
		var view = new LoginView();
		this.swap(view);
	},



	review: function() {

	},

	swap: function(view) {
		if (this.currentView) this.currentView.remove();
		this.currentView = view;
		this.currentView.render();
	},
});

var router = new Router();
Parse.history.start();
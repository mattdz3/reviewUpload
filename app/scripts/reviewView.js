var ReviewView = Parse.View.extend({

	className: "review-contents",
	
	template: _.template($('.review-view').text()),

	events: {
		'click .click' : 'renderFull',
	},

	initialize: function() {
		$('.views-container').append(this.el);
		this.render();
	},

	render: function() {
		var renderTemplate = this.template(this.model.attributes)
		this.$el.html(renderTemplate);
		return this;
	},

	renderFull: function() {
		$('.views-container').empty();
		var modelId = this.model.id;
		
		var fullReview = this.model;

		console.log(fullReview)

		new CreateSecondReviewView({
			model: fullReview
		});

		router.navigate('home/' + modelId, {trigger: true})
	}
});
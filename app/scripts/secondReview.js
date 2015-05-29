var secondImageOne;
var secondImageTwo;
var secondImageThree;

var CreateSecondReviewView = Parse.View.extend({
	
	className: 'create-review',

	template: _.template($('.create-second-review-view').text()),

	events: {
		'click .edit'        : 'edit',
		'click .create'      : 'finishedEdit',
		"click .image-one"   : "addImageOne",
		"click .image-two"   : "addImageTwo",
		"click .image-three" : "addImageThree",
	},

	initialize: function() {
		$('.views-container').append(this.el);
		this.render();
		console.log(this.model)
	},

	render: function() {
		var renderTemplate = this.template(this.model.attributes)
		this.$el.html(renderTemplate);
		return this;
	},

	edit: function() {
		var model = this.model;
		var quickReview = $('.edit-quick-review').val();
		var reviewOne = $('.edit-review-one').val();
		var reviewTwo = $('.edit-review-two').val();
		var reviewThree = $('.edit-review-three').val();
		var reviewFour = $('.edit-review-four').val();
		var captionOne = $('.edit-caption-one').val();
		var captionTwo = $('.edit-caption-two').val();
		var captionThree = $('.edit-caption-three').val();

		model.set('quickReview', quickReview);
		model.set('reviewOne', reviewOne);
		model.set('reviewTwo', reviewTwo);
		model.set('reviewThree', reviewThree);
		model.set('reviewFour', reviewFour);
		model.set('captionOne', captionOne);
		model.set('reviewTwo', reviewTwo);
		model.set('reviewThree', reviewThree);

		model.save(null,
			alert("you changed that shit!!!!")
		);
	},

	addImageOne: function() {
		filepicker.pick(
  		function(InkBlobs){
    		secondImageOne = InkBlobs.url
		});
	},

	addImageTwo: function() {
		filepicker.pick(
  		function(InkBlobs){
    		secondImageTwo = InkBlobs.url
		});
	},

	addImageThree: function() {
		filepicker.pick(
  		function(InkBlobs){
    		secondImageThree = InkBlobs.url
		});
	},

	finishedEdit: function() {
		console.log(this.model)
		var user = Parse.User.current().attributes.username;
		var userPic = Parse.User.current().attributes.userPic;
		var model = this.model;

		var secondReviewOne = $('.review-content').val();
		var secondReviewTwo = $('.second-review-content').val();
		var secondReviewThree = $('.thrid-review-content').val();
		var secondReviewFour = $('.fourth-review-content').val();
		var secondCaptionOne = $('.image-one-caption').val();
		var secondCaptionTwo = $('.image-two-caption').val();
		var secondCaptionThree = $('.image-three-caption').val();
		var secondScore = $('.score').val();

		model.set('secondReviewer', user);
		model.set('secondReviewerPic', userPic);
		model.set('secondReviewOne', secondReviewOne);
		model.set('secondReviewTwo', secondReviewTwo);
		model.set('secondReviewThree', secondReviewThree);
		model.set('secondReviewFour', secondReviewFour);
		model.set('secondCaptionOne', secondCaptionOne);
		model.set('secondCaptionTwo', secondCaptionTwo);
		model.set('secondCaptionThree', secondCaptionThree);
		model.set('secondImageOne', secondImageOne);
		model.set('secondImageTwo', secondImageTwo);
		model.set('secondImageThree', secondImageThree);
		model.set('secondScore', secondScore);

		model.save(null, {
			success: function(){
				// user.relation("reviews").add(Review);

				$('.review-content').val('');
				$('.second-review-content').val('');
				$('.thrid-review-content').val('');
				$('.fourth-review-content').val('');
				$('.image-one-caption').val('');
				$('.image-two-caption').val('');
				$('.image-three-caption').val('');
				$('.second-score').val('');
			},

			error: function(){
				console.log("nope")
			}
		})
	},
});
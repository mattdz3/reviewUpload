Parse.initialize("qStdqzNUq7WnxxK5mu1VHFHVjU3JXo4frzcxeRmH", "s6f6SjFKLmGVlA7oqHfecJCE7u1K0Am9Yzb9hE6t");

filepicker.setKey("AFLbZroQeC5fnjZH5RpUAz");

$('.logout').click(function() {
	Parse.User.logOut();
	router.navigate("home", {trigger: true})
	alert('user has logged out!')
});
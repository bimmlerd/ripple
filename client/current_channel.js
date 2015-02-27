Template.currentChannel.events({
	"click .new-message": function (event) {
    // This function is called when the new task form is submitted
    event.preventDefault();
    var message = event.target.text.value;
    console.log(message)
    // Clear form
    event.target.text.value = "";	
	}
});


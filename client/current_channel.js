Template.currentChannel.events({
	"click .new-message": function (event) {
    // This function is called when the new task form is submitted
    event.preventDefault();
    var input_element = document.getElementById('new_message_input');
    var message = input_element.value;

    Messages.insert({
		"created": Date.now(),
		"author": "user",
		"content": message,
		"channelID": this.channelID
    });

    Channels.update({"_id": this.channelID}, {$set: {"modified": Date.now()}})

// Message = {
// 	"created": 0,
// 	"author": "user",
// 	"content": "This is le sample message",
// 	"channelID": "kbsSiW49MMQtHWshR"
// }

    // Clear form
    input_element.value = "";
	}
});

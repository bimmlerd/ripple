Meteor.publish('channels', function() {
	return Channels.find();
});

Meteor.publish('messages', function(channelID) {
	return Messages.find({"channelID": channelID});
});

Meteor.publish('last-messages', function() {
	// post -> channel, comment -> message
  	var sub = this, messageHandles = [], channelHandle = null;

	// send over the top two comments attached to a single post
	function publishChannelMessage(channelID) {
		var messageCursor = Messages.find({channelID: channelID}, {sort: {created: -1}, limit: 1});
		messageHandles[channelID] = 
		  Mongo.Collection._publishCursor(messageCursor, sub, 'messages');
	}

// fix from here
	channelHandle = Channels.find().observeChanges({
		added: function(id, channel) {
		  publishChannelMessage(id);
		  sub.added('channels', id, channel);
		},
		changed: function(id, fields) {
		  sub.changed('channels', id, fields);
		},
		removed: function(id) {
		  // stop observing changes on the channels's last messages
		  messageHandles[id] && messageHandles[id].stop();
		  // delete the channel
		  sub.removed('channels', id);
		}
	});

	sub.ready();

	// make sure we clean everything up (note `_publishCursor`
	//   does this for us with the comment observers)
	sub.onStop(function() { channelHandle.stop(); });
})

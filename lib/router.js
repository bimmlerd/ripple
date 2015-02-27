Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
	// waitOn: function() { 
	// 	return True; // not very useful yet, but here we'll put eg Meteor.subscribe('channels')
	// }
});

// will turn into
Router.route('/:channelID?', {
	// channelID for selecting channel 
	name: "overview"
});

OverviewController = RouteController.extend({
	template: 'overview',
	channelID: function() {
		// FIXME sanitize input
		return this.params.channelID;
	},
	// subscriptions: function() {
	// 	// some options here for which channel
	// 	this.channelsSub = Meteor.subscribe('channels');
	// },
	channelTitle: function() {
		var channelID = this.channelID();
		if (channelID) {
			return Channels.findOne({"_id": channelID}).title;
		}
	},
	messages: function() {
		// FIXME sorting 
		return Messages.find({channelID: this.channelID()}); // not so sure about this, FIXME
	},
	data: function() {
		return {
			messages: this.messages(),
			channelID: this.channelID(),
			channelTitle: this.channelTitle(),
			ready: true
			// ready: this.channelSub.ready,
		};
	}
});
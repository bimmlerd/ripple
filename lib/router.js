Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() {
		return [Meteor.subscribe('channels'), Meteor.subscribe('last-messages')];
	}
});

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

Router.route('/', {
	name: "main"
})

Router.route('/c/:channelID', {
	name: "overview"
});

OverviewController = RouteController.extend({
	template: 'overview',
	channelID: function() {
		// FIXME sanitize input
		return this.params.channelID;
	},
	subscriptions: function() {
		// some options here for which channel
		this.messagesSub = Meteor.subscribe('messages', this.channelID());
		this.lastMessagesSub = Meteor.subscribe('last-messages');
	},
	channel: function() {
		return Channels.findOne({"_id": this.channelID()});
	},
	messages: function() {
		return Messages.find({channelID: this.channelID()});
	},
	data: function() {
		var c = this.channel();
		if (!c) {
			return false // -> 404
		} else {
			return {
				messages: this.messages(),
				channelID: this.channelID(),
				channel: c,
				ready: this.messagesSub.ready && this.lastMessagesSub.ready
			};
		}
	}
});

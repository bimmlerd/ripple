Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	// waitOn: function() { 
	// 	return True; // not very useful yet, but here we'll put eg Meteor.subscribe('channels')
	// }
});


Router.route('/', {
	name: "overview", // name implies -> action: function() {this.render('overview')}
});

// will turn into
// Router.route('/:channelID', {
// 	// channelID for selecting channel 
// 	name: "overview",
// });

// OverviewController = RouteController.extend({
// 	template: 'overview',
// 	channelID: function() {
//		// FIXME sanitize input
// 		return this.params.channelID;
// 	},
// 	subscriptions: function() {
// 		this.channelSub = Meteor.subscribe('channel', // some options here for which channel);
// 	},
// 	posts: function() {
// 		return Channel.find({}, this.findOptions()); // not so sure about this, FIXME
// 	},
// 	data: function() {
// 		return {
// 			posts: this.posts(),
// 			ready: this.channelSub.ready,
// 		};
// 	}
// });
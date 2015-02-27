/**
 * Created by jonasfelber on 27/02/15.
 */
Template.channelList.helpers({
        channels: function () {
            return Channels.find({}, {sort: {modified: -1}})
        },
        content_preview: function () {
            var content = Messages.findOne({channelID: this._id}, {sort: {created: 1}});
            if (content) {
                return content.content.slice(0, 50); // TODO trim
            } else {
                return "empty";
            }
        }
    }
);

Template.channelList.events({
    'submit #add_channel_form': function (e, t) {
        e.preventDefault();
        var channelTitle = document.getElementById('add_channel_input').value;
        if (channelTitle.length > 0) { // TODO check title
            Channels.insert({
                created: Date.now(),
                modified: Date.now(),
                title: channelTitle
            });
        }
    }
});
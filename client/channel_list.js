/**
 * Created by jonasfelber on 27/02/15.
 */
Template.channelList.helpers({
        channels: function () {
            return Channels.find({}, {sort: {modified: -1}})
        },
        last_message: function(){
            return Messages.findOne({channelID: this._id}, {sort: {created: -1}});
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
            document.getElementById('add_channel_input').value = "";
        }
    }
});
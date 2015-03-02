Messages = new Mongo.Collection('messages', {idGeneration: 'STRING'});

// Message = {
// 	"created": 0,
// 	"author": "user",
// 	"content": "This is le sample message",
// 	"channelID": "kbsSiW49MMQtHWshR"
// }

Channels = new Mongo.Collection('channels', {idGeneration: 'STRING'});
// Channel = {
//     "created": 0,
//     "last_modified": 0,
//     "title": "foo"
// };


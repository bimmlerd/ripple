/**
 * Created by jonasfelber on 27/02/15.
 */

Channels = new Mongo.Collection('channels', {idGeneration: 'STRING'});
Channel = {
    "created": 0,
    "last_modified": 0,
    "title": "foo"
};

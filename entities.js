// Register schemas using Mongoose
var db = require("mongoose");
var Schema = db.Schema;

// Entity Tag
var entityTag = {
    name: String,
    slug: String
};
// Entity Category
var entityCategory = {
    name: String,
    slug: String,
    parent: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
};
// Entity Comment
var entityComment = {
    author: String,
    text: String,
    creationTime: {
        type: Date,
        "default": Date.now
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
};
// Entity Post
var entityPost = {
    title: String,
    slug: String,
    author: String,
    creationTime: {
        type: Date,
        "default": Date.now
    },
    lastUpdateTime: {
        type: Date,
        "default": Date.now
    },
    text: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Category"
    }]
};
// Entity PostRevision
var entityPostRevision = {
    updateTime: {
        type: Date,
        "default": Date.now
    },
    author: String,
    text: String,
    hits: Number,
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
};


var schemaTag = new Schema(entityTag),
    schemaCategory = new Schema(entityCategory),
    schemaComment = new Schema(entityComment),
    schemaPost = new Schema(entityPost),
    schemaPostRevision = new Schema(entityPostRevision);

var Tag = db.model('Tag', schemaTag),
    Category = db.model('Category', schemaCategory),
    Comment = db.model('Comment', schemaComment),
    Post = db.model('Post', schemaPost),
    PostRevision = db.model('PostRevision', schemaPostRevision);

module.exports = {
    tag: Tag,
    category: Category,
    comment: Comment,
    post: Post,
    postRevision: PostRevision
}
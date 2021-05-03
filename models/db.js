const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
    title: {
        type: String
    },
    company: {
        type: String
    },
    location: {
        type: String
    },
    type: {
        type: String
    },
    description: {
        type: String
    },
    created_at: {
        type: String
    }
}, {collection: 'job-ads'});

const model = mongoose.model('JobModel', JobSchema);

module.exports = model;
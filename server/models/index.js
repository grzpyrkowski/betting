import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

const db = {}

db.mongoose = mongoose;

db.user = mongoose.model('User');
db.role = mongoose.model('Role');

db.ROLES = ["user", "mod", "admin"];

export default db;
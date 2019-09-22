const mongoose = require('mongoose');
const employeeSchema = require('../models/employee.model');

employeeSchema.statics = {
  create(data, cb) {
    const employee = new this(data);
    employee.save(cb);
  },

  get(query, cb) {
    this.find(query, cb);
  },

  update(query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete(query, cb) {
    this.findOneAndDelete(query, cb);
  },

  doesCEOExist() {
    return this.exists({ role: 'CEO' });
  },
};

const employeeModel = mongoose.model('Employee', employeeSchema);
module.exports = employeeModel;

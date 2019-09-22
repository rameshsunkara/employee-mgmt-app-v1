const mongoose = require('mongoose');
const dayjs = require('dayjs');
const { DEFAULT_DATE_FORMAT, EMPLOYEE_ROLES } = require('../config/constants');

const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    firstName: {
      type: String,
      unique: false,
      required: [true, 'First Name is a required field'],
    },
    lastName: {
      type: String,
      unique: false,
      required: [true, 'Last Name is a required field'],
    },
    hireDate: {
      type: String,
      unique: false,
      required: [true, 'Hire Date is a required field'],
      validate: {
        validator: hireDate => {
          if (
            dayjs(hireDate, { format: DEFAULT_DATE_FORMAT }).isValid() &&
            dayjs().isAfter(dayjs(hireDate))
          ) {
            return Promise.resolve(true);
          }
          return Promise.resolve(false);
        },
        message: 'HireDate should be in the past with YYYY-MM-DD format',
      },
    },
    role: {
      type: String,
      unique: false,
      enum: EMPLOYEE_ROLES,
      required: true,
      message: 'Role is a required field',
    },
    favoriteJoke: {
      type: String,
      unique: false,
      required: [true, 'Unable to add favorite Joke which is a required field'],
    },
    favoriteQuote: {
      type: String,
      unique: false,
      required: [
        true,
        'Unable to add favorite Quote which is a required field',
      ],
    },
  },
  {
    // adds createdAt and updatedAt properties to the schema and manages them
    timestamps: true,
  },
);

module.exports = employeeSchema;

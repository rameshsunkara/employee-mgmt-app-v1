const EmployeeDao = require('../dao/employee.dao');
const getJoke = require('../services/jokes.service');
const getQuote = require('../services/quotes.service');
const { ROLE_CEO } = require('../config/constants');

// eslint-disable-next-line consistent-return
exports.create = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Invalid Employee Input',
    });
  }

  const joke = await getJoke();
  const quote = await getQuote();

  const employee = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    hireDate: req.body.hireDate,
    role: req.body.role,
    favoriteJoke: joke,
    favoriteQuote: quote,
  };

  if (employee.role === ROLE_CEO) {
    const ceoExists = await EmployeeDao.doesCEOExist();
    if (ceoExists) {
      return res.status(400).send({
        message: 'There can be only one CEO',
      });
    }
  }

  EmployeeDao.create(employee, (error, results) => {
    if (error) {
      return res.json({ error });
    }
    return res.json(results);
  });
};

exports.findAll = (req, res) => {
  EmployeeDao.get({}, function(err, results) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ results });
  });
};

exports.findOne = (req, res) => {
  EmployeeDao.get({ name: req.params.id }, function(err, results) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ results });
  });
};

// TODO: Fix update
exports.update = (req, res) => {
  const employee = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    hireDate: req.body.hireDate,
    role: req.body.role,
    favoriteJoke: req.body.joke,
    favoriteQuote: req.body.quote,
  };
  EmployeeDao.update({ _id: req.params.id }, employee, function(err, results) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({ results });
  });
};

exports.delete = (req, res) => {
  EmployeeDao.delete({ _id: req.params.id }, function(err, results) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json(results);
  });
};

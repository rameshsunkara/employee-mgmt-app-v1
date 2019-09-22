const employeesController = require('../controllers/employee.controller');

module.exports = router => {
  router.post('/employees', employeesController.create);
  router.get('/employees', employeesController.findAll);
  router.get('/employees/:id', employeesController.findOne);
  router.put('/employees/:id', employeesController.update);
  router.delete('/employees/:id', employeesController.delete);
};

module.exports = (app) => {
  const controller = require('../controllers/PostsController');

  app.route('/posts')
    .get(controller.index)
    .post(controller.create);

  app.route('/posts/:id')
    .get(controller.show)
    .put(controller.update)
    .delete(controller.delete);
}

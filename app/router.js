module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/sendData', controller.home.sendData);
  router.get('/chain', controller.home.chain);
}

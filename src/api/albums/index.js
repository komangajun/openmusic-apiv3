/* eslint-disable linebreak-style */
const routes = require('./routes');
const AlbumsHandler = require('./handler');

module.exports = {
  name: 'albums',
  version: '1.0.0',
  register: async (server, {
    service, validator, storageService, uploadValidator,
  }) => {
    const albumsHandler = new AlbumsHandler(service, storageService, validator, uploadValidator);
    server.route(routes(albumsHandler));
  },
};

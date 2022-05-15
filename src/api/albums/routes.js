/* eslint-disable linebreak-style */
const path = require('path');

const routes = (handler) => [
  {
    method: 'POST',
    path: '/albums',
    handler: handler.postAlbumHandler,
  },

  {
    method: 'GET',
    path: '/albums',
    handler: handler.getAlbumsHandler,
  },

  {
    method: 'GET',
    path: '/albums/{id}',
    handler: handler.getAlbumByIdHandler,
  },

  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: handler.putAlbumByIdHandler,
  },

  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: handler.deleteAlbumByIdHandler,
  },
  // untuk handler post cover-url
  {
    method: 'POST',
    path: '/albums/{id}/covers',
    handler: handler.postAlbumCoverHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 512000,
      },
    },
  },
  // pasang npm inert lalu inisisasi plugin eksternal sama Jwt
  {
    method: 'GET',
    path: '/upload/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, '../upload'),
      },
    },
  },
  // post like album
  {
    method: 'POST',
    path: '/albums/{id}/likes',
    handler: handler.postAlbumLikeHandler,
    options: {
      auth: 'openmusicapp_jwt',
    },
  },
  // get how much album likes
  {
    method: 'GET',
    path: '/albums/{id}/likes',
    handler: handler.getAlbumLikeHandler,
  },
];

module.exports = routes;

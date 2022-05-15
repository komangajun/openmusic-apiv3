/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable camelcase */

const mapSongDBModel = ({
  id,
  name,
  title,
  year,
  genre,
  performer,
  duration,
  album_id,
}) => ({
  id,
  name,
  title,
  year,
  genre,
  performer,
  duration,
  albumId: album_id,

});

const mapSongsInAlbumDBToModel = ({
  id, name, cover_url, title, year, genre, performer, duration, album_id,
}) => ({
  id,
  name,
  title,
  year,
  genre,
  performer,
  albumId: album_id,
  duration,
  coverUrl: cover_url,

});

const mapAlbumDBToModel = ({
  id, name, year, cover_url,
}) => ({
  id,
  name,
  year,
  coverUrl: cover_url,

});

const mapUserDBModel = ({
  id, username, password, fullname,
}) => ({
  id,
  username,
  password,
  fullname,
});

const mapGetPlaylistDBModel = ({ id, name, username }) => ({
  id, name, username,
});

module.exports = {
  mapAlbumDBToModel, mapSongDBModel, mapUserDBModel, mapGetPlaylistDBModel, mapSongsInAlbumDBToModel,
};

global.fetch = require('node-fetch');

export const baseURL = 'https://api.spotify.com/v1';

export const search = (query, type) => (
  global
    .fetch(`${baseURL}/search?q=${query}&type=${type}`)
);

export const searchArtists = query => (
  search(query, 'artist')
);

export const searchAlbums = query => (
  search(query, 'album')
);

export const searchTracks = query => (
  search(query, 'track')
);

export const searchPlaylists = query => (
  search(query, 'playlist')
);

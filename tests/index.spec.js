import chai, { expect } from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

import {
  baseURL,
  search,
  searchArtists,
  searchAlbums,
  searchPlaylists,
  searchTracks
} from '../src/index'

describe('Spotify Wrapper', () => {

  describe('Smoke Tests', () => {

    it('should exist the method search', () => {
      expect(search).to.exist;
    });

    it('should exist the method searchAlbums', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the method searchArtists', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the method searchTracks', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the method searchPlaylists', () => {
      expect(searchPlaylists).to.exist;
    });

  });

  let stubedFetch;
  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Generic Search', () => {

    it('should call fetch function', () => {
      const artists = search();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      context('passing one type', () => {
        const artists = search('Incubus', 'artist');
        expect(stubedFetch).to.have.been
          .calledWith(`${baseURL}/search?q=Incubus&type=artist`);
      });

      context('passing more then one type', () => {
        const albums = search('Incubus', ['artist', 'album']);
        expect(stubedFetch).to.have.been
          .calledWith(`${baseURL}/search?q=Incubus&type=artist,album`);
      });
    });

    it('should return a promisse with correct value', () => {
      stubedFetch.returnsPromise().resolves('teste');
      const artists = search('Incubus', 'artist');

      expect(artists.resolveValue).to.be.eql('teste');
    });

  });

  describe('Artists Search', () => {
    it('should call fetch', () => {
      const artists = searchArtists('Muse');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct URL', () => {
      const artists = searchArtists('Muse');

      expect(stubedFetch).to.have.been
        .calledWith(`${baseURL}/search?q=Muse&type=artist`)
    });
  });

  describe('Albums Search', () => {
    it('should call fetch', () => {
      const albums = searchAlbums('Muse');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct URL', () => {
      const albums = searchAlbums('Muse');

      expect(stubedFetch).to.have.been
        .calledWith(`${baseURL}/search?q=Muse&type=album`)
    });
  });

  describe('Tracks Search', () => {
    it('should call fetch', () => {
      const tracks = searchTracks('Muse');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct URL', () => {
      const tracks = searchTracks('Muse');

      expect(stubedFetch).to.have.been
        .calledWith(`${baseURL}/search?q=Muse&type=track`)
    });
  });

  describe('Playlists Search', () => {
    it('should call fetch', () => {
      const playlists = searchPlaylists('Muse');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct URL', () => {
      const playlists = searchPlaylists('Muse');

      expect(stubedFetch).to.have.been
        .calledWith(`${baseURL}/search?q=Muse&type=playlist`)
    });
  });
});

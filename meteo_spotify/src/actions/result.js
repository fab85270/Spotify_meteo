import react from 'React';
import axios from 'axios';
import {AccessTokenContext} from '../../Context/AccessTokenContext';

import {
    SET_ALBUMS,
    ADD_ALBUMS,
    SET_ARTISTS,
    ADD_ARTISTS,
    SET_PLAYLIST,
    ADD_PLAYLIST
  } from '../utils/constants';

  export const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    albums
  });
  export const addAlbums = (albums) => ({
    type: ADD_ALBUMS,
    albums
  });
  export const setArtists = (artists) => ({
    type: SET_ARTISTS,
    artists
  });
  export const addArtists = (artists) => ({
    type: ADD_ARTISTS,
    artists
  });
  export const setPlayList = (playlists) => ({
    type: SET_PLAYLIST,
    playlists
  });
  export const addPlaylist = (playlists) => ({
    type: ADD_PLAYLIST,
    playlists
  });

  /* Utilisation d'un hook pour avoir accès à l'AccessToken */
  const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);

  export const initiateGetResult = (searchTerm) => {
    return async (dispatch) => {
      try {
        /* Lien url pour obtenir des informations a l'API Spotify */
        const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
          searchTerm
        )}&type=album,playlist,artist`;
        /* */

        /* Connexion à l'API Spotify selon l'accessToken obtenu */
        try {
          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${accessToken}`;
        } catch(Error)
        {
          console.log('Erreur lors de l authentification à lAPI Spotify', error);
        }

        const result = await axios.get(API_URL);

        console.log(result.data);


        const { albums, artists, playlists } = result.data;
        dispatch(setAlbums(albums));
        dispatch(setArtists(artists));
        return dispatch(setPlayList(playlists));
      } catch (error) {
        console.log('error', error);
      }
    };
  };
  
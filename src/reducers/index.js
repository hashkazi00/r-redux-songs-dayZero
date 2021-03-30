import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {title: 'O Sanam!!', duration: '4:07'},
        {title: 'Tere Naal', duration: '3:37'},
        {title: 'Hosanna', duration: '5:17'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => { 
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({songs: songsReducer, selectedSong: selectedSongReducer})
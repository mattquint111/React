import { combineReducers } from 'redux'

// REDUCERS
const songsReducer = () => {
    return [
        {title: 'Here Comes the Sun', duration: '2:45'},
        {title: 'Let it Be', duration: '3:05'},
        {title: 'Hey Jude', duration: '1:56'},
        {title: 'Come Together', duration: '2:36'},
        {title: 'All You Need Is Love', duration: '3:31'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
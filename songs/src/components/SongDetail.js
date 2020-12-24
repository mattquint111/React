import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ selectedSong }) => {
    if (selectedSong) {
        return (
            <div>
                <h3>Details for:</h3>
                <p>Title: {selectedSong.title}</p>
                <p>Duration: {selectedSong.duration}</p>
                
            </div>
        )
    }
    return (
        <div>Select a song... </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail)
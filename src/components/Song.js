import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

class Song extends React.Component{
    render(){
        let { name, artist, isPlaying, key, audioFile } = this.props.songData;
        return(
            <div className={ 'song-entry ' + ( isPlaying ? 'is-playing' : '' ) }>
                <FontAwesomeIcon icon={ faPlay } className='play-button' onClick={()=>{ this.props.onPlay( key ) }} />
                <span className='song-data name'>{ name }</span>
                <span className='song-data artist'>{ artist }</span>
                <audio src={ audioFile }></audio>
            </div>
        )
    }  
}

export default Song
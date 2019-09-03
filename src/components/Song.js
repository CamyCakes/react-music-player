import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

class Song extends React.Component{
    render(){

		let { name, artist, key, album } = this.props.songData;

		let isCurrentSong = this.props.isCurrentSong;
		let isPlaying = ( this.props.isPlaying && isCurrentSong ) ? true : false;

		return(
            <div className={ 'song-entry ' + ( isCurrentSong ? 'song-playing' : '') }>
				<FontAwesomeIcon
					icon={ isPlaying ? faPause : faPlay } 
					className='play-button' 
					onClick={ ()=>{ this.props.onClick( key ) }} />
                <span className='song-data name'>{ name }</span>
                <span className='song-data artist'>{ artist }</span>
                <span className='song-data album'>{ album.name }</span>
            </div>
        )
    }  
}

export default Song
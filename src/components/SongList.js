import React from 'react'
import '../css/songs.scss'
import Song from './Song'
import SearchBar from './SearchBar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SongList extends React.Component{

    render(){
        let songs = this.props.songs.map(( song, index ) => {
			
			song.key = index;
			let isCurrentSong = this.props.currentSongKey === index ? true : false;

            return(
			   <Song songData={ song }
			   		isCurrentSong = { isCurrentSong } 
					key={ index }
					isPlaying={ this.props.isPlaying }
			   		onClick={ ( key )=>{ this.props.pausePlay( key ) }} 
				/>
            )
        })
        return(
            <div className='song-cont'>
                <Header />
                { songs }
            </div>
        )
    }
}

function Header(){
    return(
		<div>
			<SearchBar />
			<span className={ 'song-entry header'}>
				<FontAwesomeIcon 
					icon={ faSearch } 
					className='search-button' />
				<span>Title</span>
				<span>Artist</span>
				<span>Album</span>
			</span>
		</div>
      
    )
}

export default SongList
import React from 'react'
import '../css/songs.scss'
import Song from './Song'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Songs extends React.Component{
    constructor( props ){
        super( props )
        this.state={
            songs:[
                {
                    name: 'Ocean Man',
                    artist: 'Ween',
                    isPlaying: true,
                    audioFile: '../assets/songfiles/ween-ocean-man.mp3'
                },{
                    name: 'Oh Darling',
                    artist: 'Super Tramp',
                    isPlaying: false,
                    audioFile: '../assets/songfiles/supertramp-oh-darling.mp3'
                },{
                    name: 'Dressed in Decay',
                    artist: 'CKY',
                    isPlaying: false,
                    audioFile: '../assets/songfiles/cky-dressed-in-decay.mp3'
                }
            ]
        }
    }

    playSong( index ){
        let arr = [...this.state.songs];
        for( let i=0; i<arr.length; i++ ){
            arr[i].isPlaying = false;
        }
        arr[index].isPlaying = true;
        this.setState({
            songs: arr
        })
        console.log(index)
    }

    render(){
        let songs = this.state.songs.map(( song, index ) => {
            song.key = index;
            return(
               <Song songData={ song } key={ index } onPlay={ (key)=>{ this.playSong(key) }} />
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
        <span className='song-entry header'>
            <FontAwesomeIcon icon={ faSearch } className='search-button' />
            <span>Title</span>
            <span>Artist</span>
        </span>
    )
}


export default Songs
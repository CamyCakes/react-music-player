import React from 'react';
import ReactDOM from 'react-dom';

import SongList from './components/SongList';
import CurrentSong from './components/CurrentSong'
import { SongData, PlaceHolder } from './SongData';

import './css/App.scss';
import './css/mediaqueries.scss'
class App extends React.Component {

	constructor( props ){
		super( props )

		// Master audio player
		this.audio = new Audio();
		this.audio.volume = 0.5;

		this.audio.onended = () =>{
			this.advanceSong( 1 )
		}
		
        this.state={
			currentPlaying: PlaceHolder,
			isPlaying: false,
            songs: SongData
		}
	}
	
	pausePlay( key = 0 ){
		let isPlaying = this.state.isPlaying;
		
		if( key !== this.state.currentPlaying.key ){
			this.audio.src = this.state.songs[ key ].audioFile;
			this.audio.play();
			isPlaying = true;
		}else{
			if( this.state.isPlaying ){
				this.audio.pause();
				isPlaying = false;
			}else{
				this.audio.play();
				isPlaying = true;
			} 
		}

		this.setState({ 
			currentPlaying: this.state.songs[ key ],
			isPlaying: isPlaying
		});
	}

	advanceSong( direction ){
		let nextSong = this.state.currentPlaying.key + direction;

		if( this.state.songs.length - 1 < nextSong )
			nextSong = 0;
		if( nextSong < 0)
			nextSong = this.state.songs.length - 1

		this.audio.src = this.state.songs[ nextSong ].audioFile
		this.audio.play();
		this.setState({ 
			currentPlaying: this.state.songs[ nextSong ]
		})
	}

	render(){
		return (
			<div className="App">
				<CurrentSong 
					audioPlayer = { this.audio }
					song={ this.state.currentPlaying }
					isPlaying={ this.state.isPlaying }
					songDuration={ this.audio.duration }
					pausePlay={ ()=>{ this.pausePlay( this.state.currentPlaying.key ) }}
					onNext={ ( dir )=>{ this.advanceSong( dir ) }}
					onChangeVolume={ ( volume )=>{ this.audio.volume = volume }}
					onSetTrackTime={ ( newTime )=>{ this.audio.currentTime = newTime }}  />

				<SongList
					currentSongKey = { this.state.currentPlaying.key }
					isPlaying={ this.state.isPlaying }
					pausePlay={ ( key )=>{ this.pausePlay( key ) }} 
					songs={ this.state.songs } 
					onSort={ ( updatedList )=>{ this.setState({ songs:updatedList }) }  }
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
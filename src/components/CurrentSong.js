import React from "react"
import '../css/currentSong.scss'
import VolumeSlider from './VolumeSlider'
import SongTrack from './SongTrack'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'

class CurrentSong extends React.Component{

	constructor(props){
		super(props)
		this.state={
			currentTrackTime: 0
		}
		this.props.audioPlayer.ontimeupdate = () =>{
			this.setState({
				currentTrackTime: this.props.audioPlayer.currentTime,
			})
		}
	}

	render(){
		let song = this.props.song;
		return(
			<div className='current-song'>
				
				<div className='song-cover'>
					<img alt={ song.album.name } src={ song.album.cover } />
				</div>

				<div className={'song-info-cont' + ( ! song.isPlaceholder ? ' show' : '' ) }>
					<div className='song-info'>

						<SongTitle song={ song } />

						<div className='song-controls-cont'>
							<div className='song-controls'>

								<FontAwesomeIcon
									className='pause-play-control'
									icon={ faStepBackward }
									onClick={ ()=> { this.props.onNext( -1 ) }} 
								/>

								<FontAwesomeIcon
									className='pause-play-control'
									icon={ this.props.isPlaying ? faPause : faPlay }
									onClick={ ()=> { this.props.pausePlay() }} 
								/>

								<FontAwesomeIcon
									className='pause-play-control'
									icon={ faStepForward }
									onClick={ ()=> { this.props.onNext( 1 ) }} 
								/>
								
								<VolumeSlider 
									onChange={ ( vol )=>{ this.props.onChangeVolume( vol ) }}
								/>

							</div>
								
							<SongTrack 
								songDuration={ this.props.audioPlayer.duration }
								trackTime={ this.state.currentTrackTime }
								setTrackTime={ (newTime)=>{ this.props.onSetTrackTime(newTime) } }
								song={ this.props.songDuration}
								isPlaying={ this.props.isPlaying }
								pausePlay={()=>{ this.props.pausePlay() }}
							/>
						</div>
					</div>
				</div>
			</div>
		)
			
	}
}

function SongTitle( props ){
	if( props.song.name !== '' ){
		return(
			<div className='song-header'>
				<h1>{ props.song.name }</h1> 
				<h2>{ props.song.artist } - { props.song.album.name }</h2>
			</div>
		)
	}else{
		return('')
	}
}


export default CurrentSong
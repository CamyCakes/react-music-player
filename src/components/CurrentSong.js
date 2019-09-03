import React from "react"
import '../css/currentSong.scss'
import VolumeSlider from './VolumeSlider'
import SongTrack from './SongTrack'

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
							
							<SongTrack 
								songDuration={ this.props.audioPlayer.duration }
								trackTime={ this.state.currentTrackTime }
								setTrackTime={ (newTime)=>{ this.props.onSetTrackTime(newTime) } }
								song={ this.props.songDuration}
								isPlaying={ this.props.isPlaying }
								pausePlay={()=>{ this.props.pausePlay() }}
							/>
							
							<VolumeSlider 
								onChange={ ( vol )=>{ this.props.onChangeVolume( vol ) }}
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

function str_pad_left( string, pad, length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}
export default CurrentSong
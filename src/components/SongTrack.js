import React from 'react'
import '../css/songtrack.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

class SongTrack extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			
		}
	}
	render(){
		return(
			<div className='track-slider-container'>
				<FontAwesomeIcon
					className='pause-play-control'
					icon={ this.props.isPlaying ? faPause : faPlay }
					onClick={ ()=> { this.props.pausePlay() }} 
				/>
				<input type='range' 
					className='track-slider' 
					max={ this.props.songDuration }
					min='0'
					value={ this.props.trackTime }
					onChange={ (e)=>{ this.props.setTrackTime( e.target.value ) }} />
			</div>
		)
	}
}
export default SongTrack
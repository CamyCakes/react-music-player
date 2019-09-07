import React from 'react'
import '../css/volumeSlider.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute, faVolumeDown } from '@fortawesome/free-solid-svg-icons'


class VolumeSLider extends React.Component{
	constructor( props ){
		super( props )
		this.state= {
			volume: .5
		}
	}

	adjustVol( volume ){
		this.setState({
			volume: volume
		})
		this.props.onChange( volume )
	}

	mute(){
		this.setState({
			volume: 0
		})	
		this.props.onChange( 0 )
	}
	render(){

		let icon = null;
		if( this.state.volume > .49 ) icon = faVolumeUp;	
		else if( this.state.volume >= 0 ) icon = faVolumeDown;
		else if( this.state.volume === 0 ) icon = faVolumeMute;	

		return(
			<div className="slidecontainer">
				<FontAwesomeIcon 
					onClick={ ()=>{ this.mute() }}
					icon={ icon } 
					className='mute-button'
				/>
				<input type="range"
					min="0" 
					max="1" 
					step='.01' 
					value={ this.state.volume } 
					className="volume-slider"
					onChange={ (e)=>{ this.adjustVol( e.target.value ) }}/>
			</div>
		)
	}
}
export default VolumeSLider
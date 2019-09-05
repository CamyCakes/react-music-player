import React from 'react'
import '../css/songtrack.scss'

class SongTrack extends React.Component{
	render(){
		return(
			<div className='track-slider-container'>
				<div>{ getTime( this.props.trackTime ) }</div>	
				<input type='range' 
					className='track-slider' 
					max={ this.props.songDuration }
					min='0'
					value={ this.props.trackTime }
					onChange={ (e)=>{ this.props.setTrackTime( e.target.value ) }} /> 
					<div>{ getTime( this.props.songDuration - this.props.trackTime ) }</div>
			</div>
		)
	}
}

function getTime( sec_num ){
	var hours = Math.floor( sec_num / 3600 );
    var minutes = Math.floor(( sec_num - ( hours * 3600 )) / 60 );
    var seconds = Math.floor( sec_num - ( hours * 3600 ) - ( minutes * 60 ));

    if ( minutes < 10 ) minutes = "0" + minutes;
    if ( seconds < 10 ) seconds = "0" + seconds;
    return minutes + ':' + seconds ;
}
export default SongTrack
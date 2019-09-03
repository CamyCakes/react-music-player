import React from 'react'
class SearchBar extends React.Component{
	
	findSongs( searchVal ){
		console.log( searchVal )
	}

	render(){
		return(
			<div 
				className='song-search'
				contentEditable 
				onInput={(e)=>{ this.findSongs( e.target.innerText ) }}
			></div>
		)
	}
}
export default SearchBar	
let URL = process.env.PUBLIC_URL;
const SongData = getSongs();
const PlaceHolder = getPlacholder();

export { PlaceHolder, SongData };

function getSongs(){
	const songs = [
		{
			name: 'Ocean Man',
			artist: 'Ween',
			audioFile: 'ween-ocean-man.mp3',
			playing: false,
			album: {
				cover: 'ween-cover.jpg',
				name: 'The Mollusk'
			}
		},{
			name: 'Oh Darling',
			artist: 'Super Tramp',
			audioFile: 'supertramp-oh-darling.mp3',
			playing: false,
			album: {
				cover: 'supertramp-cover.jpg',
				name: 'Retrospectacle'
			}
		},{
			name: 'Dressed in Decay',
			artist: 'CKY',
			audioFile: 'cky-dressed-in-decay.mp3',
			playing: false,
			album: {
				cover: 'cky-cover.jpg',
				name: 'An Answer Can be Found'
			}
		}
	]
	for( let i=0; i<songs.length; i++ ){
		songs[i].audioFile = URL + '/song-files/' + songs[i].audioFile;
		songs[i].album.cover = URL + '/album-covers/' + songs[i].album.cover;
	}	
	return songs;
}

function getPlacholder(){
	return {
		isPlaceholder: true,
		name: '',
		artist: '',
		audioFile: '',
		album: {
			cover: URL + '/album-covers/placeholder.jpg',
			name: ''
		}
	}
}
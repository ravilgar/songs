import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{
			title: "Macarena",
			duration: "2:14",
			id: "hsakjfhksdahfk8435uy98345uweh8934289",
		},
		{
			title: "Barbie Girl",
			duration: "3:15",
			id: "ashdfkjhsah89sdfh9h34894h84h389h",
		},
		{
			title: "What is Love",
			duration: "2:49",
			id: "asdf8asy98f98w494h983w4hfh3w4f9h843wf",
		},
		{
			title: "Let My People Go",
			duration: "4:10",
			id: "sahdfiuh78we7fgh44gf74874gg78478",
		},
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	// switch (action.type) {
	// 	case "SONG_SELECTED":
	// 		return action.payload;

	// 	default:
	// 		return selectedSong;
	// }
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	} else {
		return selectedSong;
	}
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});

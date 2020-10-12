import React from "react";
import { connect } from "react-redux";

const SelectedSong = ({ song }) => {
	return (
		<div>
			{song !== null && (
				<h1>
					{song.title}, {song.duration}
				</h1>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	song: state.selectedSong,
});

export default connect(mapStateToProps)(SelectedSong);

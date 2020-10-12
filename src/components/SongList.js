import React from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import Song from "./Song";

const SongList = ({ songs }) => {
	return (
		<div className="ui divided list">
			{songs.map((song) => (
				<ListItem title={song.title} duration={song.duration} key={song.id} />
			))}

			<Song />
		</div>
	);
};

const mapStateToProps = (state) => ({ songs: state.songs });

export default connect(mapStateToProps)(SongList);

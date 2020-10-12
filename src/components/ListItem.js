import React, { useState } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const ListItem = ({ title, duration, select }) => {
	const [song] = useState({ title, duration });
	return (
		<li className="item">
			{title} - {duration}
			<button className="ui button primary" onClick={() => select(song)}>
				Select
			</button>
		</li>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { select: selectSong };

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);

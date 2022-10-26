import NewDateFormat from "./DateTimePretty";

function Video(props) {
	return (
		<div className="video">
			<iframe
				title="myTitle"
				src={props.url}
				frameBorder="0"
				allow="autoplay; encrypted-media"
				allowFullScreen
			></iframe>
			<NewDateFormat date={props.date} />
		</div>
	);
}

export default Video;

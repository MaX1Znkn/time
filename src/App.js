import React, { useState } from "react";
import "./App.css";
import VideoList from "./Components/VideoList";

export default function App() {
	const [list] = useState([
		{
			url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
			date: "2022-10-23 01:24:00",
		},
		{
			url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
			date: "2021-10-23 01:24:00",
		},
		{
			url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
			date: "2022-10-22 01:24:00",
		},
		{
			url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
			date: "2022-10-23 01:24:00",
		},
		{
			url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
			date: "2018-01-01 16:17:00",
		},
		{
			url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
			date: "2017-12-02 05:24:00",
		},
	]);

	return <VideoList list={list} />;
}

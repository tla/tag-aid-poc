import React from "react";
import ReactDOM from "react-dom";
import App from "./components";

document.addEventListener("DOMContentLoaded", () => {
	// Fetch the section list
	const sectlist = process.env.PUBLIC_URL + '/data/sections.json';
	fetch(sectlist)
	.then(r => r.json())
	.then(data => ReactDOM.render(<App sectionList={data} />, document.getElementById("root")))
	.catch(console.error.bind(console));
});

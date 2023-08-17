import "./projects.css";
import PearlLumi from "../../asset/images/PearlLumi.png"; 
import DatingSite from "../../asset/images/DatingSite.png"; 
import GameApp from "../../asset/images/Connect4.png";

export default function Projects() {
	return (
		<div className="projects_page">
			<h1 className="projects_heading_one"> Projects...Some Things I Created </h1>
			
			<div className="wrapper">
				<div className="project_card">
					<div className="content_wrapper">
						<h2>Pearllumi Creative</h2>
					  	<p> Application </p>
					  	<p> User Responsiveness. CSS Media Queries. Figma. </p>
					  	<p> HTML. CSS. Javascript. ReactJS. </p>
					  	<a href="https://pearllumi1.onrender.com/" target="_blank" rel="noopener noreferrer"> view </a>
					</div>

					<div className="image_wrapper">
						<img src={PearlLumi} alt="imageofapplication" />
					</div>
				</div>
				
				<div className="project_card">
					<div className="content_wrapper">
					<h2>Where Singles Meet </h2>
						<p> Application </p>
					  	<p> Full authentication. React-toastify. Joi. </p>
					  	<p> HTML. CSS. Javascript. ReactJS. Express. MongoDB. Mongoose. NodeJS. </p>
					</div>

					<div className="image_wrapper">
						<img src={DatingSite} alt="imageofapppcation" />
					</div>
				</div>

				<div className="project_card">
					<div className="content_wrapper">
					<h2>Connect 4 </h2>
						<p> Application </p>
						<p> User Interface. Sound and Effects. </p>
						<p> HTML.  CSS. Javascript. </p>
						<a href="https://connect4four.netlify.app" target="_blank" rel="noopener noreferrer"> view </a>
					
					</div>

					<div className="image_wrapper">
					<img src={GameApp} alt="imageofapplication" />
					</div>

				</div>
			</div>
		</div>
	);
}

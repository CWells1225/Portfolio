import "./about.css";
import Delta from "../../asset/images/delta.jpg"; 
import LAFitness from "../../asset/images/lafitness.jpg"; 
import Music from "../../asset/images/apple-music-logo.jpg"; 
import Pinterest from "../../asset/images/Pinterest-Logo.png"; 
import Sports from "../../asset/images/TNT_APP.png"; 

export default function About() {
	return (

		<div className="about_page">
			<div className="about_me_section">
			<h1 className="about_heading_one"> About Me </h1>
			<h2 className="about_heading_two"> Leveraging a background in healthcare and telecommunications, I am a born creative with enthusiasm for pushing design and working in innovative spaces. </h2> 

				<ul className="about_list">
					<li> Born & raised in ATL </li>
					<li> Family-oriented </li>
					<li> BS in Biology &#60; Drawing & Fashion </li>
					<li> Travel enthusiast </li>
					<li> Health & Fitness enthusiast </li>
				</ul>
			</div>

			<div className="interests_wrapper">
			<h2> My Interests </h2>
				<div className="about_card">
					<div className="interest_content_wrapper">
					<h3> Art & Fashion </h3>
						<p> I've loved art since I was a child. I rememeber I used to draw every and anything. Pinterest is one of my favorite applications to search artwork and fashion to get ideas and inspiration. </p>
					</div>
					<div className="interest_images_wrapper">
						<img src={Pinterest} alt="ImageofPinterestLogo"/>	</div>
				</div>		

				<div className="about_card">
					<div className="interest_content_wrapper">
					<h3> Music </h3>
						<p> I love music. I'm almost always listening to music. I love listening to music on Apple music. I have multiple playlists for different activities. </p>
					</div>
					<div className="interest_images_wrapper">
						<img src={Music} alt="ImageofAppleLogo" />	</div>
				</div>		

				<div className="about_card">
					<div className="interest_content_wrapper">
					<h3> Travel </h3>
						<p> I am a travel enthusiast. I enjoy traveling with my family and friends. I enjoy learning different cultures and trying new food. I love traveling with Delta. </p>
					</div>
					<div className="interest_images_wrapper">
						<img src={Delta} alt="ImageofDeltaLogo" />	
					</div>
				</div>	

				<div className="about_card">
					<div className="interest_content_wrapper">
					<h3> Sports </h3>
						<p> I love sports, especially basketball. I just play for fun now but I enjoy watching sports and keeping up with updates with different apps like <br/> ESPN, TNT, or NBA. </p>
					</div>
					<div className="interest_images_wrapper">
						<img src={Sports} alt="ImageofTNTLogo" />	
					</div>
				</div>		
			

				<div className="about_card">
					<div className="interest_content_wrapper">
					<h3> Health & Fitness </h3>
						<p> I've always been active. The older I get the more I value my health. I enjoy balancing eating healthy and still being able to eat sweets here and there. Also, making sure I stay active. I love working out at LA Fitness. </p>
					</div>
					<div className="interest_images_wrapper">
						<img src={LAFitness} alt="ImageofLAFitnessLogo" />	</div>
				</div>		
			

			</div>
		</div>
	);
}

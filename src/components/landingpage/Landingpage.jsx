import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./landingpage.css"

export default function Landingpage() {
	return (

		<div className='landingpage'>
			<div>
				<h1> HI, I AM CHRISTINA WELLS ! </h1>
				<h2> Full Stack Developer. Creative. Innovator. </h2>
				<h3> Leveraging a background in healthcare and telecommunications, I am a born creative with enthusiasm for pushing design and working in innovative spaces. </h3>
			</div>

			<div className='projectbutton'>
				<CustomLink to="/projects"> 
					<button> CHECK OUT MY WORK </button>
				</CustomLink>
			</div>

			<div className='aboutbutton'>
				<CustomLink to="/about"> 
					<button> GET TO KNOW ME </button>
				</CustomLink>
			
			</div>
		</div>
		);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvedPath.pathname, end: true })

	return (
		<li className={isActive ? "active" : ""}>
			<Link to ={to} {...props}>
			{children}
			</Link>
		</li>
		)
}

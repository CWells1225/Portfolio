import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
	return (

		<nav className="nav">
			
		<Link to ="/" className="landing"> CW </Link>
			
			<ul>
				<li className="about-list">
					<CustomLink to="/about"> About</CustomLink>
				</li>
				<li className="project-list">
					<CustomLink to="/projects"> Projects</CustomLink>
				</li>
				<li>
					<CustomLink to="/resume"> 
					<button className="resume">Resume</button>
					</CustomLink>
				</li>
			</ul>
		</nav>
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


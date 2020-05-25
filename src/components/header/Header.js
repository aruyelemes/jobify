import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
		<Fade top duration={1000} distance="20px">
			<div>
				<header className="header">
					<NavLink to="/home" tag={Link} className="logo">
						<span className="grey-color"> &lt;</span>
						<span className="logo-name">Jobify</span>
						<span className="grey-color">/&gt;</span>
					</NavLink>
					<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" htmlFor="menu-btn">
						<span className="navicon"></span>
					</label>
					<ul className="menu">
						<li>
							<NavLink
								to="/home"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/company"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Companies
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/internship"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Internships
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/vacancy"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Vacancies
							</NavLink>
						</li>
				
						<li>
							<NavLink
								to="/contact"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Contact Me
							</NavLink>
						</li>
					</ul>
				</header>
			</div>
		</Fade>
	);
}
export default Header;

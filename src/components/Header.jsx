import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	function test() {
		let i = 0;
		console.log(i++);
	}
	return (
		<header>
			<p>Logo</p>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/categories">Categories👉</NavLink>
					</li>
					<li>
						<NavLink onClick={test()} to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/auth/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="/auth/register">Register</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

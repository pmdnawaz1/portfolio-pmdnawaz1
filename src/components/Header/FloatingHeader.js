import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const FloatingHeader = styled.div`
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1a1f23;
	padding: 2rem;
	z-index: 1;
	margin: 1rem;
	border-radius: 10px;
	opacity: 0.8;
`;

const FloatingNav = styled.ul`
	list-style-type: none;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 900px;
`;

const FloatingNavItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FloatingNavLink = styled.a`
	font-size: 2.25rem;
	color: #fff;
	text-decoration: none;
	padding: 1rem;
`;

const FloatingHeaderContent = () => (
	<FloatingHeader>
		<FloatingNav>
			<FloatingNavItem>
				<Link href="#projects">
					<FloatingNavLink>Projects</FloatingNavLink>
				</Link>
			</FloatingNavItem>
			<FloatingNavItem>
				<Link href="#tech">
					<FloatingNavLink>Technologies</FloatingNavLink>
				</Link>
			</FloatingNavItem>
			<FloatingNavItem>
				<Link href="#about">
					<FloatingNavLink>About</FloatingNavLink>
				</Link>
			</FloatingNavItem>
		</FloatingNav>
	</FloatingHeader>
);

export default FloatingHeaderContent;

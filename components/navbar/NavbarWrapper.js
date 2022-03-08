import Navbar from './Navbar';

const NavbarWrapper = (props) => {
	return (
		<div>
			<Navbar tab={props.tab}></Navbar>
			{props.children}
		</div>
	);
};

export default NavbarWrapper;

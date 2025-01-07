import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "@material-tailwind/react";
import React from "react";
export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="App">
      <Navbar className="bg-gray-600">
        <NavbarBrand>Material Tailwind + CRA</NavbarBrand>
        <NavbarToggler onClick={handleOpen} />
        <Collapse open={open}>
          <Nav>
            <NavItem>
              <NavLink href="#" active>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <footer className="flex items-center justify-center w-full h-24 border-t dark:border-gray-600">
        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Material Tailwind + CRA
          </p>
        </div>
      </footer>
    </div>
  );
}

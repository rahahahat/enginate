import React from "react";
import {
  Nav,
  NavLink,
  LinkWrap,
  Hamburger,
  Wrapper,
  SideNav,
  SideNavWrap,
  SideNavItem,
} from "./Navbar-style.jsx";

const Navbar = ({ selected }) => {
  const navs = ["Home", "About Us", "Contact Us"];
  React.useEffect(() => {
    document.addEventListener(
      "scroll",
      () => {
        if (window.scrollY == 0) {
          setState(false);
        } else if (window.scrollY != 0 && state == false) {
          setState(true);
        }
      },
      false
    );
  }, []);
  const [state, setState] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Nav prop={state}>
        <Wrapper prop={state}>
          <Hamburger
            prop={state}
            open={open}
            onClick={() => {
              setOpen(open => !open);
            }}
          >
            <div />
            <div />
            <div />
          </Hamburger>
          <LinkWrap>
            {navs.map(link => {
              if (link == selected) {
                return (
                  <NavLink selected={true} prop={state}>{`${link}`}</NavLink>
                );
              } else {
                return <NavLink prop={state}>{link}</NavLink>;
              }
            })}
          </LinkWrap>
        </Wrapper>
      </Nav>
      <SideNav open={open}>
        {navs.map(link => {
          if (link == selected) {
            return <SideNavItem selected={true}>{`${link}`}</SideNavItem>;
          } else {
            return <SideNavItem>{link}</SideNavItem>;
          }
        })}
      </SideNav>
    </>
  );
};

export default Navbar;

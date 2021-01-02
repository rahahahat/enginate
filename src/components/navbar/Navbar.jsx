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
import { Link } from "gatsby";
const Navbar = ({ selected }) => {
  const navs = ["Home", "Contact Us"];
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
              setOpen((open) => !open);
            }}
          >
            <div />
            <div />
            <div />
          </Hamburger>
          <LinkWrap>
            {navs.map((link) => {
              if (link == selected) {
                const path =
                  link == "About Us"
                    ? "/about"
                    : link == "Contact Us"
                    ? "/contact"
                    : "/";
                return (
                  <Link
                    css={`
                      text-decoration: none;
                    `}
                    to={path}
                  >
                    <NavLink selected={true} prop={state}>
                      {link}
                    </NavLink>
                  </Link>
                );
              } else {
                const path =
                  link == "About Us"
                    ? "/about"
                    : link == "Contact Us"
                    ? "/contact"
                    : "/";
                return (
                  <Link
                    css={`
                      text-decoration: none;
                    `}
                    to={path}
                  >
                    <NavLink prop={state}>{link}</NavLink>
                  </Link>
                );
              }
            })}
          </LinkWrap>
        </Wrapper>
      </Nav>
      <SideNav open={open}>
        {navs.map((link) => {
          if (link == selected) {
            const path =
              link == "About Us"
                ? "/about"
                : link == "Contact Us"
                ? "/contact"
                : "/";
            return (
              <Link
                css={`
                  text-decoration: none;
                `}
                to={path}
              >
                <SideNavItem>{`${link}`}</SideNavItem>
              </Link>
            );
          } else {
            const path =
              link == "About Us"
                ? "/about"
                : link == "Contact Us"
                ? "/contact"
                : "/";
            return (
              <Link
                css={`
                  text-decoration: none;
                `}
                to={path}
              >
                <SideNavItem>{`${link}`}</SideNavItem>
              </Link>
            );
          }
        })}
      </SideNav>
    </>
  );
};

export default Navbar;

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
import { Link } from "react-scroll";
const Navbar = () => {
  const [selected, setSelected] = React.useState("Home");
  const navs = ["Home", "About Us", "Services", "Sectors", "Contact Us"];
  const setLink = (link) => {
    setSelected(link);
  };
  const switchLinks = (link) => {
    switch (link) {
      case "Home":
        return "home";
      case "About Us":
        return "about-us";
      case "Services":
        return "services";
      case "Sectors":
        return "sectors";
      case "Contact Us":
        return "contact-us";
    }
  };
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
                return (
                  <Link
                    to={switchLinks(link)}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onSetActive={() => {
                      setLink(link);
                    }}
                  >
                    <NavLink selected={true} prop={state}>
                      {link}
                    </NavLink>
                  </Link>
                );
              } else {
                return (
                  <Link
                    to="sectors"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onSetActive={() => {
                      setLink(link);
                    }}
                    to={switchLinks(link)}
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
            return (
              <Link
                to="sectors"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                offset={-50}
                onSetActive={() => {
                  setLink(link);
                }}
                to={switchLinks(link)}
              >
                <SideNavItem>{`${link}`}</SideNavItem>
              </Link>
            );
          } else {
            return (
              <Link
                to={switchLinks(link)}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onSetActive={() => {
                  setLink(link);
                }}
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

import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import Logo from "../Assets/svg/logo";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    // <Container>
    //   <Wrapper>
    //     <Logo>
    //       <a>
    //         <img src="/images/logo.svg" alt="" />
    //       </a>
    //     </Logo>
    //     <Menu>
    //       <a href="#">MODEL S</a>
    //       <a href="#">MODEL 3</a>
    //       <a href="#">MODEL X</a>
    //       <a href="#">MODEL Y</a>
    //       <a href="#">CHARGING</a>
    //     </Menu>
    //     <RightMenu>
    //       <a href="#">Shop</a>
    //       <a href="#">Tesla Account</a>
    //       <CustomMenu onClick={() => setBurgerStatus(true)} />
    //     </RightMenu>
    //     <BurgerNav show={burgerStatus}>
    //       <CloseWrapper>
    //         <CustomClose onClick={() => setBurgerStatus(false)} />
    //       </CloseWrapper>
    //       <li>
    //         <a href="#">ROADSTER</a>
    //       </li>
    //       <li>
    //         <a href="#">COMMERCIAL ENERGY</a>
    //       </li>
    //       <li>
    //         <a href="#">UTILITIES</a>
    //       </li>
    //       <li>
    //         <a href="#">ENERGY</a>
    //       </li>
    //       <li>
    //         <a href="#">FIND US</a>
    //       </li>
    //       <li>
    //         <a href="#">SUPPORT</a>
    //       </li>
    //       <li>
    //         <a href="#">OTHER EUROPE</a>
    //       </li>
    //     </BurgerNav>
    //   </Wrapper>
    // </Container>

    <Wrapper>
      <Container>
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="NavMenu">
          <Link to="/model-s">MODEL S</Link>
          <Link to="/model-3">MODEL 3</Link>
          <Link to="/model-x">MODEL X</Link>
          <Link to="/model-y">MODEL Y</Link>
        </div>

        <div className="MenuIcon">
          <a href="#">Tesla Account</a>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </div>

        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>

          <li className="MainMenu">
            <Link to="/model-s">MODEL S</Link>
          </li>
          <li className="MainMenu">
            <Link to="/model-3">MODEL 3</Link>
          </li>
          <li className="MainMenu">
            <Link to="model-x">MODEL X</Link>
          </li>
          <li className="MainMenu">
            <Link to="model-y">MODEL Y</Link>
          </li>

          <li>
            <a href="#">ROADSTER</a>
          </li>
          <li>
            <a href="#">COMMERCIAL ENERGY</a>
          </li>
          <li>
            <a href="#">UTILITIES</a>
          </li>
          <li>
            <a href="#">ENERGY</a>
          </li>
          <li>
            <a href="#">FIND US</a>
          </li>
          <li>
            <a href="#">SUPPORT</a>
          </li>
          <li>
            <a href="#">OTHER EUROPE</a>
          </li>
        </BurgerNav>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100%;
  z-index: 1;
`;

const Container = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .logo {
    svg {
      width: 100px;
      fill: #000 !important;
    }
  }

  .NavMenu {
    
    a {
      margin: 0 15px;
    }
  }

  .MenuIcon {
    display: flex;
    align-items: center;

    a {
      margin: 0 10px 0 0;
    }
  }

  .MainMenu  {
    display: none;
  }

  @media (max-width: 767.98px) {
    .NavMenu {
      display: none;
    }

    .MainMenu  {
    display: block;
  }
  }
`;

// const Container = styled.div`
//   min-height: 60px;
//   position: fixed;
//   display: flex;
//   /* justify-content: center; */
//   align-items: center;
//   /* padding: 0 20px; */
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 1;
//   a {
//     img {
//       /* margin-right: 170px; */
//       height: 14px;
//       width: 100px;
//       @media (max-width: 768px) {
//         margin-right: 0px;
//       }
//     }
//   }
// `;

// const Wrapper = styled.div`
//   width: 100%;
//   padding: 0px 40px;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
// `;

// const Logo = styled.div`
// `;

// const Menu = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex: 1;
//   a {
//     font-weight: bold;
//     text-transform: uppercase;
//     padding: 0 10px;
//     flex-wrap: nowrap;
//   }
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const RightMenu = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   a {
//     font-weight: bold;
//     text-transform: uppercase;
//     margin-right: 10px;
//   }
// `;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  z-index: 999;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: bold;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

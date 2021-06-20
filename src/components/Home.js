import React from "react";
import styled from "styled-components";
import Section from "./Section";
const Home = () => {
  return (
    <Container>
      {
            SectionInfos.map(info=> (
                  <Section
        title={info.title}
        description={info.description}
        backgroundImg={info.backgroundImg}
        leftBtnText={
              info.leftBtnText
        }
        rightBtnText={info.rightBtnText}
        key={info.title}
      />
            ))
      }

    </Container>
  );
};

export default Home;

const SectionInfos = [
      {
      title:"Model S",
        description:"Order Online for Touchless Delivery",
        backgroundImg:"model-s.jpg",
        leftBtnText:"Custom order",
        rightBtnText:"Existing inventory",
      },
      {
            title: "Model Y",
            description:"Order Online for Touchless Delivery",
            backgroundImg:"model-y.jpg",
            leftBtnText:"Custom order",
            rightBtnText:"Existing inventory",
      },

      {
            title: "Model 3",
            description:"Order Online for Touchless Delivery",
            backgroundImg:"model-3.jpg",
            leftBtnText:"Custom order",
            rightBtnText:"Existing inventory",
      },

      {
            title: "Model X",
            description:"Order Online for Touchless Delivery",
            backgroundImg:"model-x.jpg",
            leftBtnText:"Custom order",
            rightBtnText:"Existing inventory",
      },
      {
            title: "Lowest Cost Solar panels in America",
            description:"Money-back guarantee",
            backgroundImg:"solar-panel.jpg",
            leftBtnText:"Order Now",
            rightBtnText:"Learn More",
      },{
            title: "Solar for New Roofs",
            description:"Solar Roof Costs Less Than a New Roof Plus Solar Panels",
            backgroundImg:"solar-roof.jpg",
            leftBtnText:"Order Now",
            rightBtnText:"Learn More",
      },
      {
            title: "Accessories",
            description:"",
            backgroundImg:"accessories.jpg",
            leftBtnText:"Shop Now",
            rightBtnText:"",
      }
]






const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-type: Y mandatory;
`;

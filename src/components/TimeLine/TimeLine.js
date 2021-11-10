import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode, NeonSign, Bold, Inline, neonAnimation } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import styled from 'styled-components';
import { AiFillRightCircle } from 'react-icons/ai';


const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  // const DisplayAnImageWithStyle = () => {
  //   return (
  //     <View>
  //     <Image
  //       style={{
  //         resizeMode: "contain",
  //         height: 100,
  //         width: 200
  //       }}
  //       source={require("public/images/profile.JPG")}
  //     />
  //     <Text>resizeMode : contain</Text>
  //   </View>
  //   )
  // };

  const styles = ({
    container: {
      display: "flex",
      flexDirection: "vertical",
      justifyContent: "right",
      alignItems: "right",
      height: "100%",
      width: "50%",
      float: "right",
    }
  });

const AnimatedLogo = styled(NeonSign)`
  animation: ${neonAnimation} 1s infinite;
`;

  return (
    <Section id="about">
      <SectionTitle>
      ----------
      </SectionTitle>
        <div class="image-container"> 
          <div class="image" style={styles.container}> 
            <img style={{ resizeMode: "right", height: 400, width: 400}} src="/images/perfectprofile.png" alt=""/>
          </div>
          <AnimatedLogo/>
          <NeonSign class="logo">
            <br/><br/><br/><br/><br/>
            <neonAnimation>
              <Bold>h<Inline>e</Inline>yy<Inline>yy</Inline>..</Bold>
              </neonAnimation>
          </NeonSign>
          
        </div>
     
      <SectionText >
        I am a front-end developer and ux/ui designer with passion for creating an interactive, useful and fun user experience. 
        <br/><br/>
        Currently studying at Coder Academy - Brisbane, Australia.
        <br/>
        <a href="#" target="_blank">Download Resume</a>
      </SectionText>
      
      {/* <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel_item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle>
                {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemTitle>
                  {item.text}
                </CarouselItemTitle>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
          key={index}
          index={index}
          active={activeItem}
          onClick={(e) => handleClick(e, index)}
          type="button"
          >
            <CarouselButtonDot active={activeItem}/>
          </CarouselButton>
        ))}
      </CarouselButtons> */}
      {/* <SectionDivider /> */}
    </Section>
  );
};

export default Timeline;
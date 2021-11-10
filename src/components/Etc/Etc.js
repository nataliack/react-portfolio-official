import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './EtcStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
// import { projects } from '../../constants/constants';


const Data = [
    {
        id: 0,
        Image: '../images/artone',
    },
    {
        id: 1,
        imgSrc: '',
    },
    {
        id: 2,
        imgSrc: '',
    },
    {
        id: 3,
        imgSrc: '',
    },
    {
        id: 4,
        imgSrc: '',
    },
]

const projectsone = [
    {
        image: '/images/artfour.jpg',
        id: 0,
      },
    {
        image: '/images/artthree.jpg',
        id: 1,
      },
    {
        image: '/images/arttwo.jpg',
        id: 2,
      },
    {
        image: '/images/artone.jpg',
        id: 3,
    },
    {
        image: '/images/artsix.JPG',
        id: 4,
    },
    {
        image: '/images/artthirteen.JPG',
        id: 5,
    },
    {
        image: '/images/artnine.jpeg',
        id: 6,
    },
    {
        image: '/images/artfourteen.jpeg',
        id: 7,
    },

  ];

  const projectstwo = [
    {
        image: '/images/photoone.JPG',
        id: 0,
      },
    {
        image: ' /images/photofour.JPG',
        id: 1,
      },
    {
        image: '/images/photothree.JPG',
        id: 2,
      },
    {
        image: '/images/phototwo.JPG',
        id: 3,
    },
   

  ];
  
  export const TimeLineData = [
    { year: 2020, text: 'Graduated from high school', },
    { year: 2021, text: 'Studied in a coding bootcamp', },
  
  ];

const Gallery = () => (
  <Section id= "etc" >
    <SectionDivider />
    <SectionTitle main>Etc.</SectionTitle>
    <SectionText>Below is some work that I've done outside my coding projects. 
        Even though most of my work is digital, I love drawing and photography
        — it's constantly pushing me to get the small details right and to appreciate aesthetic things.</SectionText>
        <SectionText>drawings</SectionText>
    <GridContainer>
      {projectsone.map(({ id, image }) => (
        <BlogCard key={id}>
          <Img src={image} />
      
        </BlogCard>
        // <Img src={image} />
      ))}
    
    </GridContainer>
    <br/><br/><br/>
    <SectionDivider/>
    <br/><br/><br/>
    <SectionText>shots</SectionText>changes
    <GridContainer>
      {projectstwo.map(({ id, image }) => (
        <BlogCard key={id}>
          <Img src={image} />
      
        </BlogCard>
        // <Img src={image} />
      ))}
    
    </GridContainer>
    <br/><br/><br/>
    <SectionDivider/>
    <br/><br/><br/>
  </Section>
);

export default Gallery;
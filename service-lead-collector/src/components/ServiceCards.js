import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
const Wrapper = styled.div`
  padding-bottom: 10vh;
`;
const Header = styled.h2`
  text-align: center;
  padding: 0 0 32px 0;
  font-weight: bold;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
const ServiceCard = styled(Link)`
  width: 35%;
  background-color: var(--service-card-color);
  display: flex;
  flex-flow: column nowrap;
  text-decoration: none;
  padding-bottom: 16px;
  border: solid black 2px;
  margin-bottom: 16px;

  @media screen and (min-width: 600px) {
    width: 33%;
    padding: 0px 0 15px;
  }
  @media screen and (min-width: 1000px) {
    padding: 0 0 20px;
    width: 15%;
  }
`;
const Icon = styled(GatsbyImage)`
  justify-self: center;
  align-self: center;
  height: 75px;
  width: 100%;
  @media screen and (min-width: 600px) {
    height: 150px;
  }
  @media screen and (min-width: 1000px) {
    height: 150px;
  }
`;
const Text = styled.p`
  color: var(--service-card-font-color);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 8px 0px;
  height: 32px;
  @media screen and (min-width: 600px) {
    padding: 16px 8px;
    font-size: 24px;
    height: 45px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 24px;
    height: 40px;
  }
`;
const Line = styled.hr`
  width: 66%;
  background: var(--service-card-font-color);
  height: 2px;
  border: 0px;
`;
const Tag = styled.p`
  color: var(--service-card-font-color);
  font-size: 10px;
  padding-top: 8px;
  text-align: center;
  height: 30px;
  @media screen and (min-width: 600px) {
    font-size: 16px;
    padding-top: 16px;
    height: 35px;
  }
  @media screen and (min-width: 1000px) {
    padding: 16px 8px;
    font-size: 24px;
    height: 80px;
  }
`;
function ServiceCards() {
  const data = useStaticQuery(graphql`
    {
      sanityIndex {
        serviceCardsTitle
        services {
          icon {
            altText
            image {
              asset {
                gatsbyImageData
              }
            }
          }
          title
          siteUrl {
            slug {
              current
            }
          }

          tag
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Header>{data.sanityIndex.serviceCardsTitle}</Header>
      <CardWrapper>
        {data.sanityIndex.services.map((arr, i) => {
          return (
            <ServiceCard key={i} to={"/services/" + arr.siteUrl.slug.current}>
              <Icon
                image={arr.icon.image.asset.gatsbyImageData}
                alt={arr.icon.altText}
              />
              <Text>{arr.title}</Text>
              <Line />
              <Tag>{arr.tag}</Tag>
            </ServiceCard>
          );
        })}
      </CardWrapper>
    </Wrapper>
  );
}

export default ServiceCards;

// Article.jsx

import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledArticle = styled.section`
  /* Add your styles for the Article section */
  /* Example styles: */
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  text-align: center; /* Center the text */

  .block {
    /* Add styles for the blocks with images and links */
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      /* Style for the images */
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      /* Outline the image block in the shape of a square */
      border: 2px solid ${({ theme }) => theme.color};
      margin-bottom: 1rem;
    }

    a {
      /* Style for the article links */
      color: var(--primary);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Article = () => {
  return (
    <Element name="Article" id="article">
      <StyledArticle className="section">
        <Container>
          <Title>
            <h2>Blog</h2>
            <div className="underline"></div>
          </Title>
          {/* Add your content here */}
          <Row>
            <Col>
              <h3>Ransomware y la computacion cuantica</h3>
              <p>Un artículo sobre la computación cuántica como una herramienta para luchar contra el ransomware.</p>
              <div className="block">
                <img src="https://nordvpn.com/wp-content/uploads/blog-featured-ransomware-2.svg" alt="Article 1" />
                <a href="https://www.linkedin.com/pulse/ransomware-y-la-computaci%2525C3%2525B3n-cu%2525C3%2525A1ntica-luis-eduardo-suarez-arroyo-v4tbe%3FtrackingId=QlO7CAJfTKiajCaLKohbKQ%253D%253D/?trackingId=QlO7CAJfTKiajCaLKohbKQ%3D%3D">Read Article</a>
              </div>
            </Col>
          </Row>
        </Container>
      </StyledArticle>
    </Element>
  );
};

export default Article;
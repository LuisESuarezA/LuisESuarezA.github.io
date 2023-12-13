import React from "react";
import styled from "styled-components";
import { Title } from "./globalStyledComponents";
import { Element } from "react-scroll";
import notasMusicales from "../images/notasMusicales.jpg";
import filmLogo from "../images/filmLogo.jpg";
import matraz from "../images/matraz.jpg";
import datos from "../images/datos.jpg";

const StyledInterests = styled.section`
padding: 4rem 0;
  text-align: center;

  .section-subtitle {
    margin-bottom: 6px;
    font-weight: 400;
    opacity: 0.6;
  }

  .interest-card {
    margin-bottom: 2rem;
    border: 2px solid ${({ theme }) => theme.color};
    border-radius: 8px;

    .body {
      position: relative;
      padding: 100px 20px; /* Adjust the padding to make the square bigger in height */

      img {
        max-width: 100%;
        height: 200px;
        border-radius: 8px;
        border: 2px solid ${({ theme }) => theme.color};
        margin-bottom: 1rem;
      }

      h6 {
        margin-top: 0; /* Adjusted to stick to the upper edge */
        margin-bottom: 0;
      }

      .hidden-text {
        margin: 2px;
        opacity: 0;
        font-size: 14px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
      }

      &:hover .hidden-text {
        opacity: 0.9;
        transform: translateX(-50%) translateY(0);
      }
    }
  }
`;


const Interests = () => {
  return (
    <StyledInterests className="section" id="interests">
      <div className="container text-center">
      <Element name="Interests" id="interests">
      <Title>
            <h2>Interests</h2>
            <div className="underline"></div>
     </Title>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="interest-card">
              <div className="body">
                <img
                    src={notasMusicales}
                    alt="Interest 1"
                    className="icon"
                />
                <h6 className="title">Música</h6>
                <p className="hidden-text">
                  Soy un melomano, no puedo pasar un solo día sin escuharla.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="interest-card">
              <div className="body">
                <img
                  src={filmLogo}
                  alt="Interest 2"
                  className="icon"
                />
                <h6 className="title">TV y movies</h6>
                <p className="hidden-text">
                  Me encantan las series y peliculas. Y me apasionan las sitcoms.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="interest-card">
              <div className="body">
                <img
                  src={matraz}
                  alt="Interest 3"
                  className="icon"
                />
                <h6 className="title">Ciencia</h6>
                <p className="hidden-text">
                  Me encanta aprender nuevas cosas del mundo por medio de la ciencia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="interest-card">
              <div className="body">
                <img
                  src={datos}
                  alt="Interest 4"
                  className="icon"
                />
                <h6 className="title">Datos</h6>
                <p className="hidden-text">
                  Me gusta estudiar datos y como pueden ser usados para resolver problemas de nuestro mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
       </Element>
      </div>
    </StyledInterests>
  );
};

export default Interests;
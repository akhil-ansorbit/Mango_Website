import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
// import Button from '../components/Button';
import MangoTree from '../assets/images/mangoTree.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Akhil Gothi</span>
              </p>
              <h2 className="about__heading">About Our Mango Farm</h2>
              <div className="about__info">
                <PText>
                  At our mango farm, we are committed to providing the highest
                  quality, 100% organic mangoes. We believe in sustainable
                  farming practices that promote biodiversity and protect the
                  environment.
                  <br /> <br />
                  Our mangoes are grown without the use of synthetic
                  fertilizers, pesticides, or herbicides. We use natural methods
                  to control pests and promote healthy soil, ensuring that our
                  mangoes are free from harmful chemicals and safe for our
                  customers to enjoy.
                  <br />
                  <br />
                  We are proud to be a family-owned and operated farm that has
                  been growing mangoes for over 27 years. We are passionate
                  about what we do and are dedicated to providing the best
                  possible mangoes to our customers.
                </PText>
              </div>
              {/* <Button btnText="Download CV" btnLink="#" /> */}
            </div>
            <div className="right">
              <img src={MangoTree} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Services</h1>
              <AboutInfoItem
                title="Delivery At :"
                items={[
                  'Ahmedabad, Rajkot, Morbi, Surat, Junagadh, Gondal, Vadodra, Sidsar, ...',
                ]}
              />
              {/* <AboutInfoItem
                title="Quality"
                items={[
                  'we gurranted Ensuring that the mangoes are of high quality and are fresh.',
                ]}
              />
              <AboutInfoItem
                title="Packaging"
                items={[
                  'We provide packaging services to protect the fruit from damage during transportation and make it more presentable.',
                ]} */}
              {/* /> */}
            </div>
            <div className="about__info__item">
              {/* <h1 className="about__info__heading">Quality</h1> */}

              <AboutInfoItem
                title="Quality :"
                items={[
                  'we gurranted Ensuring that the mangoes are of high quality and are fresh.',
                ]}
              />
              {/* <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'PHP']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'After Effects', 'Figma']}
              /> */}
            </div>
            <div className="about__info__item">
              {/* <h1 className="about__info__heading">Experiences</h1> */}

              <AboutInfoItem
                title="Packaging :"
                items={[
                  'We provide packaging services to protect the fruit from damage during transportation and make it more presentable.',
                ]}
              />
              {/* <AboutInfoItem
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              />
              <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              /> */}
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

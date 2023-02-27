import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaBoxOpen } from 'react-icons/fa';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<TbTruckDelivery />}
            title="Home Delivery At"
            desc="Ahmedabad, Rajkot, Morbi, Surat, Junagadh, Gondal, Vadodra, Sidsar, ..."
          />
          <ServicesSectionItem
            icon={<BsFillPatchCheckFill />}
            title="Quality assurance"
            desc="we gurranted Ensuring that the mangoes are of high quality and are fresh."
          />
          <ServicesSectionItem
            icon={<FaBoxOpen />}
            title="Packaging"
            desc="We provide packaging services to protect the fruit from damage during transportation and make it more presentable"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}

import useBusiness from "../../hooks/useBusiness/useBusiness";
import { Business } from "../../redux/features/businessSlice/types";
import Button from "../Button/Button";
import BusinessCardStyled from "./BusinessCardStyled";

interface BusinessCardProps {
  business: Business;
}

const BusinessCard = ({ business }: BusinessCardProps): JSX.Element => {
  const {
    id,
    businessName,
    slogan,
    address,
    adhesionDate,
    businessImage,
    contactNumber,
  } = business;

  const { deleteBusiness } = useBusiness();
  return (
    <BusinessCardStyled>
      <article className="business-card__container">
        <h2 className="business-card__businessName">{businessName}</h2>
        <span className="business-card__slogan">{slogan}</span>
        <span className="business-card__info">Dirección: {address}</span>
        <span className="business-card__info">
          Fecha de adhesión: {adhesionDate}
        </span>
        <span className="business-card__info">Contacto: {contactNumber}</span>
        <Button
          text="Eliminar"
          className="business-card__eliminar"
          action={() => deleteBusiness(id)}
        />
        <img
          className="business-card__image"
          src={businessImage}
          alt={businessName}
        />
      </article>
    </BusinessCardStyled>
  );
};

export default BusinessCard;

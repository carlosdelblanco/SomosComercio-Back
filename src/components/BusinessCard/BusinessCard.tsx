import BusinessCardStyled from "./BusinessCardStyled";

interface BusinessCardProps {
  businessName: string;
  slogan: string;
  address: string;
  adhesionDate: string;
  contactNumber: string;
  businessImage: string;
}

const BusinessCard = (business: BusinessCardProps): JSX.Element => {
  const {
    businessName,
    slogan,
    address,
    adhesionDate,
    businessImage,
    contactNumber,
  } = business;
  return (
    <BusinessCardStyled>
      <article className="business-card__container">
        <h2 className="business-card__businessName">{businessName}</h2>
        <h3 className="business-card__slogan">{slogan}</h3>
        <h3>Dirección: {address}</h3>
        <h3>Fecha de adhesión: {adhesionDate}</h3>
        <h3>Contacto: {contactNumber}</h3>
        <img
          className="business-card__image"
          src={businessImage}
          alt={businessName}
        />
        <br />
      </article>
    </BusinessCardStyled>
  );
};

export default BusinessCard;

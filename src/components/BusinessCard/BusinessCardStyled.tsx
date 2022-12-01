import styled from "styled-components";

const BusinessCardStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 30px;
  max-width: 450px;
  font-family: ${(props) => props.theme.font.family};
  color: ${(props) => props.theme.colors.mainItemTextColor};

  .business-card__container {
    margin: 10px;
  }

  .business-card__image {
    max-width: 89%;
    height: auto;
    margin-top: 1rem;
  }

  .business-card__businessName {
    font-size: 36px;
  }

  .business-card__slogan {
    font-size: 24px;
    line-height: 2;
  }

  .business-card__info {
    display: block;
    font-size: 18px;
  }
`;

export default BusinessCardStyled;

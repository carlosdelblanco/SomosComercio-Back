import styled from "styled-components";

const BusinessCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 30px;
  max-width: 450px;
  font-family: ${(props) => props.theme.font.family};
  color: ${(props) => props.theme.colors.mainItemTextColor};
  border-bottom: 1px solid black;

  .business-card__container {
    margin: 10px;
  }

  .business-card__image {
    //height: auto;
    height: 200px;
    width: 266px;
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

  .business-card__eliminar {
    display: flex;
    margin: 0;
    margin-top: 0.5rem;
  }
`;

export default BusinessCardStyled;

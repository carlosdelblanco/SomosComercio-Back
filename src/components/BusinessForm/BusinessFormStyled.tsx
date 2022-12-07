import styled from "styled-components";

const BusinessFormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;

  .main-box {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .main-box_field {
    padding: 0.5rem;
    font-size: inherit;
  }
`;

export default BusinessFormStyled;

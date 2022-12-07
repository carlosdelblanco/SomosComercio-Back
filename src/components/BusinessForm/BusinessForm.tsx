import React, { useState } from "react";
import useBusiness from "../../hooks/useBusiness/useBusiness";
import { Business } from "../../redux/features/businessSlice/types";
import Button from "../Button/Button";
import BusinessFormStyled from "./BusinessFormStyled";

const initialFormData: Business = {
  id: "",
  businessName: "",
  category: "",
  slogan: "",
  address: "",
  adhesionDate: "",
  contactNumber: "",
  businessImage: "",
};

const BusinessForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialFormData);
  const { createBusiness } = useBusiness();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const isNotEmpty = formData.businessName !== "" && formData.category !== "";

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formSubmitData: Business = {
      id: formData.id,
      businessName: formData.businessName,
      category: formData.category,
      slogan: formData.slogan,
      address: formData.address,
      adhesionDate: formData.adhesionDate,
      contactNumber: formData.contactNumber,
      businessImage: formData.businessImage,
    };
    createBusiness(formSubmitData);
  };

  return (
    <BusinessFormStyled onSubmit={handleSubmit}>
      <div>
        <div className="main-box">
          <label htmlFor="businessName">Nombre de negocio</label>
          <input
            className="main-box_field"
            type="text"
            id="businessName"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.businessName}
            required
          />
        </div>

        <div className="main-box">
          <label htmlFor="category">Categoría</label>
          <input
            className="main-box_field"
            type="text"
            id="category"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.category}
            required
          />
        </div>

        <div className="main-box">
          <label htmlFor="slogan">slogan</label>
          <input
            className="main-box_field"
            type="text"
            id="slogan"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.slogan}
            required
          />
        </div>
        <div className="main-box">
          <label htmlFor="address">Dirección</label>
          <input
            className="main-box_field"
            type="text"
            id="address"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.address}
            required
          />
        </div>
        <div className="main-box">
          <label htmlFor="adhesionDate">Fecha de adhesión</label>
          <input
            className="main-box_field"
            type="text"
            id="adhesionDate"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.adhesionDate}
            required
          />
        </div>
        <div className="main-box">
          <label htmlFor="contactNumber">Contacto</label>
          <input
            className="main-box_field"
            type="text"
            id="contactNumber"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.contactNumber}
            required
          />
        </div>
        <div className="main-box">
          <label htmlFor="businessImage">Imagen</label>
          <input
            className="main-box_field"
            type="text"
            id="businessImage"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.businessImage}
            required
          />
        </div>
      </div>
      <br />
      <Button text="Crear negocio" action={() => {}} isDisabled={!isNotEmpty} />
    </BusinessFormStyled>
  );
};

export default BusinessForm;

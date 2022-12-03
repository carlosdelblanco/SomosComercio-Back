import { useEffect } from "react";
import useBusiness from "../../hooks/useBusiness/useBusiness";
import { useAppSelector } from "../../redux/hooks";
import BusinessCard from "../BusinessCard/BusinessCard";
import BusinessCardListStyled from "./BusinessCardListStyled";

const BusinessCardList = (): JSX.Element => {
  const { businessList: business } = useAppSelector(
    (state) => state.businessReducer
  );
  const { loadAllBusiness } = useBusiness();

  useEffect(() => {
    loadAllBusiness();
  }, [loadAllBusiness]);

  return (
    <BusinessCardListStyled>
      {business.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </BusinessCardListStyled>
  );
};

export default BusinessCardList;

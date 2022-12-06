import axios from "axios";
import { useCallback } from "react";
import {
  createBusinessActionCreator,
  deleteBusinessActionCreator,
  loadAllBusinessActionCreator,
} from "../../redux/features/businessSlice/businessSlice";
import { Business } from "../../redux/features/businessSlice/types";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";

const apiUrl = process.env.REACT_APP_API_URL;

const useBusiness = () => {
  const dispatch = useAppDispatch();

  const loadAllBusiness = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrl}/business/loadAllBusiness`);
      dispatch(loadAllBusinessActionCreator(response.data.business));
    } catch (error: unknown) {
      dispatch(
        openModalActionCreator({
          feedbackMessage: "No hay negocios para mostrar",
          isError: true,
        })
      );
    }
  }, [dispatch]);

  const deleteBusiness = async (businessId: string) => {
    try {
      await axios.delete(`${apiUrl}/business/deleteBusiness/${businessId}`);
      dispatch(deleteBusinessActionCreator(businessId));
      dispatch(
        openModalActionCreator({
          isError: false,
          feedbackMessage: "El negocio ha sido eliminado",
        })
      );
    } catch (error: unknown) {
      dispatch(
        openModalActionCreator({
          isError: true,
          feedbackMessage: "Business not found",
        })
      );
    }
  };

  const createBusiness = async (businessData: Business) => {
    const confirmationMessage = {
      isError: false,
      feedbackMessage: "Negocio añadido a la plataforma",
    };

    try {
      await axios.post(`${apiUrl}/business/create`, businessData);

      dispatch(createBusinessActionCreator(businessData));
      dispatch(openModalActionCreator(confirmationMessage));
    } catch (error: unknown) {
      dispatch(
        openModalActionCreator({
          isError: true,
          feedbackMessage: "Unable to add business",
        })
      );
    }
  };
  return { loadAllBusiness, deleteBusiness, createBusiness };
};

export default useBusiness;

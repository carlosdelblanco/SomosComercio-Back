import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import {
  deleteBusinessActionCreator,
  loadAllBusinessActionCreator,
} from "../../redux/features/businessSlice/businessSlice";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { AxiosResponseBody } from "../types";

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
      await axios.delete(`${apiUrl}/business/deleteBusiness/:businessId`);
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
          feedbackMessage: (error as AxiosError<AxiosResponseBody>).response
            ?.data.error!,
        })
      );
    }
  };

  return { loadAllBusiness, deleteBusiness };
};

export default useBusiness;

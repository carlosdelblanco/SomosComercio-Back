import axios from "axios";
import { useCallback } from "react";
import { loadAllBusinessActionCreator } from "../../redux/features/businessSlice/businessSlice";
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
  return { loadAllBusiness };
};

export default useBusiness;

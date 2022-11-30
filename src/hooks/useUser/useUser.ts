import axios, { AxiosError } from "axios";
import { UserRegisteredData } from "../../data/types";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { AxiosResponseBody } from "../types";

const apiUrl = process.env.REACT_APP_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();

  const registerUser = async (registerData: UserRegisteredData) => {
    try {
      await axios.post(`${apiUrl}users/signup`, registerData);
      dispatch(
        openModalActionCreator({
          isError: false,
          feedbackMessage: "User registered",
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
  return { registerUser };
};

export default useUser;

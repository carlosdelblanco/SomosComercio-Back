export interface ModalState {
  isOpen: boolean;
  feedbackMessage: string;
  isError: boolean;
}

export interface userState {
  modal: ModalState;
  isLoading: boolean;
}

export interface openModalPayload {
  feedbackMessage: string;
  isError: boolean;
}

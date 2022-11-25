export interface ModalState {
  isOpen: boolean;
  feedbackMessage: string;
  isError: boolean;
}

export interface uiState {
  modal: ModalState;
  isLoading: boolean;
}

export interface OpenModalPayload {
  feedbackMessage: string;
  isError: boolean;
}

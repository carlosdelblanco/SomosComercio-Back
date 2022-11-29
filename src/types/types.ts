export interface ModalState {
  isOpen: boolean;
  feedbackMessage: string;
  isError: boolean;
}

export interface UiState {
  modal: ModalState;
  isLoading: boolean;
}

export interface OpenModalPayload {
  feedbackMessage: string;
  isError: boolean;
}

export interface Business {
  businessName: string;
  category: string;
  slogan: string;
  address: string;
  adhesionDate: string;
  contactNumber: string;
  businessImage: string;
}

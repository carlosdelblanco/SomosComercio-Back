export interface Business {
  id: string;
  businessName: string;
  category: string;
  slogan: string;
  address: string;
  adhesionDate: string;
  contactNumber: string;
  businessImage: string;
}

export interface BusinessState {
  businessList: Business[];
}

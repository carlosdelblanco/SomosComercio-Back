export interface Business {
  businessName: string;
  category: string;
  slogan: string;
  address: string;
  adhesionDate: string;
  contactNumber: string;
  businessImage: string;
}

export type Businesses = Business[];

export interface BusinessState {
  businessList: Business[];
}

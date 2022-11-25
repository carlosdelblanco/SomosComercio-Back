export interface UserCredentials {
  username: string;
  passsword: string;
}

export interface UserRegisteredData extends UserCredentials {
  email: string;
}

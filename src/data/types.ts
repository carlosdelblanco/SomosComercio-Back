export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserRegisteredData extends UserCredentials {
  email: string;
}

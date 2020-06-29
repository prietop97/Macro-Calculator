export interface IUser {
  username: string;
  email: string;
  registrationCompleted: boolean;
  token: string;
}

export interface IUserFormValues {
  email: string;
  password: string;
  username: string;
}

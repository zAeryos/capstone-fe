export interface IUserDTO {


}

export interface UserRegister {
  name: string;
  surname: string;
  username: string;
  password: string;
  phoneNumber: string;
  birthday: Date;
  email: string;
}

export interface UserLogin {
  username: string
  password: string
}

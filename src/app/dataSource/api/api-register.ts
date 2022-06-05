import { AuthFunctions } from './../auth-functions';
export class ApiRegister implements  AuthFunctions {

  RemeberMe() {
   console.log('Api remember me')
  }

  ForgetPassword() {
    console.log('Api forget password')
  }

  Login() {
    console.log('Api Register')
  };

}

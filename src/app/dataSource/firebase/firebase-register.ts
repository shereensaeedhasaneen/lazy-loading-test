import { AuthFunctions } from './../auth-functions';
export class FirebaseRegister implements AuthFunctions {
  Login(): void {
    console.log('Firebase Register')
  }
  RemeberMe(): void {
    console.log('Firebase remember me')
  }
  ForgetPassword(): void {
    console.log('firebase password')
  }
}

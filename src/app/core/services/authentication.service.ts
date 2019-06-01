import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  async login(username: string, password: string, successCallBack: (cogUser: any) => void, failCallBack: (errMsg: string) => void) {
    try {
      const cogUser = await Auth.signIn(username, password);
      successCallBack(cogUser);
    } catch (err) {
      let msg: string;
      if (err.code === 'UserNotConfirmedException') {
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
      } else if (err.code === 'PasswordResetRequiredException') {
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
      } else if (err.code === 'NotAuthorizedException') {
          msg = 'The password is not correctly';
      } else if (err.code === 'UserNotFoundException') {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
      } else {
      }
      failCallBack(`${err.code}  ${msg}`);
    }
  }
}

import React from "react";
import SignIn from "../../components/sign_in/sign_in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import './sign_in_and_sign_up.scss';

const SignInAndSignUpPage = () => (
          <div className="sign_in_and_sign_up">
           <SignIn />
           <SignUp />
          </div>

) 


export default SignInAndSignUpPage;
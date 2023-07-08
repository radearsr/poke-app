import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/form-input/form-input.component";
import {
  signInWithGoogleRedirect,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
  displayName: ""
};

const SignUp = () => {
  const signInWithGoogleHandler = async () => await signInWithGoogleRedirect();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword, displayName } = formFields;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetFormRegister = () => {
    setFormFields(defaultFormFields);
  }

  const submitFormHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("Password And Confirm Passowrd Does't Match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormRegister();
      alert("Account Registration Successfuly");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already to use");
      }
      console.log(error);
    }
  }

  return (
    <div className="p-3 flex flex-col justify-center">
      <h1 className="text-center text-cs-orange font-bold text-3xl mb-3">Register Pokemon App</h1>
      <div className="w-1/3 bg-cs-dark-warm border-4 border-cs-orange p-3 mx-auto rounded">
        <form action="" onSubmit={submitFormHandler}>
          <FormInput
            onChange={changeHandler}
            value={displayName}
            label="Display Name"
            name="displayName"
            type="text"
            required
          />
          <FormInput
            onChange={changeHandler}
            value={email}
            label="Email"
            name="email"
            type="email"
            required
          />
          <FormInput
            onChange={changeHandler}
            value={password}
            label="Password"
            name="password"
            type="password"
            required
          />
          <FormInput
            onChange={changeHandler}
            value={confirmPassword}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            required
          />
          <button className="bg-cs-red block mx-auto rounded mt-4 mb-5 text-white p-2">Register</button>
        </form>
        <button className="w-1/2 p-2 bg-cs-black block mx-auto rounded text-cs-yellow" onClick={signInWithGoogleHandler}>Continue With Google</button>
        <p className="text-center">Have an account yet?</p>
        <Link className="block mx-auto text-center" to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;

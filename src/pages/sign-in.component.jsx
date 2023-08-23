import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormInput from "../components/form-input/form-input.component";
import {
  signInWithGoogleRedirect,
  signInUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../features/users/user.selector";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const signInWithGoogleHandler = async () => await signInWithGoogleRedirect();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const signInFormHandler = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Email Does't Exists");
      }
      console.log(error);
    }
  }
 
  const navigate = useNavigate()
  const currentUser = useSelector(selectCurrentUser);

  if (currentUser) {
    return navigate("/", { replace: true });
  }

  return (
    <div className="p-3 flex flex-col justify-center">
      <h1 className="text-center text-cs-orange font-bold text-3xl mb-3">Sign In Pokemon App</h1>
      <div className="w-1/3 bg-cs-dark-warm border-4 border-cs-orange p-3 mx-auto rounded">
        <form action="" onSubmit={signInFormHandler}>
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
          <button className="bg-cs-red block mx-auto rounded mt-4 mb-5 text-white p-2">Sign In</button>
        </form>
        <button className="w-1/2 p-2 bg-cs-black block mx-auto rounded text-cs-yellow" onClick={signInWithGoogleHandler}>Continue With Google</button>
        <p className="text-center">Dont have an account yet?</p>
        <Link className="block mx-auto text-center" to="/sign-up">Register</Link>
      </div>
    </div>
  );
};

export default SignIn;

import { useContext, useState } from "react";
import { UserContext } from "../context/users.context";
import FormInput from "../components/form-input/form-input.component";
import {
  signInWithGoogleRedirect,
} from "../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const Authentication = () => {
  const signInWithGoogleHandler = async () => await signInWithGoogleRedirect();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate()
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return navigate("/", { replace: true });
  }

  return (
    <div className="p-3 flex flex-col justify-center">
      <h1 className="text-center text-cs-orange font-bold text-3xl mb-3">Sign Up / Sign In</h1>
      <div className="w-1/3 bg-cs-dark-warm border-4 border-cs-orange p-3 mx-auto rounded"> 
        <button className="w-1/2 p-2 bg-cs-black block mx-auto rounded text-cs-yellow" onClick={signInWithGoogleHandler}>Continue With Google</button>
      </div>
    </div>
  );
};

export default Authentication;

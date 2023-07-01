import FormInput from "../components/form-input/form-input.component";
import {
  signInWithGoogleRedirect,
} from "../utils/firebase/firebase.utils";

const Authentication = () => {
  const signInWithGoogleHandler = async () => await signInWithGoogleRedirect();

  return (
    <div className="p-3 flex flex-col justify-between">
      <h1 className="text-center font-bold text-3xl mb-3">Sign Up / Sign In</h1>
      <div className="w-1/3 bg-white shadow-md p-3 mx-auto rounded">
        <form action="">
          <FormInput label="Email" type="email" required />
          <FormInput label="Password" type="password" required />
          <button>Submit</button>
        </form>
        <button onClick={signInWithGoogleHandler}>Continue With Google</button>
      </div>
    </div>
  );
};

export default Authentication;

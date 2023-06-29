const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label htmlFor="" className="block font-bold mb-2">{label}</label>
      <input {...otherProps} className="block border-2 border-solid rounded p-2 w-full" />
    </div>
  );
};

export default FormInput
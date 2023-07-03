const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="mt-2">
      <label htmlFor="" className="block text-cs-black font-bold mb-1">{label}</label>
      <input {...otherProps} className="block border-2 border-cs-orange focus:outline-0 focus:border-cs-black bg-cs-warm rounded p-2 w-full" />
    </div>
  );
};

export default FormInput;

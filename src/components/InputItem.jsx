function InputItem({ label, value, onChange, name, id, type }) {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder=" "
        className="block w-full h-12 px-4 text-gray-900 transition-all bg-transparent border-2 border-silky-white appearance-none rounded-xl focus:outline-none focus:ring-0 focus:border-light-beige peer placeholder-transparent"
        onChange={onChange}
        value={value}
      />
      <label
        htmlFor={name}
        className="absolute text-gray-400 duration-200 transform -translate-y-1/2 top-1/2 z-10 origin-left left-3 bg-white px-1.5 pointer-events-none text-sm font-medium
        peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400
        peer-focus:top-0 peer-focus:scale-85 peer-focus:text-light-beige
        peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:scale-85 peer-[:not(:placeholder-shown)]:text-gray-500"
      >
        {label}
      </label>
    </>
  );
}

export default InputItem;

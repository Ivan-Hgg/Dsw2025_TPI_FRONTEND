function Input({ label, error = '', ...restProps }) {
  return (
    <div
      className='
        flex
        flex-col
        h-20
      '
    >
      <label className="text-sm md:text-md">{label}</label>
      <input className={ `text-sm md:text-md ${error && 'border-red-400'}` } { ...restProps }/>
      {error && <p className="text-red-500 text-xs sm:text-xs">{error}</p>}
    </div>
  );
};

export default Input;


function Select({label, name, id, children, error, ...props}){

    return(
        <div className="
        flex
        flex-col
        h-20
        ">
            <label className="text-sm md:text-md">{label}</label>
            <select name={name} id={id} className={`text-sm md:text-md ${error && 'border-red-400'}`}
                {...props}>
                {children}
            </select>
            {error && <p className="text-red-500 text-xs sm:text-xs">{error}</p>}
        </div>
    );

}

export default Select;
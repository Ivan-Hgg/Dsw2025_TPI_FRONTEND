import RegisterForm from "../components/RegisterForm";

function RegisterPage(){

    return(
        <div className='
            bg-neutral-100
            w-screen
            h-screen
            flex
            flex-col
            justify-center
            sm:items-center
        '>
            <RegisterForm />
        </div>
    );
}

export default RegisterPage;
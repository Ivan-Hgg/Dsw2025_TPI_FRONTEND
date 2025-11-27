import { useForm } from "react-hook-form";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";

function RegisterForm(){
    const{register, handleSubmit, formState:{errors}}= useForm();

    const onValid= ()=>{
        console.log('registrado');
    }
    const navigate = useNavigate();
    

    return(
        <form onSubmit={handleSubmit(onValid)}
        className="flex
        flex-col
        gap-15
        bg-white
        p-10
        sm:w-md
        sm:gap-4
        sm:rounded-lg
        sm:shadow-lg "
        >
            <Input label={'Usuario'} {...register('username', {required: 'Nombre de usuario requerido',
                minLength:{value:3, message:'minimo 3 caracteres'},
                maxLength:{value:50, messahe:'maximo 50 caracteres'},
                pattern:{value:/^[a-zA-Z0-9._-]+$/, message:'Nombre de usuario invalido: Solo letras, números, puntos, guiones bajos y guiones'}
            })} error={errors.username?.message}/>

            <Input label={'Nombre'} {...register('name', {required: 'Nombre requerido',
                minLength:{value:3, message:'minimo 3 caracteres'},
                maxLength:{value:50, messahe:'maximo 50 caracteres'},
            })} error={errors.name?.message} />
            
            <Input label={'Email'} {...register('email', {required: 'Email real requerido',
                minLength:{value:5, message:'minimo 5 caracteres'},
                maxLength:{value:254, messahe:'maximo 254 caracteres'},
                pattern:{value: /^[a-zA-Z0-9.!#$%&'+-/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/, message: 'Direccion de Email invalida'}
            })} error={errors.email?.message} />

            <Input label={'Telefono'} {...register('tel', {required: 'Teefono requerido',
                minLength:{value:7, message:'minimo 7 caracteres'},
                maxLength:{value:15, messahe:'maximo 15 caracteres'},
                pattern:{value: /^\d+$/, message: 'Telefono solo puede contener dígitos'}
            })} error={errors.tel?.message} />

            <Input label={'Rol'} {...register('role', {required: 'Rol requerida',
            })} error={errors.role?.message} />

            <Input label={'Contraseña'} {...register('password', {required: 'Contraseña requerida',
            })} error={errors.password?.message} />
            <Input label={'Confirmar contraseña'} {...register('confirmpw', {required: 'Contraseña requerida',
            })} error={errors.confirmpw?.message} />

            <Button type='submit'>Registrar Usuario</Button>
            <Button variant='secondary' onClick={() => navigate('/login')}>Iniciar Sesion</Button>

                
            

        </form>
    );
}

export default RegisterForm;
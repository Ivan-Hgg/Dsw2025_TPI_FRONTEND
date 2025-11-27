import { useForm } from "react-hook-form";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";
import Select from "../../shared/components/Select";

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
        justify-center
        gap-1
        bg-white
        p-10
        h-screen
        sm:w-md
        sm:p-8
        sm:gap-2
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

            <Select label={'Rol'} name={"role"} id={"roles-select"} {...register('role', {required: 'Rol Requerido'})}
            error={errors.role?.message}
            >
                <option value=""></option>
                <option value="CLIENTE">CLIENTE</option>
                <option value="ADMINISTRADOR">ADMINISTRADOR</option>
            </Select>

            <Input label={'Contraseña'} {...register('password', {required: 'Contraseña requerida',
            })} error={errors.password?.message} />
            <Input label={'Confirmar contraseña'} {...register('confirmpw', {required: 'Contraseña requerida',
            })} error={errors.confirmpw?.message} />

            <Button type='submit' className='text-sm md:text-md'>Registrar Usuario</Button>
            <Button variant='secondary' className='text-sm md:text-md' onClick={() => navigate('/login')}>Iniciar Sesion</Button>

                
            

        </form>
    );
}

export default RegisterForm;
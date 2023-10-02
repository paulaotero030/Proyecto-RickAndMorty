 const validation = (userData)=>{
    const errors = {};


    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = ' el email ingresado es invalido';
    }
    if(!userData.email){
        errors.email = 'porfavor ingrese su email';
    }
    if(userData.email.length > 35){
        errors.email= 'el email no debe superar los 35 caracteres';
    }
 
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'la contraseña debe contener al menos un número';
    }
    if(userData.password.length > 6 || userData.password.length > 10){
        errors.password = 'la contraseña debe contener entre 6 y 10 caracteres';
    }

    return errors;
}

export default validation;
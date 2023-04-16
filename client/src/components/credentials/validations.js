const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,10}$/
export function validation(props){

    let errors ={};

        if(!props.username){
        errors.username = 'No debe estar vacio';
        }else if (!regexEmail.test(props.username)) {
            errors.username = 'Debe ser un usuario valido';
        }else if(props.username.length > 35){
            errors.username = 'Debe ser una contraseña valida';
        }



      if (props.password.length >35) {
        errors.password = 'Debe ser una contraseña valida';
      }else if(props.password.length <6){
        errors.password = 'Debe tener al menos 6 caracteres'
      }else if(!regexPassword.test(props.password)){
        errors.password = 'Debe tener al menos un numero'
      }
    
      return errors;

}
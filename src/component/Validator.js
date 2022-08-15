class Validator {

   onScreenValidations(target) {
      let validation = {
         result: true,
         errorMessage: ''
      }

      switch (target.type) {
         case 'text':
            if (target.name === 'email') {
               const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

               if (!emailRegex.test(target.value)) {
                  validation.result = false;
                  validation.errorMessage = 'Please enter a valid email address';
               }
            }
            break;

         case 'password':
            if (target.name === 'password') {
               const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
               
               if (!passwordRegex.test(target.value)) {
                  validation.result = false;
                  validation.errorMessage = 'Please enter a valid password';
               }
            }
            else if (target.name === 'confirmPassword') {
               if (target.value !== target.matched) {
                  validation.result = false;
                  validation.errorMessage = 'Password do not match.';
               }
            }
            break;
         default:
            return validation;
      }

      return validation;
   }
}

export default Validator;
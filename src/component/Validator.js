class Validator {
   validatePassword(password, confirmPassword) {
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
      return regex.test(password) && password === confirmPassword;
   }
}

export default Validator;
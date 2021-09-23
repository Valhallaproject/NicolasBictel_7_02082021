import axios from "axios";


export const handleLogin = (email, password) => {
   axios({
  method: "post",
  url: 'http://localhost:3000/api/user/login',
  data : {
    email,
    password,
  }
})
}

const ApiUser = {
  handleLogin,
}

export default ApiUser


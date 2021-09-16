import axios from "axios";

const url = 'http://localhost:3000/api/user/'

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

export const getAllUser = async () => {
  await axios.get({url} + 'allUser')
}

const ApiUser = {
  handleLogin,
  getAllUser
}

export default ApiUser


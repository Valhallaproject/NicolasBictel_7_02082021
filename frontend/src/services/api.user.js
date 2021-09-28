import axios from "axios";

export function Role (){
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('accessToken');
  axios.get('http://localhost:3000/api/user/userId',{
            params:{
                id : user} 
        },{
            headers:{
                "Content-Type": 'application/json',
                "Authorization": token
            }
        })
        
}

const ApiUser = {
  Role
}

export default ApiUser
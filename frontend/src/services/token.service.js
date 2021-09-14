
    
    export const getLocalAccessToken = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      return user?.accessToken;
      
    }
  
    export const updateLocalAccessToken =(token) => {
      let user = JSON.parse(localStorage.getItem("user"));
      user.accessToken = token;
      localStorage.setItem("user", JSON.stringify(user));
    }
  
    export const getUser = () => {
      return JSON.parse(localStorage.getItem("user"));
    }
  
    export const setUser = (userId, token) => {
      console.log(JSON.stringify(userId, token));
      localStorage.setItem("user", JSON.stringify(userId, token));
    }
  
    const removeUser = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken")
    }
    const TokenService = {
        getLocalAccessToken,
        updateLocalAccessToken,
        getUser,
        setUser,
        removeUser,
      };
  
  export default TokenService;
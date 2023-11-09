export const getAuthToken = () => {
  return window.sessionStorage.getItem("auth_token");
};

export const setAuthToken = (token) => {
  window.sessionStorage.setItem("auth_token", token);
};

export async function register(data){
    const res = await fetch("api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
    const user = await res.json();
    console.log(user);
    return user;
  }
  

import axios from "axios";

export const readServers = async () => {
    try {
  
      let res = await axios.get('https://unturned-servers.net/api/?object=servers&element=detail&key=3Ti5sNjuGm7OJYZhGKFn68G3WIyZieB5MJ7');
  
      return res.data;
    } catch (e) {
      alert('error' + `${e}`);
    }
  };
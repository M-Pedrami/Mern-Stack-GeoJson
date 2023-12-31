import axios from 'axios';

const getProperties = async () =>{
  try {
    const response = await axios.get("http://localhost:5000/properties")
    return response.data
  } catch (error) {
    console.log("Error from getProperties hook",error)
    throw error
  }
}

const getProperty = async (id) =>{
  try {
    const response = await axios.get(`http://localhost:5000/properties/${id}`)
    return response.data
  } catch (error) {
    console.log("ERROR from getProperty hook", error);
    throw error
  }
}

export   {getProperties, getProperty} ;
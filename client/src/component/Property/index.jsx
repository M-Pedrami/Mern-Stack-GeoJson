import { useParams, useNavigate } from "react-router-dom";
import { getProperty } from "../../utils/getRequests";
import { useEffect, useState } from "react";

export default function index() {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate("/")
  }
  useEffect(() => {
    getProperty(id)
      .then((res) => setProperty(res))
      .catch((err) => {
        console.log("ERROR FROM USEEFFECT PROPERTX", err);
        throw err;
      });
  }, []);
  console.log(property)
  return (
    <div>
      <h1>{property.title}</h1>
      <h2>{property.description}</h2>
      <img src={property.image}/>
      <h3>Owner : {property.owner?.name}</h3>
      <p>Contact Number: {property.owner?.phoneNumber}</p>
      <div className="images">
        {property.images?.map(image=>(
          <img src={image}  />
        ))}
      </div>
      <button onClick={handleClick}>Back</button>

    </div>
  );
}

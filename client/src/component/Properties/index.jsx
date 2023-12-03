import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  {getProperties}  from "../../utils/getRequests";

export default function index() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    getProperties()
      .then((res) => setProperties(res))
      .catch((err) => {
        console.log("ERROR FROM USEEFFECT", err);
        throw err;
      });
  }, []);
  console.log("::::AFTER USEEFFECT",properties)
  return (
    <>
    
    <h1>List of Properties</h1>
    <div className="parentContainer">
      {properties.map((property =>(
        <div className="container">
          <div className="image">
            <img src={property.image} alt={property.name} />
          </div>
          <div className="info">
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Number of Bedrooms : {property.bedrooms}</p>
            <button><Link to={`/${property._id}`}>More</Link></button>
          </div>
        </div>
      )))}
    </div>
    </>
  );
}

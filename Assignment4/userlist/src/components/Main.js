import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Main = () => {
  const [data, setData] = useState([]);
  const userData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(res.data);
  };

  useEffect(() => {
    userData();
  }, []);
  return (
    <div>
        <h4 className="text-center">
            User Info
        </h4>
        <Navbar />
      {data.map((item, i) => {
        return (
            
          <div className="col-lg-12 mb-4 pt-3">
            <div className="card bg-success">
              <p className="text-white px-3">{item.name}</p>
              <ul>
                <li>{item.email}</li>
                <li>{item.website}</li>
                <li>{item.phone}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;

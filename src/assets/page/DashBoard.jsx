import axios from "axios";
import React, { useEffect, useState } from "react";

const DashBoard = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.clerk.com/v1/users", {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_CLERK_SECRET_KEY}`, // Replace with your actual API key
          },
        });
        console.log(res);
       // Update state if needed
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return <div>Dash</div>;
};

export default DashBoard;

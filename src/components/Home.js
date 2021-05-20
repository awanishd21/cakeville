import React, { useState, useEffect } from "react";
import Cake from "./Cake";
import Carousel from "./Carousel";
import axios from "axios";

function Home() {
  let [cakes, setCakes] = useState([]);
  let apiurl = "https://apibyashu.herokuapp.com/api/allcakes";

  useEffect(() => {
    axios({
      url: apiurl,
      method: "get",
    }).then(
      (response) => setCakes(response.data.data),
      (error) => console.log("Error from AllCakes api", error)
    );
  }, []);

  return (
    <>
      <Carousel />
      <div className="ck-card row row-cols-1 row-cols-md-3 card-deck mt-5">
        {cakes?.length > 0 &&
          cakes.map((each, index) => {
            return <Cake details={each} key={index} />;
          })}
      </div>
    </>
  );
}

export default Home;

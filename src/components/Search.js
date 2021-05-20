import axios from "axios";
import Cake from "./Cake";
import { useEffect, useState } from "react";
import queryString from "query-string";
import Loader from "./Loader";
function Search(props) {
  const parsed = queryString.parse(props.location.search);
  let [cakesearch, setCakes] = useState([]);
  let [isLoading, setLoading] = useState();
  let searchUrl =
    "https://apibyashu.herokuapp.com/api/searchcakes?q=" + parsed.q;
  useEffect(() => {
    setLoading(true);
    axios({
      url: searchUrl,
      method: "get",
    }).then(
      (response) => {
        console.log("response from search api", response.data);
        setLoading(false);
        setCakes(response.data.data);
      },
      (error) => {
        console.log("error from search api", error);
      }
    );
  }, [parsed.q]);

  return (
    <div className="searchcakes mt-5">
      {!isLoading ? (
        <div className="row">
          {cakesearch?.length > 0 ? (
            cakesearch.map((each, index) => {
              return <Cake details={each} key={index} />;
            })
          ) : (
            <div className="alert alert-danger"> No result found</div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
export default Search;

import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

const UsePaginatedFetch = (url, pageSize) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await (await axios.get(url)).data
    const paginatedData = _.chunk(data, pageSize);
    setData(paginatedData);
    setLoading(false);
  };
  useEffect(()=>{
    getData()
  },[]);
  return [loading,data] 
};

export default UsePaginatedFetch;

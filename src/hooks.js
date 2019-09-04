import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);  

  const formatData = (data) => {
    const PHOTOS_AMOUNT = 20;
    let newData = [];
    for (let i = 0; i < PHOTOS_AMOUNT; i++) {
      newData.push(data[i]);
    }
    return newData;
  };

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json(); 

    setData(formatData(json));
    setLoading(false);
  }  
  
  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
}

export { useFetch };
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (fromDate, toDate) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = new URL("http://localhost:3000/recall");
        if (fromDate) url.searchParams.append("from_ts", fromDate);
        if (toDate) url.searchParams.append("to_ts", toDate);

        const response = await axios.get(url.toString());
        setData(response.data);
      } catch (error) {
        setError("Error fetching data: " + error);
      }
    };

    fetchData();
  }, [fromDate, toDate]);

  return { data, error };
};

export default useFetchData;

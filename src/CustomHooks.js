import { useEffect, useState } from "react";

const useServiceDetails = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch('generated.json')
      .then(res => res.json())
      .then(data => {
        setService(data)
        console.log(data)
      });
  }, []);
  return [service, setService];
}

export default useServiceDetails;
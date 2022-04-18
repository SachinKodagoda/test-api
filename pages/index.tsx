import { Offer } from "@prisma/client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [data, setData] = useState<Offer[]>([]);

  const getOfferData = () => {
    fetch("api/offers")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getOfferData();
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>offerId</th>
            <th>status</th>
            <th>type</th>
            <th>desc</th>
            <th>startDate</th>
            <th>endDate</th>
            <th>offerCode</th>
            <th>createDate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={`test-${i + 1}`}>
              <td>{item.offerId}</td>
              <td>{item.status}</td>
              <td>{item.type}</td>
              <td>{item.desc}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.offerCode}</td>
              <td>{item.createDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

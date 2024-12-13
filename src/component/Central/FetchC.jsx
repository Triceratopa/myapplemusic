import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

const FetchC = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [audio, setAudio] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=sleep token`
        );
        if (res.ok) {
          const result = await res.json();
          setData(result.data);
          setLoad(false);
        } else {
          throw new Error("so sad");
        }
      } catch (err) {
        console.log("sad", err);
        setLoad(false);
      }
    };
    fetchData();
  }, []);
  if (load) {
    return <Spinner animation="border" variant="success" />;
  }

  return (
    <>
      {" "}
      <h3 className="mt-4 ms-4 fs-5 text-white">
        Nuove uscite <i className="bi bi-chevron-right"></i>
      </h3>
      <div className="d-flex flex-nowrap mt-1 ms-4 gap-2">
        {data.length > 0 ? (
          data.slice(2, 7).map((item, index) => (
            <Card style={{ width: "250px", height: "250px" }}>
              <Card.Img variant="top" src={item.album.cover} />
              <Card.Body>
                <Card.Title className="fs-5">{item.title_short}</Card.Title>
                <Card.Text>{item.artist.name}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
      <div className="d-flex flex-nowrap mt-4 ms-4 gap-2">
        {data.length > 0 ? (
          data.slice(7, 12).map((item, index) => (
            <Card style={{ width: "250px", height: "250px" }}>
              <Card.Img variant="top" src={item.album.cover} />
              <Card.Body>
                <Card.Title>{item.title_short}</Card.Title>
                <Card.Text>{item.artist.name}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
};
export default FetchC;

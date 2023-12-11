import Card from "react-bootstrap/Card";

function InfoCard({ countries }) {
  return (
    <>
      {
        countries ? (
          countries.map((country, index) => {
            <Card
              bg={"dark"}
              text={"white"}
              style={{ width: "18rem" }}
              className="mb-2"
              key={index}
            >
              <Card.Header>{country.name}</Card.Header>
              <Card.Body>
                <Card.Title>{country.currencyCodes} </Card.Title>
                <Card.Text>
                  {country.code}
                </Card.Text>
              </Card.Body>
            </Card>;
          })
        ): "Not Found"
      }
    </>
  );
}

export default InfoCard;

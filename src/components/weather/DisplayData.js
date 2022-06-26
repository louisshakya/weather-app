import { Row, Col, Card } from "antd";

const DisplayData = ({ weatherData }) => {
  const currentDate = new Date();
  return (
    <>
      <Row>
        <Col span={8}>
          <Row style={{ margin: "50px" }}>
            <Col span={9}>
              <img
                src={`http://openweathermap.org/img/wn/${
                  weatherData?.data &&
                  weatherData?.data[0]?.weather?.icon.substring(1)
                }@2x.png`}
                alt=""
              />
            </Col>
            <Col span={15}>
              <p>
                City: <strong>{weatherData?.city_name}</strong>
              </p>
              <p>
                TimeZone: <strong>{weatherData?.timezone}</strong>
              </p>
              <p>
                Weather:{" "}
                <strong>
                  {weatherData?.data &&
                    weatherData?.data[0]?.weather?.description}
                </strong>
              </p>
              <p>
                Wind Speed:{" "}
                <strong>
                  {weatherData?.data && weatherData?.data[0]?.wind_spd}{" "}
                  {"km/hr"}
                </strong>
              </p>
              <p>
                Date: <strong>{currentDate.toLocaleString()}</strong>
              </p>
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          {weatherData?.data &&
            weatherData?.data?.length &&
            weatherData?.data.map((currentData, index) => {
              if (index !== 0) {
                return (
                  <div
                    style={{ margin: 10, padding: 10 }}
                    key={currentData?.datetime}
                  >
                    <Card style={{ textAlign: "center" }}>
                      <img
                        src={`http://openweathermap.org/img/wn/${currentData?.weather?.icon.substring(
                          1
                        )}@2x.png`}
                        alt=""
                      />
                      <p>
                        Date: <strong>{currentData?.datetime}</strong>
                      </p>
                      <p>
                        Weather:{" "}
                        <strong>{currentData?.weather?.description}</strong>
                      </p>
                      <p>
                        Wind Speed:{" "}
                        <strong>
                          {currentData?.wind_spd} {"km/hr"}
                        </strong>
                      </p>
                    </Card>
                  </div>
                );
              }
            })}
        </Col>
      </Row>
    </>
  );
};

export default DisplayData;

import { Row, Col, Card } from "antd";
import { ICON_MAP } from "./iconMap";
import FahrenToCel from "fahrenheit-to-celsius";

const dayFormatter = new Intl.DateTimeFormat(undefined, { weekday: "long" });
const hourFormatter = new Intl.DateTimeFormat(undefined, { hour: "numeric" });

const getIconUrl = (iconCode) => {
  return `icons/${ICON_MAP.get(iconCode)}.svg`;
};

const DisplayData = ({ weatherData, address, checked }) => {
  const { current, daily, hourly } = weatherData;

  return (
    <>
      <Col>
        <Row style={{ margin: "50px" }}>
          <Col
            span={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "80px", height: "80px" }}
              src={getIconUrl(current?.iconCode)}
              alt={getIconUrl(current?.iconCode)}
            />
            <span style={{ fontSize: "3rem" }}>
              {current?.currentTemp}&deg;
            </span>
          </Col>
          <Col span={12} style={{ fontSize: "1rem" }}>
            <p>
              City: <strong>{address?.city}</strong>
            </p>
            <p>
              High:{" "}
              {!checked ? (
                <strong>
                  {current?.highTemp}&deg;{"F"}
                </strong>
              ) : (
                <strong>
                  {FahrenToCel(current?.highTemp).toPrecision(3)}&deg;{"C"}
                </strong>
              )}
            </p>
            <p>
              Low: <strong>{current?.lowTemp}&deg;</strong>
            </p>
            <p>
              Wind Speed:{" "}
              <strong>
                {current?.windSpeed} {"mph"}
              </strong>
            </p>
            <p>
              Precipitaion: <strong>{current?.precip}</strong>
            </p>
          </Col>
        </Row>
      </Col>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {daily &&
          daily?.map((day, index) => {
            if (index !== 0) {
              return (
                <div style={{ margin: 10, padding: 10 }} key={index}>
                  <Card style={{ textAlign: "center" }}>
                    <img
                      src={getIconUrl(day?.iconCode)}
                      alt={getIconUrl(day?.iconCode)}
                    />
                    <p>
                      <strong>{dayFormatter.format(day?.timestamp)}</strong>
                    </p>
                    <p>
                      {!checked ? (
                        <strong>
                          {day?.maxtemp}&deg;{"F"}
                        </strong>
                      ) : (
                        <strong>
                          {FahrenToCel(day?.maxtemp).toPrecision(3)}&deg;{"C"}
                        </strong>
                      )}
                    </p>
                  </Card>
                </div>
              );
            }
          })}
      </Col>
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {hourly &&
          hourly?.map((hour, index) => {
            if (index !== 0) {
              return (
                <Card
                  key={index}
                  style={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div>
                      <p>
                        <strong>{dayFormatter.format(hour.timestamp)}</strong>
                      </p>

                      <p>
                        <strong>{hourFormatter.format(hour?.timestamp)}</strong>
                      </p>
                    </div>
                    <img
                      src={getIconUrl(hour?.iconCode)}
                      alt={""}
                      width={100}
                    />
                    <div>
                      <p>
                        <strong>Temp</strong>
                      </p>

                      <p>
                        {!checked ? (
                          <strong>
                            {hour?.temp}&deg;{"F"}
                          </strong>
                        ) : (
                          <strong>
                            {FahrenToCel(hour?.temp).toPrecision(3)}&deg;{"C"}
                          </strong>
                        )}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Wind</strong>
                      </p>

                      <p>
                        <strong>{hour?.windSpeed} mph</strong>
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Precip</strong>
                      </p>

                      <p>
                        <strong>{hour?.precip}</strong>
                      </p>
                    </div>
                  </div>
                </Card>
              );
            }
          })}
      </Col>
    </>
  );
};

export default DisplayData;

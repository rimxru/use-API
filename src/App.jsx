import React, { useEffect, useState } from "react";
import { Card, Image, Row, Col, Button, Tag } from "antd";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((apiData) => setData(apiData.products));
  }, []);
  const cardColors = [
    "linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)",
    "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    "linear-gradient(135deg, #f953c6 0%, #b91d73 100%)",
    "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
  ];
  return (
    <div
      style={{
        background: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
        minHeight: "100vh",
        fontFamily: "Segoe UI,Roboto,Arial,sans-serif",
        paddingBottom: 40,
      }}
    >
      <header
        style={{
          background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
          padding: "28px 0 18px 0",
          marginBottom: 36,
          boxShadow: "0 2px 16px rgba(221,36,118,0.10)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            color: "#fff",
            letterSpacing: 2,
            margin: 0,
            fontWeight: 800,
            textShadow: "0 4px 16px rgba(0,0,0,0.10)",
          }}
        >
          API Data
        </h1>
      </header>
      <Row style={{ maxWidth: 1400, margin: "0 auto", gap: "36px 0" }}>
        {data.map((item, index) => {
          const cardBg = cardColors[index % cardColors.length];
          return (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 36,
              }}
            >
              <Card
                title={
                  <span
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: 1,
                    }}
                  >
                    {item.title}
                  </span>
                }
                style={{
                  width: "100%",
                  maxWidth: 350,
                  borderRadius: 26,
                  boxShadow: "0 10px 36px rgba(0,0,0,0.13)",
                  background: cardBg,
                  transition: "box-shadow 0.2s, transform 0.2s",
                  border: "none",
                  overflow: "hidden",
                  position: "relative",
                }}
                bodyStyle={{
                  padding: 22,
                  background: "rgba(255,255,255,0.85)",
                  borderRadius: 18,
                }}
                hoverable
              >
                <Image
                  src={item.images[0]}
                  style={{
                    borderRadius: 18,
                    objectFit: "cover",
                    height: 210,
                    width: "100%",
                    marginBottom: 18,
                    boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
                  }}
                />
                <div style={{ marginBottom: 10 }}>
                  {item.category && (
                    <Tag
                      color="magenta"
                      style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}
                    >
                      {item.category.toUpperCase()}
                    </Tag>
                  )}
                </div>
                <p
                  style={{
                    margin: "0 0 14px 0",
                    color: "#333",
                    fontSize: "1.08rem",
                    minHeight: 60,
                  }}
                >
                  {item.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      color: "#ff512f",
                      fontWeight: 800,
                      fontSize: "1.18rem",
                      letterSpacing: 1,
                    }}
                  >
                    ฿ {item.price}
                  </span>
                  <Button
                    type="primary"
                    style={{
                      background:
                        "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
                      borderRadius: 10,
                      fontWeight: 700,
                      boxShadow: "0 2px 12px rgba(221,36,118,0.13)",
                      border: "none",
                      fontSize: 15,
                    }}
                  >
                    ดูรายละเอียด
                  </Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
      <footer
        style={{
          textAlign: "center",
          color: "#fff",
          marginTop: 56,
          fontSize: 18,
          fontWeight: 500,
          textShadow: "0 2px 8px rgba(0,0,0,0.10)",
        }}
      >
        © {new Date().getFullYear()} Pokpong
      </footer>
    </div>
  );
}

export default App;

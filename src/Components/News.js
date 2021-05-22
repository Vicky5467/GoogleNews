import React, { Component } from "react";
import { Card, Col, Row } from "antd";

class News extends Component {
  state = {
    data: "",
  };

  componentDidMount() {
    fetch(
      "https://google-news.p.rapidapi.com/v1/top_headlines?lang=en&country=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "8a582b4f53msh2b9f9543a7a7544p1ec0d8jsnf22e0eb2cd67",
          "x-rapidapi-host": "google-news.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data,
        });
      })
      .then();
  }
  render() {
    return (
      <div>
        <Row>
          <Col offset={6}></Col>
          <h1 style={{ margin: "5px" }}>Headlines</h1>
        </Row>
        {this.state.data &&
          this.state.data.articles.map((item) => (
            <Row>
              <Col span={12} offset={6}>
                <Card
                  title={item.title}
                  extra={<a href={item.link}>More</a>}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {item.sub_articles.map((articles) => {
                    return (
                      <ul>
                        {
                          <li style={{ fontSize: "bold" }}>
                            {articles.title}
                            <p style={{ color: "#9B9B9C" }}>
                              <span>{articles.publisher}</span>
                              <span style={{ marginLeft: "15px" }}>
                                .{item.published.slice(0, 17)}
                              </span>
                            </p>
                          </li>
                        }
                      </ul>
                    );
                  })}
                </Card>
              </Col>
            </Row>
          ))}
      </div>
    );
  }
}

export default News;

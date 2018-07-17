import React from "react";
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import Card from "../components/Card";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      startYear: "",
      endYear: "",
      // search: [],
      results: [],
      error: "",
      articles: [],
      // key
      // image: "",
      // headline: ""
    };
  }
  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // alert(`Topic: ${this.state.topic} StartYear: ${this.state.startYear} EndYear: ${this.state.endYear}`)
    API.getArticle(this.state.topic, this.state.startYear, this.state.endYear)

      // API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        // let articleInfo = [];
        // let count = 0;
        this.setState({ results: res.data.response.docs, error: "" });
        // console.log(res.data.response.docs)
        // this.state.results.map(data => {
        //   // this.setState({ articles:})
        //   articleInfo.push({
        //     headline: data.headline.main,
        //     summary: data.snippet,
        //     imgUrl: data.multimedia[0].url,
        //     id: count++
        //   })
        // })
        //     this.setState({ articles: articleInfo })
        // console.log(this.state.image)
        console.log(this.state.results)
      })
      .catch(err => this.setState({ error: err.message }));
      // console.log(this.state.results)
  };

  render() {
    // let image 
    // console.log(image)

    return (

      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                topic={this.state.topic}
                startYear={this.state.startYear}
                endYear={this.state.endYear}
              />
            </Col>
          </Row>
          <Row>
            {this.state.results.map((article) => (
              <Card
                // image={article.multimedia[0].url}
                headline={article.headline.main}
                pubDate={article.pub_date}
                link={article.web_url}
                // key={i}
              />
            ))}

            {/* <Col>
              <Card>
                image={this.results.response.docs[0]}
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
    )
  }
}


export default About;

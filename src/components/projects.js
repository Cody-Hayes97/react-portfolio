import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
              }}
            >
              Friend Zone/ Friend Finder App
            </CardTitle>
            <CardText>
              The goal of this project was to create a front end application
              similar to the Tinder app, with the main difference being that
              this app is tailored towards strictly platonic relationships
            </CardText>
            <CardActions border>
              <a href="https://github.com/friends-finder/FE">
                <Button colored>GitHub</Button>
              </a>

              <a href="https://cdn-b-east.streamable.com/video/mp4/eb1t9.mp4?token=xD5MDHzEYJJjwT0qhZL6nw&expires=1569806160">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
              }}
            >
              NASA Photo of the Day
            </CardTitle>
            <CardText>
              This is a simple single page application using reactstrap that
              draws data from the NASA Apod API and renders a unique layout
              every day.
            </CardText>
            <CardActions border>
              <a href="https://github.com/Cody-Hayes97/nasa-photo-of-the-day">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
              }}
            >
              Song Lyric Finder
            </CardTitle>
            <CardText>
              This is a little App i built that will search through a lyric API
              and give back data via 2 search bars, an atist search filter and a
              song title search filter.
            </CardText>
            <CardActions border>
              <a href="https://react-redux-app-git-cody-hayes.codyhayes97.now.sh">
                <Button colored>Deployed Site</Button>
              </a>

              <a href="https://github.com/Cody-Hayes97/React-Redux-App">
                <Button colored>Github</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png) center / cover"
              }}
            >
              GitHub User Site
            </CardTitle>
            <CardText>
              This is a multi tab website using the GitHub API to render unique
              User Cards based on the users friends list
            </CardText>
            <CardActions border>
              <a href="https://github.com/Cody-Hayes97/github-usercard">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is UI</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is Backend</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>HTML,CSS,Javascript</Tab>
          <Tab>User Interface</Tab>
          <Tab>Back-end</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

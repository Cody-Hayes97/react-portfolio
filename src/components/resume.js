import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import cody from "./circle-cropped.png";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={cody} alt="avatar" style={{ height: "200px" }} />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Cody Hayes</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p></p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1559 Polaris ln. Beaumont, California 92223</p>
            <h5>Phone</h5>
            <p>(909) 242-9723</p>
            <h5>Email</h5>
            <p>hayescody97@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2011}
              endYear={2015}
              schoolName="Yucaipa High School"
              schoolDescription=""
            />

            <Education
              startYear={2019}
              endYear={2021}
              schoolName="Lambda School"
              schoolDescription="I am currently enrolled in Lambda School, Lambda is a comprehensive Coding school that teaches every aspect of Web Dev, from Front-End to Back-End."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              jobName="Tech-Oriented"
              jobDescription="3+ years experience in web based applications such as Lightworks, CakeWalk, Construct 2, and AutoDesk Maya. As well as experience in building/fixing computers and internet systems"
            />

            <Experience
              jobName="Logical Thinker"
              jobDescription="2 years experience in basic web-based programming languages such as HTML/CSS and Javascript.
              Well-versed in OOP and Functional programming"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={80} />
            <Skills skill="HTML/CSS" progress={100} />
            <Skills skill="NodeJS" progress={0} />
            <Skills skill="React" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

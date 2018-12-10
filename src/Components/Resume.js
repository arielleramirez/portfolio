import React, { Component, Fragment } from "react";
import background from "../images/background.png";
import me from "../images/me.png";

class Resume extends Component {
  render() {
    return (
      <Fragment>
        <div className="resumebackgroundimg">
          <div class="flex-container">
            <span>
              <img className="profile" src={me} />
              <article style={{ padding: 15 }}>
                <h1>Arielle Ramirez</h1>
                <p>Email: ariellenramirez@gmail.com</p>
                <p>Phone: 603-721-6388</p>
                <p>Linkedin:</p>
                <p>Git:</p>
              </article>
            </span>
            <span>
              <nav className="vline"> </nav>
            </span>
            <span>
              <article>
                <h3>EDUCATION</h3>
                <h4>Flatiron School - New York, NY - 2018</h4>
                <p style={{ marginBottom: 15 }}>
                  Full Stack Web Development, Ruby on Rails and JavaScript
                  Immersive Program
                </p>
                <h4> General Assembly - Boston, MA - 2018</h4>
                <p style={{ marginBottom: 15 }}>
                  Web Development, Javascript, HTML and CSS
                </p>
                <h4>Worcester State University - Worcester, MA - 2014</h4>
                <p style={{ marginBottom: 15 }}>
                  {" "}
                  Bachelor of Science in Biology with a minor in Chemistry
                </p>
                <h3>TECHNICAL SKILLS</h3>
                <p>
                  Ruby, Rails, SQL, JavaScript, ES6, React, Redux, Postgres,
                  HTML and CSS
                </p>
              </article>
            </span>
            <span className="line">
              <nav className="vline"> </nav>
            </span>
            <span>
              <article>
                <h3>PROFESSIONAL EXPERIENCE </h3>
                <h4>ERT, Boston, MA</h4>
                <h4> Customer Service Representative, July 2016 - May 2018</h4>
                <p>
                  + Learned current technical information, standard procedures
                  and best practices for deploying ERT products and services
                  monthly.
                </p>
                <p>
                  {" "}
                  + Took calls from over 50 countries around the world to
                  troubleshoot customer issues.
                </p>
                <p>
                  + Collaborated with clinical sites to ensure accessibility to
                  our technology.
                </p>
                <p>
                  + Provided mentoring to new hires across four business lines.
                </p>
                <p>
                  Tab Products, Boston, MA Account Manager, July 2015 - June
                  2016
                </p>
                <p>
                  + Built and maintained close relationships with customers;
                  proactively communicated to gain renewal and reorders.
                </p>
                <p>
                  + Coordinated with outside sales teams, IT and manufacturing
                  to expand product offerings.
                </p>
                <p>
                  + Updated and maintained SalesForce; prepared sales proposals
                  and product information for customers.
                </p>
                <p>
                  + Led over 500 monthly client engagements in three
                  territories.
                </p>
                <p style={{ marginBottom: 15 }}>
                  + Generated and maintained monthly and quarterly reports and
                  initiatives; achieved monthly and quarterly quota.
                </p>

                <h4>Tab Products, Boston, MA </h4>
                <h4>Account Manager, July 2015 - June 2016</h4>
                <p>
                  + Built and maintained close relationships with customers;
                  proactively communicated to gain renewal and reorders.
                </p>
                <p>
                  + Coordinated with outside sales teams, IT and manufacturing
                  to expand product offerings.
                </p>
                <p>
                  + Updated and maintained SalesForce; prepared sales proposals
                  and product information for customers.
                </p>
                <p>
                  + Led over 500 monthly client engagements in three
                  territories.{" "}
                </p>
                <p>
                  + Generated and maintained monthly and quarterly reports and
                  initiatives; achieved monthly and quarterly quota.{" "}
                </p>
              </article>
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Resume;

// <div className="resumebox">
//   <div>
//     <img className="profile" src={me} />
//     <article>
//       <h1>Arielle Ramirez</h1>
//       <p>Email: ariellenramirez@gmail.com</p>
//       <p>Phone: 603-721-6388</p>
//       <p>Linkedin:</p>
//       <p>Git:</p>
//     </article>
//     <nav className="vline"> </nav>
//   </div>
// </div>

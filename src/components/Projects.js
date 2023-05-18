import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <>
      <section id="projects">
        <h1>Projects</h1>
        <div className="card-group">
          <div className="card">
            <div className="card-body-projects">
              <h5 class="card-title">Resturant Reservation App</h5>
              <div className="portfolio__item-image">
                <img
                  className="card-img-top"
                  src="./images/res-app.jpg"
                  alt="Reservtions"
                ></img>
              </div>
              <p class="card-text">
                A reservation system created for restaurants, allowing employees
                to take down reservations, manage the seating of those
                reservations, and clear finished reservation tables. Customers
                who arrive with a reservation can be seated at unoccupied tables
                corresponding with their party size.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Buit with: HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS,
                  PostgreSQL, KnexJS, Bootstrap
                </small>
              </p>

              <div className="portfolio__item-CTA">
                <a
                  href="https://github.com/Shadi812/Restaurant-Reservation-App"
                  target="__blank"
                  className="btn"
                >
                  Code
                </a>

                <a
                  href="https://front-end-three-tau.vercel.app/dashboard"
                  target="__blank"
                  className="btn btn-primary"
                >
                  Deployed Site
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body-projects">
              <h5 class="card-title">Flash-Card App</h5>
              <div className="portfolio__item-image">
                <img
                  className="card-img-top"
                  src="./images/flashcard.jpg"
                  alt="Reservtions"
                ></img>
              </div>
              <p class="card-text">
                Allowing userers to study, this application revolvs around
                online flashcards. Students have the oppurtunity to create
                multiple decks and cards,so when it comes time to study, the
                students can click on the flashcard to flip it back and forth,
                revealing the definitions on the otherside.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Built with: HTML, CSS, JavaScript, ReactJS, Bootstrap
                </small>
              </p>
              <div className="portfolio__item-CTA">
                <a
                  href="https://github.com/Shadi812/Flashcard-O-Matic"
                  target="__blank"
                  className="btn"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body-projects">
              <h5 class="card-title">We Love Movies App (API)</h5>
              <div className="portfolio__item-image">
                <img
                  className="card-img-top"
                  src="./images/mov.png"
                  alt="Reservtions"
                ></img>
              </div>
              <p class="card-text">
                An API for an application that displays movies. This API
                provides acess to relevant information through route and query
                parameters. Users can also acess the theaters each movie is
                playing at, as well as critics' reviews of those movies.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Built with: NodeJS, ExpressJS, PostgreSQL, KnexJS
                </small>
              </p>
              <div className="portfolio__item-CTA">
                <a
                  href="https://github.com/Shadi812/WeLoveMovies"
                  target="__blank"
                  className="btn "
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;

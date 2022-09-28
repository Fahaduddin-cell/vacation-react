import React from "react";
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header className="main-header">
        <div className="landing-div">
          <div className="landing-wrapper d-flex flex-column h-100 align-items-center justify-content-center text-center">
            <div className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h5 className="display-4 animated slideInLeft delay-1s">
                    Enjoy Ultimate Vacations
                    <br /> With Us
                  </h5>
                </div>

                <div className="carousel-item">
                  <h5 className="display-4 animated slideInRight delay-1s">
                    Make Tours Amazing
                    <br /> With Us
                  </h5>
                </div>

                <div className="carousel-item">
                  <h5 className="display-4 animated slideInDown delay-1s">
                    Feel Relaxed In Holidays
                    <br /> With Us
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-dark text-white p-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="form-group">
                <label className="form-check-label">Chech In date</label>
                <input type="date" className="form-control" />
              </div>
            </div>

            <div className="col-md-3">
              <div className="form-group">
                <label className="form-check-label">Chech Out date</label>
                <input type="date" className="form-control" />
              </div>
            </div>

            <div className="col-md-2">
              <div className="form-group">
                <label className="form-check-label">Adults</label>
                <select className="form-control">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                </select>
              </div>
            </div>

            <div className="col-md-2">
              <div className="form-group">
                <label className="form-check-label">Childrens</label>
                <select className="form-control">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                </select>
              </div>
            </div>
            <input type="submit" className="btn btn-danger" value="SEARCH" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

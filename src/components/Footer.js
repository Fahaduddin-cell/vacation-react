import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="main-footer mt-4">
        <div className="footer-wrapper">
          <div className="container p-4">
            <div className="row">
              <div className="col-md-3">
                <h3>Vacations</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi animi quaerat illum odio officia quo nihil maiores
                  fuga, libero harum architecto dicta. Laborum, fugiat. Hic
                  consequatur cum ad repellendus deleniti?
                </p>
              </div>
              <div className="col-md-3">
                <h3>Information</h3>
                <p>Adventures</p>
                <p>Hotels</p>
                <p>Destinations</p>
                <p>Enquires</p>
                <p>Online Booking</p>
                <p>Spot Booking</p>
                <p></p>
              </div>

              <div className="col-md-3">
                <h3>Experience</h3>
                <p>Adventures</p>
                <p>Hotels</p>
                <p>Destinations</p>
                <p>Enquires</p>
                <p>Online Booking</p>
                <p>Spot Booking</p>
                <p></p>
              </div>

              <div className="col-md-3">
                <h3>Address</h3>
                <p>Flat No.2-6-47, Jubli Hills</p>
                <p>Hyderabad, Telanagana</p>
                <div className="d-flex justify-content-between">
                  <i className="fab fa-facebook-square text-primary fa-2x"></i>
                  <i className="fab fa-twitter text-info fa-2x"></i>
                  <i className="fab fa-instagram text-danger fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

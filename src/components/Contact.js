import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section style={{ marginTop: "100px" }} className="p-4">
        <div className="container">
          <div className="row ">
            <div className="col text-center">
              <h1>Tours Destination</h1>
              <p className="lead">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, corporis. Voluptatem distinctio pariatur possimus
                itaque nostrum ea, magni quaerat recusandae.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 pt-3">
              <div className="card location-card">
                <img
                  src="./imges/pexels-pixabay-161853.jpg"
                  className="img-fluid location-image"
                  alt=""
                />
                <h4 className="location-price">$300/Person </h4>
                <div className="card-body">
                  <h3 className="card-title">Paris</h3>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iste fuga tempore facilis delectus possimus aperiam adipisci
                    voluptatem doloribus cumque quaerat.
                  </p>
                  <Link to="/form">
                    <button className="btn btn-danger btn-sm">book Now</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 pt-3">
              <div className="card location-card">
                <img
                  src="./imges/pexels-tom-fisk-2121639.jpg"
                  className="img-fluid location-image"
                  alt=""
                />
                <h4 className="location-price">$300/Person </h4>
                <div className="card-body">
                  <h3 className="card-title">Malasia</h3>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iste fuga tempore facilis delectus possimus aperiam adipisci
                    voluptatem doloribus cumque quaerat.
                  </p>
                  <Link to="/form">
                    <button className="btn btn-danger btn-sm">book Now</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 pt-3">
              <div className="card location-card">
                <img
                  src="./imges/pexels-pok-rie-4847105.jpg"
                  className="img-fluid location-image"
                  alt=""
                />
                <h4 className="location-price">$300/Person </h4>
                <div className="card-body">
                  <h3 className="card-title">Bali</h3>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iste fuga tempore facilis delectus possimus aperiam adipisci
                    voluptatem doloribus cumque quaerat.
                  </p>
                  <Link to="/form">
                    <button className="btn btn-danger btn-sm">book Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4 pt-3">
              <div className="card location-card">
                <img
                  src="./imges/pexels-khairul-onggon-908055.jpg"
                  className="img-fluid location-image"
                  alt=""
                />
                <h4 className="location-price">$300/Person </h4>
                <div className="card-body">
                  <h3 className="card-title">Singapore</h3>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iste fuga tempore facilis delectus possimus aperiam adipisci
                    voluptatem doloribus cumque quaerat.
                  </p>
                  <Link to="/form">
                    <button className="btn btn-danger btn-sm">book Now</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 pt-3">
              <div className="card location-card">
                <img
                  src="./imges/pexels-zukiman-mohamad-122366.jpg"
                  className="img-fluid location-image"
                  alt=""
                />
                <h4 className="location-price">$300/Person </h4>
                <div className="card-body">
                  <h3 className="card-title">Malasia</h3>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iste fuga tempore facilis delectus possimus aperiam adipisci
                    voluptatem doloribus cumque quaerat.
                  </p>
                  <Link to="/form">
                    <button className="btn btn-danger btn-sm">book Now</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 pt-3">
              <div className="card location-card">
                <img
                  src="./imges/pexels-zukiman-mohamad-125486.jpg"
                  className="img-fluid location-image"
                  alt=""
                />
                <h4 className="location-price">$300/Person </h4>
                <div className="card-body">
                  <h3 className="card-title">Indonesia</h3>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iste fuga tempore facilis delectus possimus aperiam adipisci
                    voluptatem doloribus cumque quaerat.
                  </p>
                  <Link to="/form">
                    <button className="btn btn-danger btn-sm">book Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="inventory-wrapper">
      {/* Background Decorative Blur */}
      <div className="blur-circle"></div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            
            {/* Minimalist Badge */}
            <span className="badge rounded-pill bg-secondary mb-4 px-3 py-2 text-uppercase fw-bold status-badge">
              v1.0 System Active
            </span>

            {/* Main Headline */}
            <h1 className="display-2 fw-bold text-white mb-4">
              Control your <span className="highlight-text">Stock.</span> <br />
              Scale your business.
            </h1>

            {/* Subtext */}
            <p className="lead text-light mb-5 px-md-5 subtext">
              A streamlined interface designed for precision. Monitor assets, 
              track movements, and eliminate shortages with one click.
            </p>

            {/* The Single Button */}
            <Link to={'/landing'} className="btn btn-lg shadow-lg px-5 py-3 fw-bold main-button">
              ENTER INVENTORY
            </Link>

          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="fixed-bottom p-4 text-center">
        <small className="footer-note">
          Secure Ledger Verified
        </small>
      </div>
    </div>
  );
};

export default Home;
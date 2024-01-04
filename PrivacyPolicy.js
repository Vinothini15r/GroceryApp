import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <div className="container-image" style={{ backgroundImage: 'url(img-bg.jpg)' }}>
          {/* Add your content within this div */}
          <div className="image-content">
            At [Your Grocery Shop Name], we prioritize your privacy and are dedicated to safeguarding your personal data. We may collect information such as your name, contact details, and payment information to fulfill your grocery orders and improve our services. Your data is used for purposes like personalizing your shopping experience, complying with legal requirements, and enhancing our offerings. We may share your information with trusted service providers, as required by law, or in connection with business transfers. You have the option to access, update, or opt-out of marketing communications, and you can adjust cookie settings in your browser. While we take measures to protect your data, we cannot guarantee complete security. We may periodically update this policy, so we encourage you to review it. If you have any questions or requests, please reach out to us at [Contact Information]. Your use of our grocery shop implies acceptance of these terms.
          </div>
        </div>
      </div>

      <Link to="/home" className="back-button">Back</Link>
    </div>
  );
};

export default PrivacyPolicy;

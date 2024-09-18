const Footer = () => {
    return (
      <div className="before-login-footer py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Left Side - Share and Follow */}
            <div className="left-side">
              <h5 className="text-white text-center">Share and Follow</h5>
            </div>
  
            {/* Right Side - Footer Links */}
            <div className="right-side">
              <ul className="list-unstyled text-white d-flex gap-3 m-0 text-center cursor-pointer">
                <li>Privacy</li>
                <li>Cookie Preferences</li>
                <li>Terms of Use</li>
                <li>Legal Disclosure</li>
                <li>Copyright</li>
                <li>Trademark</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
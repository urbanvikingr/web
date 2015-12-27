"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import Link from "../Link";

const Footer = ({
  goToAbout,
  goToHelp,
  goToTerms
}) => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <div>
      <div className="mdl-mini-footer">
        <div className="mdl-mini-footer--left-section">
          <ul className="mdl-mini-footer--link-list">
            <li><Link onClick={goToAbout}>About</Link></li>
            <li><Link onClick={goToHelp}>Help</Link></li>
            <li><Link onClick={goToTerms}>Privacy & Terms</Link></li>
          </ul>
        </div>
        <div className="mdl-mini-footer--right-section">
        </div>
      </div>
      <div className="mdl-mini-footer">
        <span>
          Copyright&nbsp;&copy;&nbsp;2014&ndash;{currentYear}&nbsp;&nbsp;
          FitBird&nbsp;ApS&nbsp;&nbsp;
          Esromgade&nbsp;15&nbsp;&nbsp;Suite&nbsp;1102&nbsp;&nbsp;
          2200&nbsp;Copenhagen&nbsp;N&nbsp;&nbsp;Denmark&nbsp;&nbsp;
          CVR&nbsp;35418067
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToAbout: () => {
      dispatch(changeRoute("ABOUT"));
    },
    goToHelp: () => {
      dispatch(changeRoute("HELP"));
    },
    goToTerms: () => {
      dispatch(changeRoute("TERMS"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Footer)

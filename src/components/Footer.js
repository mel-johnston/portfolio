import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col social-links my-5">{networks}</div>
            <div className="col">
              <div 
                // onClick={() =>
                //   this.props.applyPickedLanguage(
                //     window.$primaryLanguage,
                //     window.$secondaryLanguageIconId
                //   )
                // }
                style={{ display: "inline" }}
              >
                <span
                  className="iconify language-icon mr-5 my-5"
                  data-icon="twemoji-flag-for-flag-united-states"
                  data-inline="false"
                  id={window.$primaryLanguageIconId}
                  style={{display: "none"}}
                ></span>
              </div>
              <div 
                // onClick={() =>
                //   this.props.applyPickedLanguage(
                //     window.$secondaryLanguage,
                //     window.$primaryLanguageIconId
                //   )
                // }
                style={{ display: "inline" }}
              >
                <span 
                  className="iconify language-icon hide"
                  data-icon="twemoji-flag-for-flag-poland"
                  data-inline="false"
                  id={window.$secondaryLanguageIconId}
                  style={{display: "none"}}
                ></span>
              </div>
            </div>
            <div className="col">
              <div className="copyright py-4">
                <div className="container my-5">
                  <small>
                    Copyright &copy;{" "}
                    {this.props.sharedBasicInfo
                      ? this.props.sharedBasicInfo.name
                      : "???"}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
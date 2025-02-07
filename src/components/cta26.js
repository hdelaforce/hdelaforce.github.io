import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text6">
                        Ready to see something explosive?
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text5">
                        Click the button below to witness the ultimate
                        explosion!
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <a
                  href="https://boom-test"
                  className="cta26-link thq-button-filled"
                >
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text4">
                          Click here to detonate
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  action1: undefined,
  content1: undefined,
  heading1: undefined,
}

CTA26.propTypes = {
  action1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default CTA26

import React, {Fragment} from 'react'

import PropTypes from 'prop-types'
import {useTranslations} from 'next-intl'

const CTA26 = (props) => {
    return (
        <>
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
            <style jsx>
                {`
          .cta26-accent2-bg {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent2);
          }
          .cta26-accent2-bg:hover {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          .cta26-accent1-bg {
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent1);
          }
          .cta26-container2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-cardradius);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .cta26-container2:hover {
            color: var(--dl-color-theme-neutral-light);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .cta26-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta26-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .cta26-link {
            text-decoration: none;
          }
          .cta26-text4 {
            display: inline-block;
          }
          .cta26-text5 {
            display: inline-block;
          }
          .cta26-text6 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .cta26-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 479px) {
            .cta26-actions {
              flex-wrap: wrap;
              align-self: stretch;
              justify-content: center;
            }
            .cta26-link {
              flex: 1;
            }
          }
        `}
            </style>
        </>
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

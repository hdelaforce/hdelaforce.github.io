import React, {Fragment} from 'react'

import PropTypes from 'prop-types'
import {useTranslations} from 'next-intl'

const Contact10 = (props) => {
    return (
        <>
            <div className="contact10-container1 thq-section-padding">
                <div className="contact10-max-width thq-section-max-width">
                    <div className="contact10-content1 thq-flex-row">
                        <div className="contact10-content2">
                            <h2 className="thq-heading-2">
                                {props.heading1 ?? (
                                    <Fragment>
                                        <span className="contact10-text7">Contact Us</span>
                                    </Fragment>
                                )}
                            </h2>
                            <p className="thq-body-large">
                                {props.content1 ?? (
                                    <Fragment>
                    <span className="contact10-text5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in ero.
                    </span>
                                    </Fragment>
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="contact10-content3 thq-flex-row">
                        <div className="contact10-container2">
                            <img
                                alt={props.imageAlt}
                                src={props.imageSrc}
                                className="contact10-image"
                            />
                            <h3 className="contact10-text3 thq-heading-3">
                                {props.location1 ?? (
                                    <Fragment>
                    <span className="contact10-text6">
                      Email: hudelaforce@gmail.com
                    </span>
                                    </Fragment>
                                )}
                            </h3>
                            <p className="thq-body-large">
                                {props.location1Description ?? (
                                    <Fragment>
                    <span className="contact10-text8">
                      For general inquiries and support
                    </span>
                                    </Fragment>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .contact10-container1 {
                        display: flex;
                        position: relative;
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .contact10-max-width {
                        align-self: center;
                    }

                    .contact10-content1 {
                        width: 100%;
                        margin-bottom: var(--dl-space-space-threeunits);
                        justify-content: flex-start;
                    }

                    .contact10-content2 {
                        gap: var(--dl-space-space-unit);
                        display: flex;
                        align-self: stretch;
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .contact10-content3 {
                        width: 100%;
                        align-items: flex-start;
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .contact10-container2 {
                        gap: var(--dl-space-space-oneandhalfunits);
                        flex: 1;
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }

                    .contact10-image {
                        width: 1046px;
                        height: 529px;
                        object-fit: cover;
                    }

                    .contact10-text3 {
                        text-align: center;
                    }

                    .contact10-text5 {
                        display: inline-block;
                    }

                    .contact10-text6 {
                        display: inline-block;
                    }

                    .contact10-text7 {
                        display: inline-block;
                    }

                    .contact10-text8 {
                        display: inline-block;
                    }

                    @media (max-width: 991px) {
                        .contact10-content1 {
                            align-items: flex-start;
                            justify-content: flex-start;
                        }

                        .contact10-content3 {
                            position: relative;
                            align-items: center;
                            flex-direction: column;
                        }
                    }

                    @media (max-width: 767px) {
                        .contact10-content1 {
                            gap: var(--dl-space-space-oneandhalfunits);
                        }
                    }
                `}
            </style>
        </>
    )
}

Contact10.defaultProps = {
    content1: undefined,
    imageAlt: 'image',
    location1: undefined,
    imageSrc: '/cat%20on%20unicorn-600h.png',
    heading1: undefined,
    location1Description: undefined,
}

Contact10.propTypes = {
    content1: PropTypes.element,
    imageAlt: PropTypes.string,
    location1: PropTypes.element,
    imageSrc: PropTypes.string,
    heading1: PropTypes.element,
    location1Description: PropTypes.element,
}

export default Contact10

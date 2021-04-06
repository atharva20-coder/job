import React from 'react';
import { calculateTimeSinceCreation } from '../../utils/calculateTimeSinceCreation';

const Main = ({ job }) => {
    const {location, created_at, description, how_to_apply, title, type, company_url, company_logo, company} = job
    
    const handleRedirectCompanyWebsite = () => {
        if (company_url) window.location.href = company_url
    }

    return (
        <main className="main-wrapper">
            <div className="job">
                <div className="company">
                    <div className="company__logo">
                        <img src={company_logo} alt="company__logo" />
                    </div>
                    <div className="company__text-block">
                        <h3 className="company__name">{company}</h3>
                        <h6 onClick={() => handleRedirectCompanyWebsite()} className="company__site">{company_url}</h6>
                    </div>
                    <button onClick={() => handleRedirectCompanyWebsite()} className="button2 company__button">Company Site</button>
                </div>

                <div className="description">
                    <div className="description__header">
                        <div className="description__text-block">
                            <p className="description__information">{calculateTimeSinceCreation(created_at)} <span className="description__dot" /> {type}</p>
                            <p className="description__title">{title}</p>
                            <p className="description__location">{location}</p>
                        </div>
                        <button className="button1 description__button">Apply Now</button>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: description}} />
                </div>

                <div className="apply">
                    <h3 className="apply__title">How to Apply</h3>
                    <div dangerouslySetInnerHTML={{__html: how_to_apply}} />
                </div>
            </div>
        </main>
    );
}

export default Main;

import React from 'react';
import { useHistory } from 'react-router-dom'
import { calculateTimeSinceCreation } from '../../utils/calculateTimeSinceCreation';

function JobCard({ job }) {
    const history = useHistory()
    const handleRedirectJob = () => history.push(`/${job.id}`)

    return (
        <div className="job-card" onClick={() => handleRedirectJob()}>
            {job.company_logo &&
                <div className="job-card__logo">
                    <img src={job.company_logo} alt="company-logo" />
                </div>
            }
            <p className="job-card__information">{calculateTimeSinceCreation(job.created_at)} <span className="job-card__dot" /> {job.type}</p>
            <p className="job-card__title">{job.title}</p>
            <p className="job-card__company-name">{job.company}</p>
            <p className="job-card__location">{job.location}</p>
        </div>
    );
}

export default JobCard;
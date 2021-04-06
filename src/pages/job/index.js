import React from 'react';
import { useJob } from '../../utils/useJobs';
import { useParams, Link } from "react-router-dom";
import { ReactComponent as LoadingSpinner } from '../../assets/desktop/loading-circle.svg';
import Main from './Main';
import Footer from './Footer';

function JobIndex() {
    const { jobId } = useParams()
    const {
        job,
        isLoading,
        isSuccess,
        isError,
        error
    } = useJob(jobId)

    if (isLoading) 
        return (
            <LoadingSpinner className="loading-spinner" />
        )
    
    if (isSuccess)
        return (
            <>
                <Main job={job} />
                <Footer title={job?.title} company={job?.company} />
            </>
        )

    if (isError && error === "not found") {
        return (
            <div className="error">
                <p className="error__text">Sorry this job doesn't seem to exist ...</p>
                <Link className="error__link button1" to="/">Go back Home</Link>
            </div>
        )
    }

    throw Error(error)
}

export default JobIndex;
import React, { useState } from 'react';
import SearchBar from './searchBar/';
import JobCard from './JobCard';
import {ReactComponent as LoadingSpinner} from '../../assets/desktop/loading-circle.svg';
import { useJobs } from '../../utils/useJobs'

function JobListIndex() {
    const [requestOptions, setRequestOptions] = useState({
        full_time: false,
        description: '',
        location: ''
    })

    const {
        jobs,
        fetchMoreJobs,
        error,
        isFetching,
        isLoading,
        isSuccess,
    } = useJobs(requestOptions)

    if (isLoading) {
        return (
            <main className="jobs-main">
                <SearchBar setRequestOptions={setRequestOptions} />
                <LoadingSpinner className="loading-icon" />
            </main>  
        )
    }

    if (isSuccess)
        return (
            <main className="jobs-main">
                <SearchBar setRequestOptions={setRequestOptions} />
                <div className="job-list">
                    {jobs && jobs.pages.map((page, index) => (
                        <React.Fragment key={`page_${index}`}>
                            {page.map(job => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </React.Fragment>
                        )
                    )}
                </div>
                {isFetching ?
                    <LoadingSpinner className="loading-icon" /> :
                    <button onClick={() => fetchMoreJobs()} className="load-more-button button1">{isFetching ? 'Loading ...' : 'Load More'}</button>
                }
            </main>  
        )

    throw Error(error)
}

export default JobListIndex;
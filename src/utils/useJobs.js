import {useInfiniteQuery, useQuery} from 'react-query'
import {client} from './api-client'
import { useState, useEffect } from 'react'

function useJobs({ description, location, full_time }) {
  const [page, setPage] = useState(1)

  const fetchJobs = ({ pageParam = 1 }) => {
    const descriptionParam = description ? `&description=${description}` : ''
    const locationParam = location ? `&location=${location}` : ''
    const fullTimeParam = full_time ? '&full_time=on' : ''
    return client(`positions.json?page=${pageParam}${descriptionParam}${locationParam}${fullTimeParam}`)
  }

  const {
    data: jobs,
    error,
    fetchNextPage,
    isFetching,
    isLoading,
    isSuccess,
  } = useInfiniteQuery(['jobs', description, location, full_time], fetchJobs)

  const fetchMoreJobs = () => {
    setPage(page + 1)
    fetchNextPage({ pageParam: page + 1 })
  }

  useEffect(() => {
    setPage(1)
  }, [description, location, full_time])

  return {
    jobs,
    error,
    fetchMoreJobs,
    isFetching,
    isLoading,
    isSuccess,
  }
}

const useJob = (jobId) => {
  const fetchJob = () => client(`positions/${jobId}.json`)

  const {
    data: job,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(['job', jobId], fetchJob)

  return {
    job,
    error,
    isLoading,
    isError,
    isSuccess,
  }
}

export { useJobs, useJob }
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Jobs from './components/Jobs'
import AddJob from './components/AddJob'
import About from './components/About'

const App = () => {
  const [showAddJob, setShowAddJob] = useState(false)
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const getJobs = async () => {
      const jobsFromServer = await fetchJobs()
      setJobs(jobsFromServer)
    }

    getJobs()
  }, [])

  // Fetch items
  const fetchJobs = async () => {
    const res = await fetch('http://localhost:5000/jobs')
    const data = await res.json()

    return data
  }

  // Fetch items
  const fetchJob = async (id) => {
    const res = await fetch(`http://localhost:5000/jobs/${id}`)
    const data = await res.json()

    return data
  }

  // Add item
  const addJob = async (job) => {
    const res = await fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(job),
    })

    const data = await res.json()

    setJobs([...jobs, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newJob = { id, ...jobs }
    // setJobs([...jobs, newJob])
  }

  // Delete item
  const deleteJob = async (id) => {
    const res = await fetch(`http://localhost:5000/jobs/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setJobs(jobs.filter((job) => job.id !== id))
      : alert('Error Deleting This Item')
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const jobToToggle = await fetchJob(id)
    const updJob = { ...jobToToggle, reminder: !jobToToggle.reminder }

    const res = await fetch(`http://localhost:5000/jobs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updJob),
    })

    const data = await res.json()

    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, reminder: data.reminder } : job
      )
    )
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddJob(!showAddJob)}
          showAdd={showAddJob}
          title='Job interviews tracker'
        />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddJob && <AddJob onAdd={addJob} />}
              {jobs.length > 0 ? (
                <Jobs
                  jobs={jobs}
                  onDelete={deleteJob}
                  onToggle={toggleReminder}
                />
              ) : (
                'No job opportunities to show'
              )}
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  )
}

export default App

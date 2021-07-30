import { useState } from 'react'

const AddJob = ({ onAdd }) => {
  const [company, setCompany] = useState('')
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!company) {
      alert('Please add a job')
      return
    }

    onAdd({ company, url, title, day, reminder })

    setCompany('')
    setUrl('')
    setTitle('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Company</label>
        <input
          type='text'
          placeholder='Add Company Name'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          />
      </div>
      <div className='form-control'>
        <label>Job Description</label>
        <input
          type='text'
          placeholder='Add URL'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>      <div className='form-control'>
        <label>Job Title</label>
        <input
          type='text'
          placeholder='Add Job Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Job' className='btn btn-block' />
    </form>
  )
}

export default AddJob

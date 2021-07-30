import { FaTimes } from 'react-icons/fa'

const Job = ({ job, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${job.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(job.id)}
    >
      <h3>
        <a href={`${job.url}`} target="_blank">{job.company}</a>{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(job.id)}
        />
      </h3>
      <h4>{job.title}</h4>
      <p>{job.day}</p>
    </div>
  )
}

export default Job

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h3>by mac.in4matic</h3>
        <h4>Version 0.5.1</h4>
        <p>Please check out my website: <a href='https://mac.portfolio247.net/' target='_blank' rel='noreferrer'>mac.portfolio247.net</a></p>
        <p className='centre mt2'><Link to='/'>Back to list</Link></p>
    </div>
  )
}

export default About

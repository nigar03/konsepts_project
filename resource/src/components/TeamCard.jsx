import React from 'react'

const TeamCard = ({ photo, title, job }) => {
  return (
    <div className='team-cards col col-sm-12 col-md-3'>
      <div className="team-card " >
        <img height={330} src={photo} className="card-img-top" alt="..." style={{ width: "293px" }} />
        <div className="card-body my-3">
          <h5 className="card-title  text-center">{title}</h5>
          <p className="card-text text-secondary text-center">{job}</p>
          <p className='icon-media text-center'>
            <a href="https://www.facebook.com/QodeInteractive/" className='text-decoration-none text-secondary '> <i className="fa-brands fa-facebook p-1 fs-5"></i></a>
            <a href="https://www.instagram.com/qodeinteractive/" className='text-decoration-none text-secondary'> <i className="fa-brands fa-instagram fs-5 p-1"></i></a>
            <a href="https://twitter.com/QodeInteractive" className='text-decoration-none text-secondary'> <i className="fa-brands fa-twitter fs-5 p-1"></i></a></p>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
import React from 'react'
import { Link } from 'react-router-dom'

const management = (props) => {
  return (
    <div className="team-item">
                <div className="team-inner">
                  <div className="team-thumb">
                    <Link to="">
                      <img src={props.img} alt="team" />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h6 className="title">
                      <Link to="">{props.title}</Link>
                    </h6>
                    <ul className="social">
                      <li>
                        <Link to="">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
  )
}

export default management
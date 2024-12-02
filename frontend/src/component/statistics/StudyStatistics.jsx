import React from 'react'
import './StudyStatistics.css'

export const StudyStatistics = () => {
  return (
    <div className='statistics'>
        <div className="statistics-r1">
            <div className="statistics-date-time">
                <div className="statistics-day">Saturday</div>
                <div className="statistics-date">November 30,2024</div>
            </div>
            <div className="statistics-user-info">
                <div className='user-profile-notification'><i class="fa fa-bell" aria-hidden="true"></i></div>
                <div className='user-profile-sec'><i class="fa fa-user-circle" aria-hidden="true"></i></div>
            </div>
        </div>
        <div className="statistics-r2">
            <div className="statistics-r2-head mb-2">
                <div className="h5">Study statistics</div>
                <div className="">
                    <select name="" id="">
                        <option value="yearly">Yearly</option>
                        <option value="monthly">Monthly</option>
                        <option value="weekly">Weekly</option>
                        <option value="daily">Daily</option>
                    </select>
                </div>
            </div>
            <div className="statistics-r2-main"></div>
        </div>
    </div>
  )
}

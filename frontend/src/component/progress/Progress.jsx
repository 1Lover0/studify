import React from 'react'
import './Progress.css'

export const Progress = () => {
  return (
    <div>
        <div className="statistics-r2 p-3 ps-0">
            <div className="statistics-r2-head mb-3">
                <div className="h5">My Progress</div>
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

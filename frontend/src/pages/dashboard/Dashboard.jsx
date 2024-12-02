import React from 'react'
import './Dashboard.css'
import { YourCourses } from '../../component/yourCourses/YourCourses'
import { CourseClasses } from '../../component/classes/CourseClasses'
import { StudyStatistics } from '../../component/statistics/StudyStatistics'
import { Progress } from '../../component/progress/Progress'
import { Assignment } from '../../component/assignment/Assignment'

export const Dashboard = () => {
  return (
    <div className='dashboard dash'>
      <div className="app-height bg-lights">
        <CourseClasses />
        <YourCourses />
      </div>
      <div className="app-height py-3 px-5">
        <StudyStatistics />
        <div className="dash">
          <Progress />
          <Assignment />
        </div>
      </div>
    </div>
  )
}

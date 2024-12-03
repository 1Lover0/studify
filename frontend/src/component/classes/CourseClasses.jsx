import React from 'react'
import './CourseClasses.css';

export const CourseClasses = () => {
    return (
        <div className='course-class mb-2'>
            <h5>Welcome Back</h5>
            <div className="user-profile-name">Deepu Singh</div>
            <div className="search-course">
                <input type="search" placeholder='Search Course' />
                <i className='fa fa-search'></i>
            </div>
            <div className="course-class-header mb-2">
                <div className="h5">Continues Classes</div>
                <div className="course-class-header-link">
                    <i className='fa fa-angle-left'></i>
                    <i className='fa fa-angle-right'></i>
                </div>
            </div>
            <div className="course-class-main">
                <div className="course-class-sub">
                    <span>UX Design</span>
                    <div className="course-class-sub-img">
                        <img src="https://img.freepik.com/free-vector/graphic-designer-man_78370-159.jpg?t=st=1732980356~exp=1732983956~hmac=6c218e7450fda6d2c8fc018f1bdc2191636c5ec81f89609e4c2d9930bd609f46&w=1060" alt="" />
                    </div>
                    <div className="course-class-sub-box">
                        <div className="course-class-sub-desc">
                            <div className="h5">UX design principle</div>
                            <div className="your-course-box-desc-author">
                                <div className="your-course-box-desc-author-img"></div>
                                <div className="your-course-box-desc-author-name">Deepu Singh</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" aria-valuenow="50"></div>
                            </div>
                            {/* <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                        </div>
                        <div className="course-class-sub-detail">
                            <div className="course-class-sub-detail-time">1 Hour</div>
                            <li className="course-class-sub-detail-level"> Intermidiate</li>
                        </div>
                    </div>
                </div>
                <div className="course-class-sub">
                    <span>UX Design</span>
                    <div className="course-class-sub-img">
                        {/* <img src="https://img.freepik.com/free-vector/graphic-designer-man_78370-159.jpg?t=st=1732980356~exp=1732983956~hmac=6c218e7450fda6d2c8fc018f1bdc2191636c5ec81f89609e4c2d9930bd609f46&w=1060" alt="" /> */}
                    </div>
                    <div className="course-class-sub-box">
                        <div className="course-class-sub-desc">
                            <div className="h5">UX design principle</div>
                            <div className="your-course-box-desc-author">
                                <div className="your-course-box-desc-author-img"></div>
                                <div className="your-course-box-desc-author-name">Deepu Singh</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" aria-valuenow="50"></div>
                            </div>

                        </div>
                        <div className="course-class-sub-detail">
                            <div className="course-class-sub-detail-time">1 Hour</div>
                            <li className="course-class-sub-detail-level"> Intermidiate</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

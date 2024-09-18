"use client";

import '../Main.css';
import React from 'react';
import courses from '../../../public/images/courses.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Card = () => {

  const courseId = "courseId";
  const router = useRouter();

  return (
    <div className="container mt-5">
      <div className="row">
        {Array.from({ length: 18 }).map((_, index) => (
          <div className="col-lg-4 col-md-4 mb-4" key={index}>
            <div
              className="courses-main"
              onClick={() => router.push(`/current-courses/${courseId}`)}
            >
              <h3 className="p-3">Kenz Learning Journey</h3>
              <p>Acquiring Core ABAP Skills</p>
              <Image src={courses} alt="courses" />
              <span className="mb-3">Available for Developer</span>

              {/* Hover card content */}
              <div className="hover-card">
                <h4>Practical CSS3 Flexbox, Media Queries & CSS Grid Mastery</h4>
                <p>Updated September 2022</p>
                <p>2 total hours | All Levels</p>
                <ul>
                  <li>Learn to build responsive websites with the help of CSS3 Flexbox, CSS Grid, and Media Queries.</li>
                  <li>Learn to use Git and GitHub.</li>
                  <li>Understand Responsive Web Design and Development.</li>
                  <li>Master Flexbox concepts and their use.</li>
                  <li>Grasp the concepts of Media Queries and how to implement them.</li>
                </ul>
                <button className='btn btn-primary'>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

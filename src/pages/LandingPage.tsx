import React from 'react';
import Hero from '../components/Hero/Hero';
import CourseSection from '../components/CourseSection/CourseSection';
import ContactForm from '../components/ContactForm/ContactForm';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <CourseSection />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
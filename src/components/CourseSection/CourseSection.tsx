import { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from '../CourseCard/CourseCard';
import { Course } from '../../types/course';

const CourseSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/courses');
        setCourses(response.data); // Assuming response.data is an array of courses
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch courses. Please try again later.');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Discover Our Courses</h2>
        <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
          View More
        </button>
      </div>

      {/* Conditional Rendering */}
      {loading ? (
        <div className="text-center">Loading courses...</div>
      ) : error ? (
        <div className="text-center text-red-600">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseSection;

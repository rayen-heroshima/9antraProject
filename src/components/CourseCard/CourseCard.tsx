
import { Course } from '../../types/course';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={`http://localhost:3000/uploads/${encodeURIComponent(course.imageUrl)}`}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <div className="text-pink-600 font-semibold">
          {course.price} DT/ Month
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
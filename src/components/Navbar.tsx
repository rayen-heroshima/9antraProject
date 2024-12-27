
import { Link } from 'react-router-dom';
import { GraduationCap, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">CourseHub</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/admin"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Settings className="h-4 w-4 mr-2" />
              Admin Panel
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
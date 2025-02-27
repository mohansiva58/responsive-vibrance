
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-rk-dark mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-rk-dark mb-2">Page Not Found</h2>
        <p className="text-rk-gray mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

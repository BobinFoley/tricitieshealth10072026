import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (location.pathname === "/") return null;

  return (
    <nav className="flex px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-slate-500">
        <li>
          <Link to="/" className="hover:text-primary transition-colors flex items-center">
            <Home size={16} className="mr-1" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const label = value
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          return (
            <li key={to} className="flex items-center space-x-2">
              <ChevronRight size={14} className="text-slate-300" />
              {last ? (
                <span className="font-semibold text-slate-900" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link to={to} className="hover:text-primary transition-colors">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

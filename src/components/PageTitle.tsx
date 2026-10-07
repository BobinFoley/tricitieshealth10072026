import { useEffect } from "react";

interface PageTitleProps {
  title: string;
  isHome?: boolean;
}

export default function PageTitle({ title, isHome }: PageTitleProps) {
  useEffect(() => {
    const prevTitle = document.title;
    if (isHome) {
      document.title = "DOT Physicals & Men's Health | Tri-Cities Health Elizabethton TN";
    } else {
      document.title = `${title} | Tri-Cities Health`;
    }
    
    return () => {
      document.title = prevTitle;
    };
  }, [title, isHome]);

  return null;
}

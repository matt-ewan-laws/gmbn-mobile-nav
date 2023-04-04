import { useState } from "react";
import ChevronRight from "./ChevronRight";

const MobileMenuParent = ({ title, childrenLinks }) => {
  const [isChildrenOpen, setIsChildrenOpen] = useState(false);

  return (
    <li className="mb-4">
      <button
        onClick={() => setIsChildrenOpen((current) => !current)}
        className="block flex items-center justify-between w-full text-2xl mb-1"
      >
        <span>{title}</span>
        <span
          className={`w-4 transition-all ${isChildrenOpen ? "rotate-90" : ""}`}
        >
          <ChevronRight />
        </span>
      </button>

      <ul
        className={`overflow-hidden transition-all pl-2 ${
          isChildrenOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {childrenLinks.map(({ title, href }) => (
          <li className="mb-2 text-xl">
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MobileMenuParent;
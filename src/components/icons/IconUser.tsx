import React from "react";
import { Link } from "react-router-dom";


const IconUser = () => {
  return (
    <Link to={`https://www.youtube.com/watch?v=Wf2pgjXVNMM&list=RDyoYv_ezmvqI&index=2`} >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </span>
    </Link>

  );
};

export default IconUser;

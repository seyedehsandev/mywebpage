import React from 'react';

function ProjectCard({ title, desc, img }) {
  return (
    <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 dark:bg-gray-900 dark:border-gray-800">
      <a href="#">
        <img className="rounded-t-lg w-full object-cover h-48 transition-transform duration-300 transform hover:scale-105" src={img} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <div className="flex gap-x-3 items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-500 transition duration-300"
          >
            See Live
            <svg
              className="rtl:rotate-180 w-4 h-4 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-md text-sm px-4 py-2 inline-flex items-center transition duration-300"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

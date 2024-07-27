// import { useState } from "react";

// const Pagination = (filteredProjects) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [projectsPerPage] = useState(6);
//   // Pagination
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = filteredProjects.slice(
//     indexOfFirstProject,
//     indexOfLastProject
//   );
//   const paginate = (pageNumber : number) => setCurrentPage(pageNumber);
//   const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

//   return (
//     <div className="d-flex justify-content-center mt-4">
//       {Math.ceil(filteredProjects.length / projectsPerPage) > 1 && (
//         <ul className="pagination gap-2">
//           {/* Previous button */}
//           <li className="page-item">
//             <button
//               onClick={() => paginate(currentPage - 1)}
//               className="btn btn-dark"
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//           </li>
//           {/* Page buttons */}
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <li key={index} className="page-item">
//               <button
//                 onClick={() => paginate(index + 1)}
//                 className={`btn btn-dark ${
//                   currentPage === index + 1 ? "active" : ""
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             </li>
//           ))}
//           {/* Next button */}
//           <li className="page-item">
//             <button
//               onClick={() => paginate(currentPage + 1)}
//               className="btn btn-dark"
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Pagination;

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import "../styles/Sidebar.css"
// import Logo from "/images/passport1.png";
// import { resumeDriveLink, navLinkArray } from "./Navbar";
// import { ExperienceTabContext } from "../pages/LandingPage";



// const SideBar = ({ sidebar, showSidebar }: any) => {
// 	const experienceTabContext = useContext(ExperienceTabContext);

// 	const handleSidebar = () => {
// 		showSidebar(!sidebar);
// 	};

// 	const removeSidebar = () => {
// 		showSidebar(false);
// 	};

// 	const handleChangeExperienceTab = () => {
//         if (experienceTabContext) {
//           experienceTabContext.setValue("1"); // Set tab value if context exists
//         }
//       };

// 	window.addEventListener("resize", removeSidebar);
// 	window.addEventListener("scroll", removeSidebar);

// 	return (
// 		<>
// 			<header className="flex items-center justify-center w-full">
// 				<div className="flex items-center justify-between min-h-[10vh] w-full">
// 					<Link to="/">
// 						<img
// 							src={Logo}
// 							alt="logo"
// 							className="border-2 border-veryLightGrey rounded-full w-[40px] h-[40px] object-cover"
// 						/>
// 					</Link>
// 					<div
// 						className={sidebar ? "hamburger-div" : "hamburger-div-hover"}
// 						onClick={handleSidebar}
// 					>
// 						<span className="hamburger-span"></span>
// 						<span className="hamburger-span"></span>
// 						<span className="hamburger-span"></span>
// 					</div>
// 				</div>
// 			</header>

// 			<div
// 				className={sidebar ? "sidebar-active" : "side-bar"}
// 				onClick={removeSidebar}
// 			>
// 				<ul className="flex flex-col items-center justify-between h-[50vh] px-8 mb-8 text-lightGrey text-2xl transition-all">
// 					{navLinkArray.map((link) =>
// 						link.function ? (
// 							<li key={link.path}>
// 								<a
// 									href={link.path}
// 									onClick={() => handleChangeExperienceTab()}
// 									className="hover:text-lightGreen hover:transition ease-in-out"
// 								>
// 									{link.name}
// 								</a>
// 							</li>
// 						) : (
// 							<li key={link.path}>
// 								<a
// 									href={link.path}
// 									className="hover:text-lightGreen hover:transition ease-in-out"
// 								>
// 									{link.name}
// 								</a>
// 							</li>
// 						)
// 					)}

// 					<li className="mt-3">
// 						<a href={resumeDriveLink} target="_blank" rel="noopener noreferrer">
// 							<button
// 								id="resume-btn"
// 								className="border border-lightGreen py-4 px-8 rounded-md text-lightGreen"
// 							>
// 								Resume
// 							</button>
// 						</a>
// 					</li>
// 				</ul>
// 			</div>
// 		</>
// 	);
// };

// export default SideBar;


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "/images/passport1.png";
import { resumeDriveLink, navLinkArray } from "./Navbar";
import { ExperienceTabContext } from "../pages/LandingPage";

interface SidebarProps {
  sidebar: boolean;
  showSidebar: (val: boolean) => void;
}

const SideBar: React.FC<SidebarProps> = ({ sidebar, showSidebar }) => {
  const experienceTabContext = useContext(ExperienceTabContext);

  const toggleSidebar = () => showSidebar(!sidebar);

  const handleChangeExperienceTab = () => {
    experienceTabContext?.setValue("1");
    toggleSidebar();
  };

  return (
    <>
      {/* Top Bar */}
      <header className="flex items-center justify-between min-h-[10vh] px-4 shadow-md">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="rounded-full w-[42px] h-[42px] object-cover border-2 border-gray-200 hover:opacity-90"
          />
        </Link>

        {/* Left Menu Toggle */}
        <button
          onClick={toggleSidebar}
          className="flex flex-col gap-[5px] cursor-pointer md:hidden z-[1001]"
        >
          <span
            className={`h-[3px] w-[28px] bg-gray-700 rounded transition-all ${
              sidebar ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-[28px] bg-gray-700 rounded transition-all ${
              sidebar ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-[28px] bg-gray-700 rounded transition-all ${
              sidebar ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>
      </header>

      {/* Sidebar (Left) */}
      <aside
        className={`fixed top-0 left-0 h-full w-[70%] sm:w-[250px] bg-gray-200 shadow-lg z-[1000] transform
        transition-transform duration-300 ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="pt-24 px-6 flex flex-col gap-6">
          {navLinkArray.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={
                link.function ? handleChangeExperienceTab : toggleSidebar
              }
              className="text-gray-700 text-lg text-left font-medium hover:text-green-600 transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href={resumeDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6"
          >
            <button className="border border-green-600 py-3 px-5 rounded-md
              text-green-600 hover:bg-green-600 hover:text-white
              transition w-full font-semibold"
            >
              Resume
            </button>
          </a>
        </nav>
      </aside>

      {/* Dim Background when Sidebar Open */}
      {sidebar && (
        <div
          className="fixed inset-0 bg-black/30 z-[500] md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default SideBar;

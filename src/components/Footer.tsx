import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-center relative py-4 w-full">
			<div className="flex w-full max-w-xs mx-auto items-center justify-around">
				<a
					href="https://github.com/Nyelus101"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github
						className="text-xl text-lightGrey hover:text-lightGreen"
					/>
				</a>

				<a
					href="#"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Twitter
						className="text-xl text-lightGrey hover:text-lightGreen"
					/>
				</a>

				<a
					href="https://www.linkedin.com/in/chinedu-muonyelu-7018b7216?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOWvpNYnnRNmKG%2Bzfsot9lQ%3D%3D"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Linkedin
						className="text-xl text-lightGrey hover:text-lightGreen"
					/>
				</a>
			</div>

			<div className="w-full text-center mt-8 max-w-xs mx-auto">
				<a
					href="#"
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-lightGrey hover:text-lightGreen"
				>
					Built by Chinedu Muonyelu
				</a>
			</div>
		</div>
	);
};

export default Footer;

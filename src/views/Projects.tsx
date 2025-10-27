import React, { useRef, ReactNode } from "react";
import "../styles/Project.css";
import { Link } from "react-router-dom";
import {
	Card,
	CardActions,
	CardMedia,
	CardContent,
	Button,
	Typography,
} from "@mui/material";
import { Github, LinkIcon } from "lucide-react";
import { useInView } from "framer-motion";
import { data } from "../lib/allProjectsData";

interface MotionDivProps {
    children: ReactNode;
  }

const MotionDiv = ({ children }: MotionDivProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section ref={ref} className="framer-section">
			<div
				style={{
					transform: isInView ? "none" : "translateX(500px)",
					opacity: isInView ? 1 : 0,
					transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
				}}
			>
				{children}
			</div>
		</section>
	);
};

const Projects = () => {
	const { landingPageProjects } = data;

	return (
		<div className="flex flex-col items-center justify-center text-deepGrey text-lg gap-y-12 font-medium">
			{landingPageProjects.map((item) => (
				<MotionDiv key={item.name}>
					<Card className="w-full mx-auto max-w-4xl">
						<CardMedia
							component="img"
							height="100"
							image={item.imgURL}
							alt={item.name}
						/>
						<CardContent className="bg-black">
							<Typography variant="h2" component="div">
								<h2 className="flex flex-row gap-2 items-center justify-center flex-wrap text-xl text-lightGrey font-bold text-center">
									<span>{item.name}</span>
									<span
										className={
											item.featured
												? "block text-lightGreen text-xs font-medium"
												: "hidden"
										}
									>
										&#40;Featured Project&#41;
									</span>
								</h2>
							</Typography>

							<Typography variant="body1" color="text.secondary">
								<p className="text-lightGreen text-center">
									{item.description}
								</p>

								<div className="flex flex-row items-center flex-wrap gap-2 justify-around mx-auto text-lightGrey text-xs w-full max-w-xs mt-3">
									{item.techUsed.map((tech, index) => (
										<span key={index}>{tech}</span>
									))}
								</div>
							</Typography>
						</CardContent>

						<CardActions className="flex items-center justify-center bg-black">
							{item.repoURL && (
								<a
									href={item.repoURL}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button size="large" title="GitHub">
										<Github className="text-lg" />
									</Button>
								</a>
							)}

							<a
								href={item.hostedURL}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button size="large" title="External Link">
									<LinkIcon className="text-lg" />
								</Button>
							</a>
						</CardActions>
					</Card>
				</MotionDiv>
			))}

			{/* More Project Button */}
			<MotionDiv>
				<div className="text-center">
					<Link to="/archive">
						<button
							className="border border-lightGreen py-2 px-3 rounded-md text-lightGreen"
							id="resume-btn"
						>
							View other projects
						</button>
					</Link>
				</div>
			</MotionDiv>
		</div>
	);
};

export default Projects;

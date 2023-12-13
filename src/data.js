// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
import newLogo from "./images/markOfNaga.jpg"

// Projects Images (add your images to the images directory and import below)
// Projects Images (add your images to the images directory and import below)
import Logo from "./images/worldIcon.jpg";
import Logo1 from "./images/gitActions.png";


// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/cieloRojo.jpg";
import HeroDark from "./images/cieloEstrellado.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "LuisESuarezA";

// Navbar Logo image
export const navLogo = newLogo;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="mdi:linkedin" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and how it can be used to solve problems. I love challenges that help me surpass my limits and explore new areas of knowledge. ";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
   {
    id: 1,
    skill: <Icon icon="teenyicons:python-outline" className="display-4" />,
    name: "Python",
   },
   {
    id: 2,
    skill: <Icon icon="bxl:java" className="display-4" />,
    name: "Java",
   },
   {
    id: 3,
    skill: <Icon icon="devicon:sqldeveloper" className="display-4" />,
    name: "SQL",
   },
   {
    id: 4,
    skill: <Icon icon="mdi:docker" className="display-4" />,
    name: "Docker",
   },
   {
    id: 5,
    skill: <Icon icon="devicon-plain:bash" className="display-4" />,
    name: "Bash",
   },
   {
    id: 6,
    skill: <Icon icon="simple-icons:r" className="display-4" />,
    name: "R",
   },
   {
    id: 7,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
   },
   {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
   },
 ];
// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["proyectoNoSqlo2023", "gitActions", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "proyectoNoSqlo2023",
    image: Logo,
  },
  {
    name: "gitActions",
    image: Logo1,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

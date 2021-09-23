import ReactLogo from "../Assets/stacks/react.svg";
import TerraformLogo from "../Assets/stacks/terraform.svg";
import DockerLogo from "../Assets/stacks/docker.svg";
import AWSLogo from "../Assets/stacks/aws.svg";

import GithubImage from "../Assets/projects/Github.JPG";
import DemoPage from "../Assets/projects/DemoPage.JPG";

// --------------------------------------- Project List
export const ProjectList = [
  {
    img: GithubImage,
    title: "Source Code",
    description:
      "It's a source code of this demo. You can you this for any purpose and don't forget give me a star.",
    tech_stack: "React, Docker, AWS, Terraform",
    github_url: "https://github.com/yenmai477/terraform_example",
    // demo_url: "https://gurupawar.github.io/spense/",
  },
  {
    img: DemoPage,
    title: "Demo Page",
    description:
      "We have created this page as a demo for our presentation about Terraform and Infrastructure as Code.",
    tech_stack: "Reactjs, Css",
    github_url: "https://github.com/yenmai477/terraform_example",
    demo_url: "",
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: "https://gurupawar.github.io/portfolio/assets/skill/html5.svg",
    name: "HTML",
  },
  {
    img: "https://gurupawar.github.io/portfolio/assets/skill/css3.svg",
    name: "CSS",
  },
  {
    img: "https://gurupawar.github.io/portfolio/assets/skill/javascript.svg",
    name: "JavaScript",
  },
  {
    img: ReactLogo,
    name: "React",
  },
  {
    img: TerraformLogo,
    name: "Terraform",
  },
  {
    img: DockerLogo,
    name: "Docker",
  },
  {
    img: AWSLogo,
    name: "AWS",
  },
  {
    img: "https://gurupawar.github.io/portfolio/assets/skill/git.svg",
    name: "Git",
  },
  // {
  //   img: "https://gurupawar.github.io/portfolio/assets/skill/responsive.svg",
  //   name: "Responsive",
  // },
];

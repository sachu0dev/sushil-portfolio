import { HoverEffect } from "./ui/card-hover-effect";

export function OtherProjects() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-KGBlankSpaceSketch text-white ">
          OTHER PROJECTS
        </h1>
      </div>
      <HoverEffect items={projects} />
    </>
  );
}
export const projects = [
  {
    title: "Typing Panda",
    description:
      "Typing Panda: Interactive game to enhance typing skills with customizable features for all skill levels.",
    link: "https://typingpanda.netlify.app",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

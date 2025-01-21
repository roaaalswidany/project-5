import Container from "../components/All Blog Posts/Container";
import Hero from "../components/Hero/Hero";

const Home = () => {
  const blogPosts = [
    {
      img: "/project-5/assets/img/1.jpg",
      title: "Alec Whitten • 1 Jan 2023",
      description: "Bill Walsh leadership lessons",
      img1: "/project-5/assets/img/icon.svg",
      content:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    },
    {
      img: "/project-5/assets/img/2.jpg",
      title: "Demi WIlkinson • 1 Jan 2023",
      description: "PM mental models",
      img1: "/project-5/assets/img/icon.svg",
      content:
        "Mental models are simple expressions of complex processes or relationships.",
    },
    {
      img: "/project-5/assets/img/3.jpg",
      title: "Candice Wu • 1 Jan 2023",
      description: "What is Wireframing?",
      img1: "/project-5/assets/img/icon.svg",
      content:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    },
    {
      img: "/project-5/assets/img/4.jpg",
      title: "Natali Craig • 1 Jan 2023",
      description: "How collaboration makes us better designers",
      img1: "/project-5/assets/img/icon.svg",
      content:
        "Collaboration can make our teams stronger, and our individual designs better.",
    },
    {
      img: "/project-5/assets/img/5.jpg",
      title: "Drew Cano • 1 Jan 2023",
      description: "Our top 10 Javascript frameworks to use",
      img1: "/project-5/assets/img/icon.svg",
      content:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
    },
    {
      img: "/project-5/assets/img/6.jpg",
      title: "Orlando Diggs • 1 Jan 2023",
      description: "Podcast: Creating a better CX Community",
      img1: "/project-5/assets/img/icon.svg",
      content:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
    },
  ];

  return (
    <>
      <Hero
        title="Stories and interviews"
        description="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
        input="Enter your email"
        btn="Subscribe"
      />
      <Container posts={blogPosts} />
    </>
  );
};

export default Home;

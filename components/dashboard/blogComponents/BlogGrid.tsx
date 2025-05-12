import React, { useState } from "react";
import Link from "next/link";

export const blogPosts = [
  {
    slug: "nature-secrets-in-cities",
    image: "/dashboard/images/NatureSecret.png",
    date: "23rd March, 2025",
    category: "News",
    title: "NATURE’S SECRETS IN CITIES",
    description:
      "Join us in our mission to rejuvenate our planet! Your support empowers tree planting projects that combat climate change and restore urban forests.",
    content: `Title: Reviving Our Earth: The Power of Tree Planting

In a world facing the challenges of climate change, every action counts. At our organization, we believe in the transformative power of trees. Join us as we embark on a journey to rejuvenate our planet through dedicated tree planting initiatives.

Trees are not just beautiful; they are essential to our ecosystem. They absorb carbon dioxide, provide oxygen, and support wildlife. By participating in our tree planting projects, you are not only helping to combat climate change but also restoring vital forests that have been lost over the years.

Your support is crucial. Whether you donate, volunteer, or spread the word, you play a vital role in this mission. Together, we can create a greener, healthier planet for future generations. Let’s make a difference, one tree at a time!`,
  },
  {
    slug: "plan-more-blog",
    image: "/dashboard/images/PlantMore.png",
    date: "3rd March, 2025",
    category: "Blog",
    title: "PLAN MORE BLOG",
    description:
      "Be a part of the solution! Your donations fuel initiatives that plant trees, helping to heal our environment and tackle climate change.",
    content: `This is the full blog post content for “Plan More Blog”. Detailed info, stats, and storytelling can go here.`,
  },
  {
    slug: "tech-innovations-for-2024",
    image: "/dashboard/images/TechInnovation.png",
    date: "23rd January, 2025",
    category: "Announcement",
    title: "TECH INNOVATIONS FOR 2024",
    description:
      "Help us make a difference! Your contributions enable tree planting efforts that reduce carbon and fight against climate change.",
    content: `This blog post talks about the role of tech in climate change mitigation efforts for the year 2024.`,
  },
  {
    slug: "how-deforestation-affect-us",
    image: "/dashboard/images/HowDeforestation.png",
    date: "23rd February, 2025",
    category: "News",
    title: "HOW DEFORESTATION AFFECT US",
    description:
      "Together we can create a greener future! Your support funds tree planting initiatives that reduce ecosystems and combat climate change.",
    content: `Full blog post for “How Deforestation Affects Us”, including impact analysis and expert commentary.`,
  },
];

const categories = ["All", "News", "Announcement", "Blog"];

const BlogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="px-4 md:px-[120px] my-[108px]">
      {/* Filter Header */}
      <div className="flex gap-[32px] mb-[48px] overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-[16px] font-medium underline-offset-4 whitespace-nowrap ${
              selectedCategory === category
                ? "underline text-black"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === "All" ? "View All" : category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
        {filteredPosts.map((post, index) => (
          <div key={index} className="flex flex-col min-h-[400px]">
            <div className="relative w-full md:w-[533px]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[200px] md:min-h-[220px] object-cover"
              />
              <div className="absolute bottom-0 h-[50px] w-full text-white text-[14px] text-center font-bold flex justify-center items-center backdrop-blur-md bg-white/30 z-10">
                <div className="absolute bottom-4 left-4 text-white px-[12px] font-medium">
                  {post.date}
                </div>
                <div className="absolute bottom-4 right-4 text-white px-[12px] font-medium">
                  {post.category}
                </div>
              </div>
            </div>
            <h3 className="text-[20px] md:text-[24px] underline font-bold mt-[24px] mb-[12px] leading-tight uppercase">
              {post.title}
            </h3>
            <p className="text-[14px] md:text-[16px] text-gray-700 text-left mb-[16px]">
              {post.description}
            </p>
            <Link
              href={`/dashboard/blog/${post.slug}`}
              className="text-sm font-semibold underline underline-offset-4 hover:text-green-700 transition"
            >
              Read post →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;

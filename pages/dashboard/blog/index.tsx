import React from "react";

import FooterSection from "../../../components/dashboard/homeComponents/FooterSection";
import BlogHeroSection from "../../../components/dashboard/blogComponents/BlogHeroSection";
import BlogGrid from "../../../components/dashboard/blogComponents/BlogGrid";

const Blog = () => {
  return (
    <div>
      <BlogHeroSection />
      <BlogGrid />
      <FooterSection />
    </div>
  );
};

export default Blog;

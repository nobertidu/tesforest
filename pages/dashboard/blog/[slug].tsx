import { useRouter } from 'next/router';
import { blogPosts } from '../../../components/dashboard/blogComponents/BlogGrid';
import Head from 'next/head';
import Navbar from '../../../components/dashboard/homeComponents/Navbar';
import {
  FaInstagram,
  FaWhatsapp,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { LiaFacebookSquare } from "react-icons/lia";

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    return <p className="p-10 text-xl">Post not found</p>;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const goToPost = (index) => {
    const nextPost = blogPosts[index];
    if (nextPost) router.push(`/dashboard/blog/${nextPost.slug}`);
  };

  return (
    <>
      <Head>
        <title>{post.title} | Blog</title>
      </Head>

      {/* Header */}
      <div
        className="min-h-[400px] bg-cover bg-center text-left"
        style={{ backgroundImage: "url('/dashboard/images/BgTexture.png')" }}
      >
        <Navbar />
        <div className="px-4 md:px-[120px] mx-auto pt-12">
          <h1 className="text-[32px] md:text-[44px] font-bold text-[#000]">{post.title}</h1>
          <p className="mt-4 text-[14px] md:text-[16px] text-[#7A7A7A] max-w-[593px]">
            Join us in our mission to rejuvenate our planet! Your support empowers tree planting projects that combat climate change and restore vital forests.
          </p>
          <div className="mt-[48px] text-[14px] font-semibold flex justify-between md:justify-start md:space-x-80">
            <span>{post.date}</span>
            <span>{post.category}</span>
          </div>
          <div className="mt-[21px]">
            <button
              className="text-[14px] underline"
              onClick={() => router.back()}
            >
              Back
            </button>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="px-4 md:px-[45px] py-[40px] md:py-[80px] max-w-[1200px] mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[200px] md:h-[400px] object-cover mb-5 md:mb-10"
        />
        <p className="text-[14px] md:text-[16px] text-[#7A7A7A] leading-relaxed whitespace-pre-line">
          {post.content}
        </p>

        {/* Share + Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-6 md:gap-0">
          {/* Share Section */}
     <div className="flex items-center gap-4 text-[#7A7A7A] text-sm">
  <span>Share</span>
  
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <>{FaInstagram({ size: 16, className: "hover:text-black transition-colors" })}</>
  </a>
  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
    <>{FaWhatsapp({ size: 16, className: "hover:text-black transition-colors" })}</>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <>{FaXTwitter({ size: 16, className: "hover:text-black transition-colors" })}</>
  </a>
  <a href="#" onClick={(e) => { e.preventDefault(); handleCopyLink(); }} className="hover:text-black transition-colors">
    <>{LiaFacebookSquare({ size: 16 })}</>
  </a>
</div>

          {/* Pagination Buttons */}
          <div className="flex gap-4">
            <button
              disabled={postIndex === 0}
              onClick={() => goToPost(postIndex - 1)}
              className={`px-4 py-1 rounded bg-[#cfe5d3] flex items-center gap-2 text-sm ${
                postIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#b3d4ba]'
              }`}
            >
                  <>{FaArrowLeft({ size: 14 })}</>
            </button>

            <button
              disabled={postIndex === blogPosts.length - 1}
              onClick={() => goToPost(postIndex + 1)}
              className={`px-4 py-1 rounded bg-[#cfe5d3] flex items-center gap-2 text-sm ${
                postIndex === blogPosts.length - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-[#b3d4ba]'
              }`}
            >
              Next <>{FaArrowRight({ size: 14 })}</>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;

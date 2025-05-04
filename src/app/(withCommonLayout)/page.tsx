import Banner from "@/components/banner/Banner";
import LatestPosts from "@/components/latestPosts/LatestPost";
import { getAllPosts } from "@/services/postServices";

const HomePage = async() => {
  const posts = await getAllPosts("isr")
  console.log(posts);
  return (
    <div className="">
      <Banner/>
      <LatestPosts posts={posts}/>
    </div>
  );
};

export default HomePage;

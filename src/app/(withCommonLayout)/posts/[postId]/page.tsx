import PostDetails from "@/components/ui/PostDetails";
import { getPost } from "@/services/postServices";

type TProps = {
  params: {
    postId: string;
  };
};

const PostDetailpage = async ({ params }: TProps) => {
  const post = await getPost(params.postId);
  return (
    <div className="p-7">
      <PostDetails post={post} />
    </div>
  );
};

export default PostDetailpage;

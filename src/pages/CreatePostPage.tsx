import { useNavigate } from "react-router-dom";
import PostCreateForm from "../components/posts/PostForm";
import { Box } from "@mui/material";
import PostService from "../service/post.service";
import { PostFormValues } from "../types";

const CreatePostPage = () => {
    const navigate = useNavigate();

    const handleSubmit = async (data: PostFormValues) => {
        return await PostService.createPost(data);
    };

    const handleDiscard = () => {
        navigate("/journals");
    };

    return (
        <Box>
            <PostCreateForm
                post={undefined}
                onSubmit={handleSubmit}
                onDiscard={handleDiscard}
            />
        </Box>
    );
};

export default CreatePostPage;

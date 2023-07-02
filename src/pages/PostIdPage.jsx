import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostServise from "../API/PostServise";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostServise.getById(id)
        setPost(response.data)
    })
    const [fetchPostComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostServise.getCommentsById(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchPostComments(params.id)

    }, [])
    console.log(comments)

    return (
        <div>
            <h1>Страница поста c id = {params.id}</h1>
            <div className="post__wrapper">
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>
            </div>
            <h2>Коментарии</h2>
            <div className="comment__wrapper">
                {comments.map(com => 
                <div className="comment">
                    <h3>{com.name}</h3>
                    <p>{com.body}</p>
                </div>
                )}
            </div>
        </div>
    )
}

export default PostIdPage
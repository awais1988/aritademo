import axios from "../../config/axiosConfig";
import { endpoints } from "../../config/apiConfig";
import { AxiosResponse } from "axios";
import { PostData } from "../../types";

async function getUserPosts(userId: number): Promise<PostData[] | Error> {
  try {
    // Correctly typing the response
    const response: AxiosResponse<PostData[]> = await axios.get<PostData[]>(
      `${endpoints.blogs.getUserPosts}${userId}/posts`
    );
    return response.data; // Returning only the data part of the response
  } catch (error) {
    return error as Error; // Ensuring error is cast to Error type
  }
}

async function getPostDetail(postId: number): Promise<PostData | Error> {
  try {
    // Correctly typing the response
    const response: AxiosResponse<PostData> = await axios.get<PostData>(
      `${endpoints.blogDetail.getDetailBlog}${postId}`
    );
    return response.data; // Returning only the data part of the response
  } catch (error) {
    return error as Error; // Ensuring error is cast to Error type
  }
}

async function updatePostDetail(
  postId: number,
  postDetail: PostData
): Promise<PostData | Error> {
  try {
    // Correctly typing the response
    const response: AxiosResponse<PostData> = await axios.put<PostData>(
      `${endpoints.blogDetail.updatePostDetail}${postId}`,
      postDetail
    );
    return response.data; // Returning only the data part of the response
  } catch (error) {
    return error as Error; // Ensuring error is cast to Error type
  }
}

export const blogsApi = {
  getUserPosts,
  getPostDetail,
  updatePostDetail,
};

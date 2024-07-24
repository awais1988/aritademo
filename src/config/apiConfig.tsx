const rootURL = process.env.REACT_APP_BASE_API_URL as string;

interface Endpoints {
  dashboard: {
    getUserData: string;
  };
  blogs: {
    getUserPosts: string;
  };
  blogDetail: {
    getDetailBlog: string;
    updatePostDetail: string;
  };
}

export const endpoints: Endpoints = {
  dashboard: {
    getUserData: `${rootURL}/users/`,
  },
  blogs: {
    getUserPosts: `${rootURL}/users/`,
  },
  blogDetail: {
    getDetailBlog: `${rootURL}/posts/`,
    updatePostDetail: `${rootURL}/posts/`,
  },
};

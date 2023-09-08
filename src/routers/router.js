import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout";
import Index from "../pages";
import UserIndex from "../pages/users";
import UserEdit from "../pages/users/edit";
import UserCreate from "../pages/users/create";
import PostIndex from "../pages/posts";
import PostsEdit from "../pages/posts/edit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Index/>,
            },
            {
                path: "users",
                children: [
                    {
                        index: true,
                        element: <UserIndex/>,
                    },
                    {
                        path: ":userId/edit",
                        element: <UserEdit/>,
                    },
                    {
                        path: "create",
                        element: <UserCreate />,
                    },
                ]
            },
            {
                path: "posts",
                children: [
                    {
                        index: true,
                        element: <PostIndex/>,
                    },
                    {
                        path: ":postsId/edit",
                        element: <PostsEdit/>,
                    },
                ]
            }
        ]
    }
]);
export default router;
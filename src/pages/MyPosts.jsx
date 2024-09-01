import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';
import { useSelector } from 'react-redux';

function MyPosts() {
    const userData = useSelector((state) => state.auth.userData);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            if (!userData?.$id) return; // Safely access userData

            const postsData = await appwriteService.getPosts([]);
            if (postsData) {
                const userPosts = postsData.documents.filter((post) => post.userid === userData.$id);
                setPosts(userPosts);
            }
        };

        fetchPosts();
    }, [userData]);

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default MyPosts;



// import React, { useState, useEffect } from 'react'
// import { Container, PostCard } from '../components'
// import appwriteService from "../appwrite/config";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { Login as LoginComponent } from '../components'


// function MyPosts() {

//     const userData = useSelector((state) => state.auth.userData);
//     const [posts, setPosts] = useState([])
//     useEffect(() => {
//         const fetchPosts = async () => {
//             const postsData = await appwriteService.getPosts([]);
//             if (postsData) {
//                 // Filter posts based on user authorization
//                 const userPosts = postsData.documents.filter((post) => {
//                     return post.userid === userData.$id;
//                 });
//                 setPosts(userPosts);
//             }
//         };

//         fetchPosts(); // Call the fetch function
//     }, [userData]);


//     appwriteService.getPosts([]).then((posts) => {
//         if (posts) {
//             console.log(posts)
//             setPosts(posts.filter(checkAuth))
//             // {posts.filter((post)=>(

//             // ))}
//         }
//     })





    
//     // const [posts, setPosts] = useState([])
//     // // const { slug } = useParams();
//     // // const navigate = useNavigate();
//     // useEffect(() => {}, [])
//     // appwriteService.myPosts([]).then((posts) => {
//     //     if (posts) {
//     //         setPosts(posts.documents)
//     //     }
//     // })
    
//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//                 </Container>
//         </div>
//       )
// }

// export default MyPosts
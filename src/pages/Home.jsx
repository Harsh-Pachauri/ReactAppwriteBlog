import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom'
import {Logo} from '../components/index'
import {Logo2} from '../components/index'


function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div
                style={{
                    margin: '0'
                }}
                className=" w-full py-8 mt-4 text-center">
                <Container>

                    <div style={{
                        padding: '24vh 0'
                    }} className=" flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-white text-2xl font-bold hover:text-gray-500">
                                {/* <div className='mr-4'>
                                    <Link to='/'>
                                        <Logo2 />

                                    </Link>
                                </div> */}
                                <div>

                                    Please Login To Read Your Favourite Blogs !!
                                </div>
                                <div>Make Sure You Are Viewing In Desktop.</div>

                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className=' w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
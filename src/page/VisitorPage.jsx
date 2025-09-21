import React, { useState, useEffect } from "react";
import CustomLayout from "../components/layout/customlayout";
import { getSimplifiedProfile } from "../service/user";
import ProfileHeader from "../components/home/profileheader";
import HomeLayout from "../components/layout/homelayout";
import { useParams, useSearchParams } from "react-router-dom";
import { getBlogs } from "../service/blog";
import BlogCardOther from "../components/home/blogcardother";

export default function VisitorPage() {
    const [other, setOther] = useState(null);
    const [otherBlogs, setOtherBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const {userid} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const tabKey = parseInt(searchParams.get('tabKey'));

    // 加载他人主页数据
    useEffect(() => {
        const fetch = async () => {
            if(!tabKey) {
                setSearchParams({tabKey: 2});
            }
            setLoading(true);
            const fetched_other = await getSimplifiedProfile(userid);
            const fetched_blogs = await getBlogs(userid);
            setOther(fetched_other);
            setOtherBlogs(fetched_blogs);
            setLoading(false);
        }
        fetch();
    }, [userid]);

    return (
        <CustomLayout content={
            <HomeLayout 
                header={<ProfileHeader profile={other} isVisitor={true} />} 
                blogCard={<BlogCardOther myBlogs={otherBlogs} profile={other} loading={loading} />} 
                tabKey={tabKey} 
            />
        }/>
    )
}
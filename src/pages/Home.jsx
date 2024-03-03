import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setPosts as storePosts } from "../store/postsSlice";
import { useNavigate } from "react-router-dom";
import banner from "../assets/banner.jpeg";
import { TypeAnimation } from "react-type-animation";
import PostCarousel from "../components/Carousel/PostCarousel";
function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
          dispatch(storePosts(posts.documents));
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        if (userData === null) {
          navigate("/login");
        }
      });
  }, []);

  //   if (posts.length === 0) {
  //     return (
  //       <div className="w-full py-8 mt-4 text-center">
  //         <Container>
  //           <div className="flex flex-wrap">
  //             <div className="p-2 w-full">
  //               <h1 className="text-2xl font-bold hover:text-gray-500">
  //                 {userData && "No posts available .kindly Add a post"}
  //               </h1>
  //             </div>
  //           </div>
  //         </Container>
  //       </div>
  //     );
  //   }
  if (posts.length === 0) {
    return (
      <div className="md: px-12 p-4 max-w-screen-2x1 mx-auto mt-20">
        <motion.div
          className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9"
          animate={{ scale: 1, y: 0 }}
          drag
          initial={{ scale: 0, y: 1000 }}
          transition={{ type: "spring", duration: 2, delay: 0 }}
        >
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            <div>
              <img
                src={banner}
                alt=""
                className="lg:h-[386px] rounded-xl rounded-tl-[80px]"
              />
            </div>

            <div className="md:w-3/5">
              <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
                Experience the Future{""}
                <br></br>
                <TypeAnimation
                  sequence={[
                    " <Engineering/>",
                    2000,
                    " <Development/>",
                    2000,
                    " <Bugs/>",
                    2000,
                    " <Errors/>",
                    2000,
                    " <Failure/>",
                    2000,
                    " <Success/>",
                    2000,
                    " <Innovation/>",
                    2000,
                    " <Technology/>",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="inline-block md:text-7xl text-4xl"
                  style={{
                    // fontSize: "2rem",
                    // display: "inline-block",
                    color: "#196EF5",
                  }}
                  repeat={Infinity}
                />
              </h2>
              <p className="text-[#282727] text-2x1 mb-8">
                Welcome to{" "}
                <span className="text-[#196EF5] font-bold">
                  Tech Beyond Pixel{" "}
                </span>
                - Your Ultimate Destination for Tech Insights and Industry
                Trends!.🚀 Welcome to a digital realm where innovation meets
                information! At Tech Beyond Pixel, we're on a mission to unravel
                the latest in technology, explore the dynamic IT industry, and
                decode the future of digital landscapes. Whether you're a tech
                enthusiast, a seasoned professional, or just curious about the
                ever-evolving world of technology, you're in the right place. 👩‍💻
                Dive into a curated collection of articles, guides, and deep
                dives that demystify the complex and bring you closer to the
                pulse of the tech universe. From cutting-edge advancements to
                practical tips, we've got you covered
                <p>
                  <span className="text-[#196EF5] font-bold">
                    Tech Beyond Pixel{" "}
                  </span>
                  —Beyond Pixels, Beyond Boundaries. 🌌🚀Where technology meets
                  boundless imagination!
                </p>
              </p>
              <div></div>
            </div>
          </div>
        </motion.div>

        <h1 className="text-2xl pt-6 font-bold hover:text-gray-500 text-center">
          {userData && "No posts available .kindly Add a post"}
        </h1>
      </div>
    );
  }
  return (
    <>
      <div className=" md:px-12 p-4 max-w-screen-2x1 mx-auto mt-4">
        <motion.div
          className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9"
          animate={{ scale: 1, y: 0 }}
          drag
          initial={{ scale: 0, y: 1000 }}
          transition={{ type: "spring", duration: 2, delay: 0 }}
        >
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            <div>
              <img
                src={banner}
                alt=""
                className="lg:h-[386px] rounded-xl rounded-tl-[80px]"
              />
            </div>

            <div className="md:w-3/5">
              <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
                Experience the Future {""}
                <br></br>
                <TypeAnimation
                  sequence={[
                    " <Engineering/>",
                    2000,
                    " <Development/>",
                    2000,
                    " <Bugs/>",
                    2000,
                    " <Errors/>",
                    2000,
                    " <Failure/>",
                    2000,
                    " <Success/>",
                    2000,
                    " <Innovation/>",
                    2000,
                    " <Technology/>",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="inline-block md:text-7xl text-4xl"
                  style={{
                    // fontSize: "2rem",
                    // display: "inline-block",
                    color: "#196EF5",
                  }}
                  repeat={Infinity}
                />
              </h2>
              <p className="text-[#282727] text-2x1 mb-8">
                Welcome to{" "}
                <span className="text-[#196EF5] font-bold">
                  Tech Beyond Pixel{" "}
                </span>
                - Your Ultimate Destination for Tech Insights and Industry
                Trends!.🚀 Welcome to a digital realm where innovation meets
                information! At Tech Beyond Pixel, we're on a mission to unravel
                the latest in technology, explore the dynamic IT industry, and
                decode the future of digital landscapes. Whether you're a tech
                enthusiast, a seasoned professional, or just curious about the
                ever-evolving world of technology, you're in the right place. 👩‍💻
                Dive into a curated collection of articles, guides, and deep
                dives that demystify the complex and bring you closer to the
                pulse of the tech universe. From cutting-edge advancements to
                practical tips, we've got you covered
                <p>
                  <span className="text-[#196EF5] font-bold">
                    Tech Beyond Pixel{" "}
                  </span>
                  —Beyond Pixels, Beyond Boundaries. 🌌🚀Where technology meets
                  boundless imagination!
                </p>
              </p>
              <div></div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="my-10"
          animate={{ scale: 1, y: 0 }}
          initial={{ scale: 0, y: 1000 }}
          transition={{ type: "tween", duration: 2, delay: 0 }}
        >
          <PostCarousel posts={posts} />
        </motion.div>

        {/* <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post} />
          </div>
        ))}
      </div> */}
      </div>
    </>
  );
}

export default Home;

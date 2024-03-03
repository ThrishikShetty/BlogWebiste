import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import HashLoader from "react-spinners/HashLoader";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//library used:=> see in dependencies
//npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form
//environment varaibles => create new file
//conf folder and file
//appwrite folder
//store=>reduxtoolkit
//main.jsx d wraper store with provider

function App() {
  const [loading, setLoading] = useState(false);
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const dispatch = useDispatch();
  //while fecting the data there maybe some delay so we tracking it using usestate and useeffect to check whter the user is logged iin or not
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          //disptach it store and update the store
          dispatch(login({ userData }));
          toast.custom(
            (t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.pixabay.com/photo/2021/07/09/03/24/log-in-6398177_1280.png"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        Logged In
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Welcome Back to TechBeyondPixels,{userData.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            ),
            { id: "success1" }
          );
        } else {
          dispatch(logout());
          toast.warn("logged out", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://cdn.pixabay.com/photo/2015/12/08/19/08/castle-1083570_1280.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Please Login to view posts
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      TechBeyondPixels
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ),
          { id: "success5" }
        );
      }); //fianlly runs very time
    // .finally(() => setLoading(false));
  }, []);

  //loading screen
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-white">
      <Toaster position="top-center" reverseOrder={true} />
      {/* <ToastContainer /> */}
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <HashLoader
      style={style}
      color="#9a36d6"
      cssOverride={{}}
      size={100}
      speedMultiplier={2}
    />
    // <ClipLoader
    //   color={"#9A7AF1"}
    //   loading={loading}
    //   cssOverride={override}
    //   size={150}
    //   aria-label="Loading Spinner"
    //   data-testid="loader"
    // />
  ); //()
}

export default App;

import React from "react";
import img from "../resources/hero.svg";
import image_01 from "../resources/image_01.jpg"
import image_02 from "../resources/image_02.avif"
import image_03 from "../resources/image_03.jpg"
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 font-[Poppins] mt-52">
        <div className="md:w-2/4 text-center">
          <h2 className="text-5xl font-semibold leading-tight">
            Explore E-Learning Content
            <span className="text-green-500">
              {" "}
              for Electronics and Telecommunication Engineering Department
            </span>
          </h2>
          <p className="text-gray-500 mt-5 text-left">
            Welcome to our platform where you can easily access e-learning
            content like YouTube Videos and PDF's for the Electronics and
            Telecommunication Engineering Department. Our system provides
            resources designed by our faculty members at PICT.
          </p>
        </div>
        <div className="w-full md:w-2/4">
          <img src={img} alt="img" className="w-full" />
        </div>
      </div>

      <hr className="my-20 border-gray-700 w-3/4 mx-auto" />

      

      <div className="flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 font-[Poppins] mt-4">
      <div className="md:w-2/4 text-center md:text-left md:mr-8">
        <h2 className="text-4xl font-semibold leading-tight mb-4">
          S.E (Electronics & Telecommunication Engineering)
        </h2>
        <p className="text-gray-500 text-lg mb-6">
          Get Access to all the resources for all the chapters and units inside{" "}
          <span className="bg-yellow-200 text-yellow-900 font-semibold">
            Second Year
          </span>{" "}
          Engineering in E&TE
        </p>
        <Link to={'/seContent'}>
        <button className="bg-green-500 text-white text-lg px-6 py-2 rounded-xl hover:bg-green-600">
          Explore ➡
        </button>
        </Link>
      </div>
      <div className="w-full md:w-2/4 mt-8 md:mt-0 flex justify-center">
        <img
          src={image_01}
          alt="Description"
          className="w-3/4 h-3/4 object-contain"
        />
      </div>
    </div>


    <div className="flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 font-[Poppins] mt-4">
  
  <div className="w-full md:w-2/4 mt-8 md:mt-0 flex justify-center md:mr-8">
    <img
      src={image_02}
      alt="Description"
      className="w-3/4 h-3/4 object-contain"
    />
  </div>
  
  <div className="md:w-2/4 text-center md:text-left">
    <h2 className="text-4xl font-semibold leading-tight mb-4">
      T.E (Electronics & Telecommunication Engineering)
    </h2>
    <p className="text-gray-500 text-lg mb-6">
      Get Access to all the resources for all the chapters and units inside{" "}
      <span className="bg-yellow-200 text-yellow-900 font-semibold">
        Third Year
      </span>{" "}
      Engineering in E&TE
    </p>
    <Link to={'/teContent'}>
    <button className="bg-green-500 text-white text-lg px-6 py-2 rounded-xl hover:bg-green-600">
      Explore ➡
    </button>
    </Link>
  </div>
</div>

    

<div className="flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 font-[Poppins] mt-4">
      <div className="md:w-2/4 text-center md:text-left md:mr-8">
        <h2 className="text-4xl font-semibold leading-tight mb-4">
          B.E (Electronics & Telecommunication Engineering)
        </h2>
        <p className="text-gray-500 text-lg mb-6">
          Get Access to all the resources for all the chapters and units inside{" "}
          <span className="bg-yellow-200 text-yellow-900 font-semibold">
            Final Year
          </span>{" "}
          Engineering in E&TE
        </p>
        <Link to={'/beContent'}>
        <button className="bg-green-500 text-white text-lg px-6 py-2 rounded-xl hover:bg-green-600">
          Explore ➡
        </button>
        </Link>
      </div>


      <div className="w-full md:w-2/4 mt-8 md:mt-0 mb-20 flex justify-center">
        <img
          src={image_03}
          alt="Description"
          className="w-3/4 h-3/4 object-contain"
        />
      </div>
    </div>
    </div>
  );
};

export default Home;

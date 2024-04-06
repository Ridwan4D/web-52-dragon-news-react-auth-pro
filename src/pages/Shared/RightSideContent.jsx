import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const RightSideContent = () => {
  return (
    <div>
      <div className="mb-10">
        <div className="mt-3 space-y-2">
          <h3 className="text-3xl font-semibold">Login With</h3>
          <div className="w-full">
            <button
              type="button"
              className="w-full flex justify-center items-center gap-2 rounded-md bg-white text-sm text-blue-400 border-2 border-blue-300 py-1 hover:bg-gray-100"
            >
              <FaGoogle /> Login with Google
            </button>
          </div>
          <div className="w-full">
            <button
              type="button"
              className="w-full flex justify-center items-center gap-2 rounded-md bg-white text-sm text-gray-800 border-2 border-gray-800 py-1 hover:bg-gray-100"
            >
              <FaGithub /> Login with Github
            </button>
          </div>
        </div>
      </div>
      {/* Find us on */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold">Find Us On</h3>
        <div className="mt-3 space-y-3 border-2 rounded-lg py-4 font-semibold">
          <a
            href="https://www.facebook.com/"
            className="px-4 flex items-center gap-2 text-blue-700"
            target="_blank"
          >
            <span className="p-2 bg-gray-300 rounded-full">
              <FaFacebookF></FaFacebookF>
            </span>
            Facebook
          </a>
          <a
            href="https://twitter.com/?lang=en"
            className="px-4 py-4 flex items-center gap-2 border-y-2 text-blue-500"
            target="_blank"
          >
            <span className="p-2 bg-gray-300 rounded-full">
              <FaTwitter></FaTwitter>
            </span>
            Twitter
          </a>
          <a
            href="https://www.instagram.com/"
            className="px-4 flex items-center gap-2"
            target="_blank"
          >
            <span className="p-2 bg-gray-300 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 ">
              <FaSquareInstagram />
            </span>
            Instagram
          </a>
        </div>
      </div>
      {/* Q zone */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold">Q Zone</h3>
        <div>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideContent;

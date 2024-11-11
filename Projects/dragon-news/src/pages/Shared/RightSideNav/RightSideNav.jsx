import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qZone1 from '../../../assets/swimming.png'
import qZone2 from '../../../assets/playground.png'
import qZone3 from '../../../assets/class.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h3 className="text-3xl">Login with</h3>
        <button className="btn btn-outline w-full">
          <FaGoogle className="text-sm"></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub className="text-sm"></FaGithub>
          Github
        </button>
      </div>

      {/* //Another section  */}
      <div className="p-4 space-y-3 mb-6 font-sm">
        <h3 className="text-3xl">Find Us on</h3>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=" "
        >
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a
          className="p-4 flex text-lg items-center border"
          href=" "
        >
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          href=" "
        >
          <FaInstagram className="mr-3"></FaInstagram>
          Instagram
        </a>
      </div>

      {/* {Q zone section } */}

      <div className="p-4 space-y-3 mb-6">
        <h3 className="text-3xl">Q Zone</h3>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>


    </div>
  );
};

export default RightSideNav;

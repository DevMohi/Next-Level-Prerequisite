import { AiFillCheckCircle } from "react-icons/ai";

const Featrue = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center"> 
        <AiFillCheckCircle className="text-green-500 mr-2"></AiFillCheckCircle> {feature}
      </p>
    </div>
  );
};

export default Featrue;

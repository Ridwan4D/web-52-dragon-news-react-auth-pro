import moment from "moment";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="text-center">
      <img src={logo} alt="" className="mx-auto"/>
      <p className="text-lg text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium ">
        <span className="text-[#403F3F]">{moment().format("dddd")}</span>, &nbsp;
        <span className="text-[#706F6F]">
          {moment().format("MMMM DD, YYYY")}
        </span>
      </p>
    </div>
  );
};

export default Header;

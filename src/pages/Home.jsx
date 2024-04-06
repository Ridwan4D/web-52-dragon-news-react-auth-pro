import BreakingNews from "../components/BreakingNews";
import Header from "./Shared/Header";
import LeftSideContent from "./Shared/LeftSideContent";
import Nav from "./Shared/Nav";
import RightSideContent from "./Shared/RightSideContent";

const Home = () => {
  return (
    <div>
      {/* header */}
      <Header></Header>
      {/* Breaking news */}
      <BreakingNews></BreakingNews>
      {/* navbar */}
      <Nav></Nav>
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border-2">
          <LeftSideContent></LeftSideContent>
        </div>
        <div className="md:col-span-2 border-2">
          <h3 className="text-3xl">News Coming Soon</h3>
        </div>
        <div className="">
          <RightSideContent></RightSideContent>
        </div>
      </div>
    </div>
  );
};

export default Home;

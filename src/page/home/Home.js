import Interier_Design from "../../component/home/interier_design/Interier_Design";
import View_Services from "../../component/home/view_services/View_Services";
import View_Projects from "../../component/home/view_projects/View_Projects";
import Inform from "../../component/home/inform/Inform";
import Before_After from "../../component/home/before_after_img/Before_After";
import Reviews from "../../component/home/reviews/Reviews";
import Answers from "../../component/home/answers/Answers";
import About_us from "../../component/home/about_us/About_us";
import Our_Team from "../../component/home/out_team/Our_Team";
import Our_Blog from "../../component/home/our_blog/Our_Blog";

function Home() {
  return (
    <>
      <Interier_Design />
      <View_Services />
      <View_Projects />
      <Inform />
      <Before_After />
      <Reviews />
      <Answers />
      <About_us />
      <Our_Team />
      <Our_Blog />
    </>
  );
}

export default Home;

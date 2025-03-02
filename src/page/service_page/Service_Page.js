import Service_Page from "../../component/service_single/service_page/Service_Page";
import Timeline from "../../component/service_single/timeline/Timeline";
import Latest from "../../component/service_single/latest/Latest";
import Answers from "../../component/service_single/answers/Answers";

function Service_Single() {
  return (
    <>
      <Service_Page />
      <Timeline />
      <Latest />
      <Answers />
    </>
  );
}

export default Service_Single;

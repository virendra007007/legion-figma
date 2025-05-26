import bgImage from "../assets/image/backgrounImage.png";
import video from "../assets/image/video.mp4";

const Video = () => {
  return (
    <>
      <div
        className=" p-0 relative  flex justify-center m-auto items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-gradient-to-bl from-[#02000c] to-[#1e1c25] text-white opacity-75 h-full w-full absolute top-0 right-0" />
        <div className=" py-7  max-w-7xl px-3 mx-auto  items-center z-50">
          <video
            autoPlay
            loop
            muted
            className="w-full rounded-4xl z-20  border-2 border-b-gray-700 "
            src={video}
          ></video>
        </div>
      </div>
    </>
  );
};

export default Video;

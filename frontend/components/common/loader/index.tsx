import React from "react";
// import { ThreeDots } from "react-loader-spinner";
import { PuffLoader } from "react-spinners";
const Loader = ({ type, loading, color }: { type?: string, loading?: boolean, color?: string }) => {
  if (type === "dots") {
    return (
      <PuffLoader color={color ? color : "#000"} loading={loading} size={60} />

      // <ThreeDots
      //   height="20"
      //   width="20"
      //   radius="10"
      //   color={"#fff"}
      //   ariaLabel="three-dots-loading"
      //   wrapperStyle={{}}
      //   visible={true}
      // />
    );
  }
  return (
    <div
      className="flex items-center top-0 left-0 z-[10000000] justify-center"
      style={{
        width: "100vw",
        position: "fixed",
        height: "100vh",
        background: "#ffffffc3",
      }}
    >
      {/* <div className="w-4"></div> */}
      <PuffLoader color={color ? color : "#000"} loading={loading} size={150} />
      {/* <ThreeDots
        height="70"
        width="70"
        radius="10"
        color={"#000"}
        ariaLabel="three-dots-loading"
        visible={true}
      /> */}
    </div>
  );
};

export default Loader;

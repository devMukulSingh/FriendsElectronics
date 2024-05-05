'use client'
import { ThreeCircles } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className='flex justify-center mt-32 w-full h-screen'>
      <ThreeCircles
        visible={true}
        height="50"
        width="50"
        color="#000000"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loading
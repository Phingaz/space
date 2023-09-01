/* eslint-disable react/prop-types */
import { Header } from "./Header";

function Wrapper(props) {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div className="w-[min(95%,1000px)] h-[calc(100svh-80px)] flex items-center">{props.children}</div>
      </div>
    </>
  );
}

export default Wrapper;

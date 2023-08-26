/* eslint-disable react/prop-types */
import { Header } from "./Header";

function Wrapper(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}

export default Wrapper;

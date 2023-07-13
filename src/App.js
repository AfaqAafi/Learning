import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

// TODO: its object after rendering to the DOM its convert to HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

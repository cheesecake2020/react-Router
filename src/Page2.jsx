import { Link } from "react-router-dom";
export const Page2 = () => {
  return (
    <div>
      <h1>２ページです</h1>
      <Link to="/page2/100">Url parameter</Link>
      <br />
      <Link to="/page2/200?name=hogehoge">Query parameter</Link>
    </div>
  );
};

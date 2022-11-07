import { Link } from "react-router-dom";

const LinkButton = ({ text, path, className }) => {
  return (
    <Link
      to={path}
      className={`${className} w-24 h-8 bg-transparent text-black no-underline border border-black rounded-sm text-center align-middle cursor-pointer
			transition duration-300 hover:bg-black hover:text-amber-400`}
    >
      {text}
    </Link>
  );
};
export default LinkButton;

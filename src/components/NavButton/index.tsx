import { Link } from "react-router-dom";

interface NavButtonProps {
  label: string;
  path: string;
}

function NavButton({ label, path }: NavButtonProps) {
  return (
    <Link to={ path }>
      <button type="button">{ label }</button>
    </Link>
  );
}

export default NavButton;

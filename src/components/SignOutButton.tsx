import { FC, useState, ButtonHTMLAttributes } from "react";
import Button from "./ui/Button";

// what the extend part says is this class should
interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton: FC<SignOutButtonProps> = ({ ...props }) => {
  const [isSignOut, setIsSigningOut] = useState<boolean>(false);
  return <Button {...props} variant="ghost"></Button>;
};

export default SignOutButton;

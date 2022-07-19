import "./TopBar.sass"
import { ArrowLeft, SignOut } from "phosphor-react";

type Props = {
  back?: boolean;
  exit?: boolean;
}

export default function TopBar({back, exit}: Props) {
  return (
    <div className="topbar">
      { back && <ArrowLeft size={28} /> }
      { exit && <SignOut size={28} /> }
    </div>
  )
}
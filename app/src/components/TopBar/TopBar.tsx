import "./TopBar.sass"

type Props = {
  back?: boolean;
  exit?: boolean;
}

export default function TopBar({back, exit}: Props) {
  return (
    <div className="topbar">
      { back && "back" }
      { exit && "logout" }
    </div>
  )
}
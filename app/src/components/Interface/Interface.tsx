import "./Interface.sass";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function Interface({ children }: Props) {
  return <div className="interface" data-aos="zoom-in">{children}</div>;
}

import "./Version.sass";

type Props = {
  info: string;
};

export default function Version({ info }: Props) {
  return <div className="version">Versão {info}</div>;
}

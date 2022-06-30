import "./Space.sass";

type Props = {
  pixels: number;
};

export default function Space({ pixels }: Props) {
  return <div className="space" style={{ height: pixels }}></div>;
}

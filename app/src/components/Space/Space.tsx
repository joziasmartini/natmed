import "./Space.sass";

type Props = {
  pixels: number;
};

/**
 * Space component, used in some special cases.
 * @param {number} pixels - The number of pixels to add to the height of the space.
 * @returns {JSX.Element} - The space element.
 */
export default function Space({ pixels }: Props) {
  return <div className="space" style={{ height: pixels }}></div>;
}
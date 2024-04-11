import Link from "next/link";

type Props = {
  content: string;
  location: string;
};

export default function NavbarItemDesktop({ content, location }: Props) {
  return <Link className="text-xl bg-" href={location}>{content}</Link>;
}

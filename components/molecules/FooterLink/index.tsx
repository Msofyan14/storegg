import Link from "next/link";

interface FooterLinkProps {
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4?: string;
}

export default function FooterLink(props: Partial<FooterLinkProps>) {
  const { title, link1, link2, link3, link4 } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <Link
            href="/"
            className="text-lg color-palette-1 text-decoration-none"
          >
            {link1}
          </Link>
        </li>
        <li className="mb-6">
          <Link
            href="/"
            className="text-lg color-palette-1 text-decoration-none"
          >
            {link2}
          </Link>
        </li>
        <li className="mb-6">
          <Link
            href="/"
            className="text-lg color-palette-1 text-decoration-none"
          >
            {link3}
          </Link>
        </li>
        <li className="mb-6">
          <Link
            href="/"
            className="text-lg color-palette-1 text-decoration-none"
          >
            {link4}
          </Link>
        </li>
      </ul>
    </div>
  );
}

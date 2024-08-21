import Link from "next/link";
import Container from "../ui/container";

const footerLinks = [
  {
    label: "Legal",
    url: "/terms",
  },
  {
    label: "Pricing",
    url: "/pricing",
  },
  {
    label: "Design",
    url: "/design",
  },
  {
    label: "Docs",
    url: "/docs",
  },
];

export default function Footer() {
  return (
    <footer className="py-8">
      <Container className="flex items-center justify-between">
        <svg
          className="w-8"
          viewBox="0 0 301 301"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 0C10.745 0 0 10.745 0 24v114.215h138.215V0H24Zm114.215 162.392H0v114.215c0 13.255 10.745 24 24 24h114.215V162.392Zm23.785 0h69.108c38.167 0 69.107 30.94 69.107 69.107v69.108H162V162.392ZM231.108 0H162v138.215h69.108c38.167 0 69.107-30.94 69.107-69.107C300.215 30.94 269.275 0 231.108 0Z"
            clipRule="evenodd"
            fillRule="evenodd"
            fill="currentcolor"
          ></path>
        </svg>

        <div className="flex grow items-center justify-end gap-6">
          <ul className="flex items-center gap-2 [&_svg]:fill-gray">
            <li>
              <Link
                className="p-2"
                href="https://twitter.com/raster_app"
                rel="noopener noreferrer"
                target="_blank"
                title="Rastwitter"
              >
                <svg
                  className="h-5"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </li>
            <Link
              className="p-2"
              href="https://read.cv/teams/raster"
              rel="noopener noreferrer"
              target="_blank"
              title="Rast.cv"
            >
              <svg
                className="h-5"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.304 1.775a2.75 2.75 0 0 0-.475.963L.594 14.812a2.75 2.75 0 0 0 1.944 3.368l9.658 2.589a2.75 2.75 0 0 0 3.368-1.945L18.8 6.75a2.748 2.748 0 0 0-1.943-3.37L7.197.794a2.75 2.75 0 0 0-2.893.982Zm2.344 3.233a.75.75 0 0 0 .4 1.181l7.242 1.94a.75.75 0 1 0 .388-1.449L7.437 4.74a.75.75 0 0 0-.79.268Zm-.622 2.946a.75.75 0 0 0 .181 1.374l7.242 1.941a.75.75 0 1 0 .388-1.45l-7.242-1.94a.75.75 0 0 0-.569.075Zm-.84 3.14a.75.75 0 0 0 .18 1.373l4.83 1.295a.75.75 0 1 0 .388-1.45l-4.83-1.293a.75.75 0 0 0-.569.075Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Read.cv</span>
            </Link>
            <Link
              className="p-2"
              href="https://www.linkedin.com/company/raster/"
              rel="noopener noreferrer"
              target="_blank"
              title="RastedIn"
            >
              <svg
                className="h-5"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              className="p-2"
              href="https://www.producthunt.com/upcoming/raster-2"
              rel="noopener noreferrer"
              target="_blank"
              title="RasterHunt"
            >
              <svg
                className="h-5"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path>
              </svg>
              <span className="sr-only">ProductHunt</span>
            </Link>
          </ul>

          <p className="">© {new Date().getFullYear()} Raster, Inc.</p>

          <nav className="">
            <ul className="flex items-center">
              {footerLinks.map(({ url, label }, index) => (
                <li key={index}>
                  <Link className="px-3 py-1 text-sm" href={url}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="flex items-center px-3 py-1 text-sm"
                  href="https://status.raster.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="relative mr-2 flex h-2 w-2 flex-shrink-0">
                    <span className="bg-green-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                    <span className="bg-green-500 relative inline-flex h-2 w-2 rounded-full"></span>
                  </span>
                  Status
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

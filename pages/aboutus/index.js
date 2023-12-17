import { Fragment } from "react";
import Link from "next/link";

function AboutUs() {
  return (
    <Fragment>
      <h1>About us page</h1>;
      <ul>
        <li>
          <Link href="/aboutus/1">Yash</Link>
        </li>
        <li>
          <Link href="/aboutus/2">Vaibhav</Link>
        </li>
        <li>
          <Link href="/aboutus/3">Suresh</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default AboutUs;

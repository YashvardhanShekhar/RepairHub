import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>s{" "}
      <Link href="/">
        <a>Go back to the home page</a>
      </Link>
    </div>
  );
};
export default NotFoundPage;

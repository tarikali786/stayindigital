import ButtonCard from "@/component/common/button";

const NotFound = () => {
  return (
    <div className="text-white text-center min-h-[40vh] flex flex-col items-center justify-center space-y-4">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <ButtonCard title="Go Back Home" link="/" />
    </div>
  );
};

export default NotFound;

import { APP_NAME } from "@/lib/constants";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {APP_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with ❤️ using Next.js and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

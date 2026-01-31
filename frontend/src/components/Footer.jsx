import { Github, Linkedin, Mail, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Global Trend. All rights reserved.
        </p>

        {/* Right - Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://ravikantpandey.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <User size={20} />
          </a>

          <a
            href="https://github.com/ravikant-pandey"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/ravikant04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:ravikantpandey1240@gmail.com"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

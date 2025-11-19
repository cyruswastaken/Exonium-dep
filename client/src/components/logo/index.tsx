import { Link } from "react-router-dom";

const Logo = (props: { url?: string }) => {
  const { url = "/" } = props;
  
  // Check if URL is external
  const isExternal = url.startsWith('http://') || url.startsWith('https://');
  
  return (
    <div className="flex items-center justify-center sm:justify-start">
      {isExternal ? (
        <a href={url} className="hover:opacity-80 transition-opacity">
          <img 
            src="/logo-assets/logo-light.png" 
            alt="Exonium Logo" 
            className="w-6 h-6 rounded-md"
          />
        </a>
      ) : (
        <Link to={url}>
          <img 
            src="/logo-assets/logo-dark.png" 
            alt="Exonium Logo" 
            className="w-6 h-6 rounded-md"
          />
        </Link>
      )}
    </div>
  );
};

export default Logo;

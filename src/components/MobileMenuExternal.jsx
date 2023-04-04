const MobileMenuExternal = ({ title, href, imageUrl, alt }) => (
  <a
    href={href}
    className="flex rounded border border-black hover:border-psn-red px-2 py-2 font-normal h-8 items-center hover:text-psn-red"
  >
    <img src={imageUrl} alt={alt} className="mr-1 h-4" />
    {title}
  </a>
);

export default MobileMenuExternal;

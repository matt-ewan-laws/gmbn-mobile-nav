const MobileMenuLink = ({ href, title }) => (
  <li className="pb-4 mb-4 border-b border-psn-red/10 text-2xl last:border-none">
    <a href={href}>{title}</a>
  </li>
);

export default MobileMenuLink;

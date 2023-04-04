import MobileMenuParent from "./MobileMenuParent";
import MobileMenuLink from "./MobileMenuLink";

const MobileMenuItem = ({ childrenLinks, ...props }) => {
  const item = childrenLinks ? (
    <MobileMenuParent {...props} childrenLinks={childrenLinks} />
  ) : (
    <MobileMenuLink {...props} />
  );
  return item;
};

export default MobileMenuItem;

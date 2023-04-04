import Facebook from "./socials/Facebook";
import Twitter from "./socials/Twitter";
import Youtube from "./socials/Youtube";
import Snapchat from "./socials/Snapchat";
import Instagram from "./socials/Instagram";

const socialLinks = [
  {
    href: "www.facebook.com",
    Icon: Facebook,
  },
  {
    href: "www.twitter.com",
    Icon: Twitter,
  },
  {
    href: "www.youtube.com",
    Icon: Youtube,
  },
  {
    href: "www.snapchat.com",
    Icon: Snapchat,
  },
  {
    href: "www.instagram.com",
    Icon: Instagram,
  },
];

const MobileMenuSocial = () => {
  return (
    <ul className="flex items-center p-4 gap-4">
      {socialLinks.map(({ href, Icon }) => (
        <li className="h-8 w-8">
          <a href={href} className="flex items-center h-full">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenuSocial;

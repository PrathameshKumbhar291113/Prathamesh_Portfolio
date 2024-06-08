import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter, FaGooglePlay, FaHackerrank} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/PrathameshKumbhar291113'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/prathamesh-kumbhar-1298401b6/'},
    {icon: <FaTwitter/>, path: 'https://x.com/Pratham291113'},
    {icon: <FaHackerrank/>, path: 'https://www.hackerrank.com/profile/Pratham13'},
    {icon: <FaGooglePlay/>, path: 'https://play.google.com/store/apps/details?id=com.prathameshkumbhar.bfit&hl=en_US'},

];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
            );
        })}
    </div>
  );
};

export default Social;
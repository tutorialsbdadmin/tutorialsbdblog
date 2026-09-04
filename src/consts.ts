export const SITE_NAME = 'TutorialsBD';
export const SITE_TAGLINE =
  'সহজ ভাষায় প্রযুক্তি শেখার জন্য বাংলা টিউটোরিয়াল ও গাইড।';
export const SITE_DESCRIPTION =
  'TutorialsBD — কম্পিউটার নেটওয়ার্কিং, সাইবার সিকিউরিটি, লিনাক্স, ওয়েব ডেভেলপমেন্ট, Astro, JavaScript, DevOps, ক্লাউড, AI ও আইটি ফান্ডামেন্টালস নিয়ে ফ্রি বাংলা টিউটোরিয়াল।';
export const SITE_AUTHOR = 'TutorialsBD';

export const POSTS_PER_PAGE = 5;

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'হোম', href: '/' },
  { label: 'ক্যাটাগরি', href: '/#categories' },
  { label: 'ট্যাগ', href: '/tags/' },
  { label: 'সম্পর্কে', href: '/about/' },
];

export type SocialIcon = 'facebook' | 'youtube' | 'github';

export interface SocialLink {
  name: string;
  href: string;
  icon: SocialIcon;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/tutorialsbdb',
    icon: 'facebook',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@tutorialsbdb',
    icon: 'youtube',
  },
  { name: 'GitHub', href: 'https://github.com/tutorialsbdb', icon: 'github' },
];

/**
 * Optional extra metadata per category (keyed by URL slug).
 * Categories themselves always come from the content; this map only
 * enriches known categories with a Bengali description.
 */
export const CATEGORY_INFO: Record<string, { description: string }> = {
  networking: {
    description:
      'কম্পিউটার নেটওয়ার্ক, IP অ্যাড্রেস, DNS, রাউটিং-সুইচিং ও CCNA সম্পর্কিত টিউটোরিয়াল।',
  },
  linux: {
    description:
      'লিনাক্স অপারেটিং সিস্টেম, কমান্ড লাইন ও সিস্টেম অ্যাডমিনিস্ট্রেশন শেখার গাইড।',
  },
  cybersecurity: {
    description:
      'সাইবার নিরাপত্তা, ফায়ারওয়াল, থ্রেট ও নিরাপদ অনলাইন প্র্যাকটিস সম্পর্কিত লেখা।',
  },
  'web-development': {
    description:
      'ওয়েব ডেভেলপমেন্ট, Astro, JavaScript, CSS ও আধুনিক ফ্রেমওয়ার্ক নিয়ে টিউটোরিয়াল।',
  },
  programming: {
    description:
      'প্রোগ্রামিং, Git, ডেভেলপার টুলস ও সেরা প্র্যাকটিস শেখার বাংলা গাইড।',
  },
};

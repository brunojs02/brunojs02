export type Job = {
  hash: string;
  period: string;
  role: string;
  company: string;
  blurb: string;
};

export const experience: Job[] = [
  { hash: 'a3f9c21', period: '2023 — present', role: 'Senior Software Engineer', company: 'axur', blurb: 'Frontend on a Cyber Threat Intelligence platform — React, microfrontends w/ module federation, Tailwind, Radix.' },
  { hash: 'e7b04d8', period: '2021 — 2023', role: 'Senior Software Engineer', company: 'iteris', blurb: 'Maintained and shipped features for PagSeguro web apps. React · Next · Redux · Jest · Express · K8s · Docker.' },
  { hash: '4c81fa0', period: '2021', role: 'Frontend Developer', company: 'exactaworks', blurb: 'Web apps for AME Digital fintech. React (CRA) · Next · Redux · Styled Components · SWR · Strapi.' },
  { hash: '0d12e6b', period: '2020 — 2021', role: 'Mobile Developer', company: 'shx', blurb: 'Maintained 3 mobile apps; built GPOS 700 POS integration. React Native · Redux · SiTef · RN Maps.' },
  { hash: 'f2a73c9', period: '2020', role: 'Frontend Developer', company: '5by5', blurb: 'Maintained an Angular 8 app and built two new ones in React. Angular · React · Sass.' },
  { hash: 'b91d40e', period: '2019 — 2020', role: 'Mobile Developer', company: '5by5', blurb: 'Electronic toll-collection mobile app. React Native · Redux · Firebase Cloud Messaging · Remote Config / A/B.' },
  { hash: '6c5e218', period: '2018 — 2019', role: 'Intern', company: 'shx', blurb: 'Shipped mobile apps to Play Store and App Store. Ionic 3 · Angular · React Native · Spring Boot · Spring Security/OAuth.' },
  { hash: '3a0c7d1', period: '2017', role: 'Intern', company: 'delivoro', blurb: 'Vehicle-transport system, full-stack. Spring · MyBatis · Quartz · Stripes · Struts · jQuery · Bootstrap.' },
  { hash: '0000000', period: '2014 — 2016', role: 'Freelance Software Engineer', company: 'autonomo', blurb: 'Initial commit. Full web apps for clients with PHP / CodeIgniter.' },
];

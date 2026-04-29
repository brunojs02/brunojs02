export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', items: ['react', 'next.js', 'redux', 'tailwind', 'radix', 'styled-components', 'swr', 'angular'] },
  { title: 'Mobile', items: ['react-native', 'expo', 'ionic'] },
  { title: 'Backend', items: ['node.js', 'express', 'nestjs', 'spring-boot', 'spring-security', 'hibernate'] },
  { title: 'Languages', items: ['javascript', 'typescript', 'java', 'php'] },
  { title: 'Tooling', items: ['jest', 'rtl', 'testcafe', 'docker', 'k8s', 'splunk', 'new-relic', 'firebase'] },
];

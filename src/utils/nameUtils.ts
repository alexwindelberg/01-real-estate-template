export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase();
};

export const getFullName = (): string => {
  return agentConfig.name;
};

import { agentConfig } from '@/config/agent';
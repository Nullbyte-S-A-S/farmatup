import { adminTabs, TabOption, userTabs } from './tabsConfig';

export function getAllowedTabs(role?: string | null): TabOption[] {
  if (!role) return [];
  return role.toLowerCase() === 'admin' ? adminTabs : userTabs;
}

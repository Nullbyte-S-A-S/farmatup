export interface TabOption {
  name: string;
  label: string;
  icon: string;
}

export const adminTabs: TabOption[] = [
  { name: 'index', label: 'Inicio', icon: 'home' },
  { name: 'inventory', label: 'Inventario', icon: 'cube' },
  { name: 'reports', label: 'Reportes', icon: 'pie-chart' },
  { name: 'settings', label: 'Ajustes', icon: 'cog' },
];

export const userTabs: TabOption[] = [
  { name: 'index', label: 'Inicio', icon: 'home' },
  { name: 'inventory', label: 'Inventario', icon: 'cube' },
  { name: 'settings', label: 'Ajustes', icon: 'cog' },
];

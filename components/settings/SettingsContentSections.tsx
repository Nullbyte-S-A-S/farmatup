import { View } from 'react-native';
import BusinessManagementCard from '~/components/settings/BusinessManagementCard';

type SettingsContentProps = {
  notifications: boolean;
  setNotifications: (val: boolean) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
};

export default function SettingsContent({
  notifications,
  setNotifications,
  darkMode,
  setDarkMode,
}: SettingsContentProps) {
  return (
    <View className="w-full gap-4">
      <BusinessManagementCard
        header={{
          icon: 'briefcase',
          title: 'Gestión del Negocio',
        }}
        items={[
          {
            icon: 'business',
            iconBg: '#DBEAFE',
            iconColor: '#3B82F6',
            title: 'Administrar sucursales',
            description: 'Gestiona ubicaciones y configuraciones',
            rightComponent: { type: 'default' },
          },
          {
            icon: 'person',
            iconBg: '#D1FAE5',
            iconColor: '#10B981',
            title: 'Administrar empleados',
            description: 'Control de personal',
            rightComponent: {
              type: 'default',
            },
          },
          {
            icon: 'analytics',
            iconBg: '#FEF9C3',
            iconColor: '#EAB308',
            title: 'Reportes y análisis',
            description: 'Control de personal',
            rightComponent: { type: 'dot+chevron', color: '#22C55E' },
          },
        ]}
      />
      <BusinessManagementCard
        header={{
          icon: 'settings',
          title: 'Gestión del Negocio',
        }}
        items={[
          {
            icon: 'notifications',
            iconBg: '#FFEDD5',
            iconColor: '#EA580C',
            title: 'Notificaciones',
            description: 'Alertas y recordatorios',
            rightComponent: {
              type: 'switch',
              value: notifications,
              onChange: setNotifications,
            },
          },
          {
            icon: 'mail',
            iconBg: '#FEE2E2',
            iconColor: '#DC2626',
            title: 'Cambiar correo o contraseña',
            description: 'Actualiza las credenciales de acceso',
            rightComponent: { type: 'default' },
          },
          {
            icon: 'moon',
            iconBg: '#F3F4F6',
            iconColor: '#4B5563',
            title: 'Modo oscuro',
            description: 'Cambiar apariencia de la app',
            rightComponent: {
              type: 'switch',
              value: darkMode,
              onChange: setDarkMode,
            },
          },
          {
            icon: 'language',
            iconBg: '#CCFBF1',
            iconColor: '#0D9488',
            title: 'Idioma',
            description: 'Español (Latinoamérica)',
            rightComponent: { type: 'default' },
          },
        ]}
      />
      <BusinessManagementCard
        header={{
          icon: 'help-circle',
          title: 'Soporte y Ayuda',
        }}
        items={[
          {
            icon: 'help-circle',
            iconBg: '#DCFCE7',
            iconColor: '#16A34A',
            title: 'Centro de ayudas',
            description: 'Tutoriales y preguntas frecuentes',
            rightComponent: {
              type: 'default',
            },
          },
          {
            icon: 'chatbubble-ellipses',
            iconBg: '#DBEAFE',
            iconColor: '#3B82F6',
            title: 'Contactar soporte',
            description: 'Chat en vivo 24/7',
            rightComponent: { type: 'dot+chevron', color: '#22C55E' },
          },
          {
            icon: 'bug',
            iconBg: '#F3E8FF',
            iconColor: '#9333EA',
            title: 'Reportar problema',
            description: 'Enviar comentarios',
            rightComponent: { type: 'default' },
          },
        ]}
      />
      <BusinessManagementCard
        header={{
          icon: 'document-text',
          title: 'Información Legal',
        }}
        items={[
          {
            icon: 'document-text',
            iconBg: '#F3F4F6',
            iconColor: '#4B5563',
            title: 'Términos y condiciones',
            description: 'Actualizado: 15 enero 2025',
            rightComponent: {
              type: 'default',
            },
          },
          {
            icon: 'lock-closed',
            iconBg: '#DBEAFE',
            iconColor: '#3B82F6',
            title: 'Políticas de privacidad',
            description: 'Protección de datos',
            rightComponent: { type: 'default' },
          },
          {
            icon: 'happy',
            iconBg: '#DCFCE7',
            iconColor: '#16A34A',
            title: 'Licencias',
            description: 'Software de terceros',
            rightComponent: { type: 'default' },
          },
        ]}
      />
      <BusinessManagementCard
        header={{
          icon: 'information-circle',
          title: 'Información de la App',
        }}
        items={[
          {
            icon: 'help-circle',
            iconBg: '#DBEAFE',
            iconColor: '#3B82F6',
            title: 'Acerca de la app',
            description: 'Versión 1.0.2',
            rightComponent: {
              type: 'default',
            },
          },
          {
            icon: 'code-slash',
            iconBg: '#F3E8FF',
            iconColor: '#9333EA',
            title: 'Registro de cambios',
            description: 'Novedades y mejoras',
            rightComponent: { type: 'default' },
          },
          {
            icon: 'checkmark-circle',
            iconBg: '#DCFCE7',
            iconColor: '#16A34A',
            title: 'Estado del sistema',
            description: 'Todos los servicios operativos',
            rightComponent: { type: 'dot', color: '#22C55E' },
          },
        ]}
      />
    </View>
  );
}

import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import RoleGuard from '~/components/RoleGuard';
import { getAllowedTabs } from '~/navegation/getAllowedTabs';
import { adminTabs, TabOption, userTabs } from '~/navegation/tabsConfig';
import { useAuthStore } from '~/store/auth';

const uniqueByName = <T extends { name: string }>(arr: T[]) =>
  Array.from(new Map(arr.map((t) => [t.name, t])).values());

const ALL_TABS: TabOption[] = uniqueByName([...adminTabs, ...userTabs]);

export default function TabLayout() {
  const role = useAuthStore((s) => s.user?.role?.toLowerCase());
  const allowedTabs = getAllowedTabs(role);
  const initialRoute = allowedTabs[0].name;
  return (
    <RoleGuard>
      <Tabs
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            alignItems: 'center',
            position: 'absolute',
            left: 16,
            right: 16,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#fff',
            height: 85,
            elevation: 5,
            shadowOpacity: 0.1,
          },
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: '#999',
        }}>
        {ALL_TABS.map((tab) => {
          const isAllowed = allowedTabs.some((t) => t.name === tab.name);
          return (
            <Tabs.Screen
              key={tab.name}
              name={tab.name}
              options={{
                href: isAllowed ? undefined : null,
                title: tab.label,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name={tab.icon as any} size={size} color={color} />
                ),
              }}
            />
          );
        })}
      </Tabs>
    </RoleGuard>
  );
}

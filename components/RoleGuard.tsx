import { usePathname, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { getAllowedTabs } from '~/navegation/getAllowedTabs';
import { useAuthStore } from '~/store/auth';

export default function RoleGuard({ children }: { children: React.ReactNode }) {
  const role = useAuthStore((s) => s.user?.role);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!role) {
      router.replace('/(auth)');
      return;
    }

    const allowedTabs = getAllowedTabs(role);
    const allowedNames = allowedTabs.map((t) => t.name);

    const lastSegment = pathname.split('/').pop();
    if (lastSegment && !allowedNames.includes(lastSegment)) {
      router.replace('/(tabs)');
    }
  }, [role, pathname]);

  return <>{children}</>;
}

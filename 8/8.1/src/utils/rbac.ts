import type { User } from '../providers/context/AuthProvider';

export const isAdmin = (user: User | null): boolean => {
  return user?.role === 'admin';
};

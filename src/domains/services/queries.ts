import AuthService from './authService';
export const queryKeys = {
  me: ['me'] as const,
};

export const queryOptions = {
  me: (token?: string) => ({
    queryKey: queryKeys.me,
    queryFn: () => AuthService.me(token),
  }),
};

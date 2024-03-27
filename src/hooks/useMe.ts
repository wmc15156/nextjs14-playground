import { useQuery } from '@tanstack/react-query';
import { queryOptions } from '@/domains/services/queries';

export const useMe = (token?: string) => {
  return useQuery({
    ...queryOptions.me(token),
    enabled: !!token, // 토큰이 존재할 때만 쿼리 실행
  });
};

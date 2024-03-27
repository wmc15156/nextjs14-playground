import HttpService from './index';

interface LoginResponse {
  token: string;
}

class AuthService extends HttpService {
  // 현재 인증된 사용자의 정보를 가져오는 메서드
  me(token?: string) {
    if (token) {
      return this.get<User>('https://dummyjson.com/auth/me', {
        Authorization: `Bearer ${token}`, // 호출 시점에 제공된 토큰을 사용합니다.
      });
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();

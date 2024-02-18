export function setCookie(name: string, value: string, days: number) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;

  const domain =
    process.env.NODE_ENV === 'production' && 'domain=.21planet.world';
  document.cookie = `${name}=${value}; ${expires}; path=/; ${domain}; secure=true; sameSite=None`;
}

export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (!cookieValue) return '';
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
export function deleteCookie(name: string) {
  const domain =
    process.env.NODE_ENV === 'production' && 'domain=21planet.world';
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; ${domain}`;
}

export const getCookie = (cookieName) => {
  const cookie = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(cookieName + '='));
  return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
};

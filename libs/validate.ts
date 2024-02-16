const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export function validateEmail(email: string): boolean {
  return emailRegex.test(email);
}

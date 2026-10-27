/**
 * Merge class names, filtering out falsy values.
 * A lightweight alternative to clsx — no dependency needed.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

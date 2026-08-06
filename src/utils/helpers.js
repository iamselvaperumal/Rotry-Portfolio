export function getPlaceholderImage(name, size = 200) {
  const initials = name
    .replace(/Rtn\.|PHF\.|Dr\.|Er\.|Arch\.|NEE\./gi, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase()

  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials || 'RC')}&background=D4AF37&color=06162B&size=${size}&bold=true`
}

export function getAssetImage(filename) {
  return new URL(`../assets/${filename}`, import.meta.url).href
}

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

export const scaleHover = {
  whileHover: { scale: 1.03 },
  transition: { duration: 0.3 },
}

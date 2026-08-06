import { UserPlus } from 'lucide-react'

export default function GoldButton({
  children,
  href = '#join',
  variant = 'gold',
  className = '',
  icon: Icon,
  onClick,
  type = 'button',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-[50px] px-7 py-3 text-base font-semibold transition-all duration-300 hover:scale-[1.03]'

  const variants = {
    gold: 'bg-gold text-navy hover:bg-white hover:text-navy hover:ring-2 hover:ring-gold',
    navy: 'bg-navy text-white border border-gold hover:bg-gold hover:text-navy',
    outline:
      'border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-navy',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href && !onClick) {
    return (
      <a href={href} className={classes}>
        {Icon && <Icon size={18} />}
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {Icon ? <Icon size={18} /> : variant === 'gold' && children?.toString().includes('JOIN') ? <UserPlus size={18} /> : null}
      {children}
    </button>
  )
}

export function NavyButton({ children, href = '#', className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-[50px] bg-navy px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.03] hover:bg-navy-secondary ${className}`}
    >
      {children}
    </a>
  )
}

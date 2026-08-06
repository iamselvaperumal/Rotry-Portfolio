export default function RotaryLogo({ className = 'h-12 w-12', color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="12" stroke={color} strokeWidth="2.5" fill="none" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 50 50)`}>
          <rect x="47" y="8" width="6" height="18" rx="1" fill={color} />
          <rect x="47" y="74" width="6" height="18" rx="1" fill={color} />
        </g>
      ))}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 50 50)`}>
          <rect x="47" y="14" width="6" height="12" rx="1" fill={color} opacity="0.7" />
        </g>
      ))}
    </svg>
  )
}

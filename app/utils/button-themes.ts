export const darkGhostButtonTheme = {
  button: {
    base: [
      'text-white/90',
      'bg-white/10',
      'hover:bg-white/16',
      'hover:text-white',
      'active:bg-white/16',
      'active:text-white',
      'focus-visible:bg-white/16',
      'focus-visible:text-white'
    ].join(' ')
  }
} as const

export const darkOutlineButtonTheme = {
  button: {
    base: [
      'ring-white/30',
      'text-white',
      'hover:bg-white/10',
      'active:bg-white/10',
      'focus-visible:bg-white/10',
      'focus-visible:ring-white/40'
    ].join(' ')
  }
} as const

export const accentSolidButtonTheme = {
  button: {
    base: [
      'bg-accent-700',
      'text-white',
      'hover:bg-accent-600',
      'active:bg-accent-600',
      'focus-visible:bg-accent-600',
      'focus-visible:text-white'
    ].join(' ')
  }
} as const

export const secondarySolidButtonTheme = {
  button: {
    base: [
      'bg-secondary-800',
      'text-white',
      '[&_*]:text-white',
      'hover:bg-secondary-700',
      'active:bg-secondary-800',
      'focus-visible:bg-secondary-700',
      'focus-visible:text-white'
    ].join(' '),
    label: 'text-white',
    leadingIcon: 'text-white',
    trailingIcon: 'text-white'
  }
} as const

export const headerSegmentedButtonTheme = {
  button: {
    base: [
      'h-[var(--home-sys-header-control-height)]',
      'justify-center',
      'rounded-none',
      'bg-transparent',
      'px-0',
      'text-secondary-700',
      'shadow-none',
      'ring-0',
      'transition-colors',
      'duration-150',
      'hover:bg-secondary-600',
      'hover:text-white',
      'active:bg-secondary-600',
      'active:text-white',
      'focus-visible:bg-secondary-600',
      'focus-visible:text-white',
      'focus-visible:ring-2',
      'focus-visible:ring-secondary-200/90',
      'aria-[pressed=true]:bg-secondary-600',
      'aria-[pressed=true]:text-white',
      'aria-[current=page]:bg-secondary-600',
      'aria-[current=page]:text-white',
      '[&[aria-pressed=true]]:bg-secondary-600',
      '[&[aria-pressed=true]]:text-white',
      '[&[aria-pressed=true]_*]:text-white',
      '[&[aria-current=page]]:bg-secondary-600',
      '[&[aria-current=page]]:text-white',
      '[&[aria-current=page]_*]:text-white',
      'disabled:bg-transparent',
      'disabled:text-neutral-400',
      'disabled:opacity-45',
      'aria-disabled:bg-transparent',
      'aria-disabled:text-neutral-400',
      'aria-disabled:opacity-45'
    ].join(' '),
    label: 'text-current text-[0.75rem] font-semibold tracking-[0.08em]',
    leadingIcon: 'text-current',
    trailingIcon: 'text-current'
  }
} as const

export const lightSolidButtonTheme = {
  button: {
    base: [
      'bg-white',
      'text-secondary-950',
      'hover:bg-white/92',
      'active:bg-white/88',
      'focus-visible:bg-white/92',
      'focus-visible:text-secondary-950'
    ].join(' '),
    label: 'text-secondary-950',
    leadingIcon: 'text-secondary-950',
    trailingIcon: 'text-secondary-950'
  }
} as const

export const darkIconGhostButtonTheme = {
  button: {
    base: [
      'bg-transparent',
      'text-white/90',
      'shadow-none',
      'ring-1',
      'ring-white/12',
      'hover:bg-white/10',
      'hover:text-white',
      'active:bg-white/12',
      'active:text-white',
      'focus-visible:bg-white/10',
      'focus-visible:text-white',
      'focus-visible:ring-2',
      'focus-visible:ring-white/28',
      'motion-safe:transition-[transform,background-color,color,box-shadow]',
      'motion-safe:duration-200',
      'motion-safe:hover:-translate-y-px'
    ].join(' '),
    leadingIcon: 'text-current',
    trailingIcon: 'text-current'
  }
} as const

export const floatingIconButtonTheme = {
  button: {
    base: [
      'bg-primary-800',
      'text-white',
      '[&_*]:text-white',
      'shadow-lg',
      'shadow-secondary-950/25',
      'ring-1',
      'ring-primary-300/20',
      'hover:bg-primary-700',
      'hover:text-white',
      'active:bg-primary-900',
      'active:text-white',
      'focus-visible:bg-primary-700',
      'focus-visible:text-white',
      'focus-visible:ring-2',
      'focus-visible:ring-primary-200/70'
    ].join(' '),
    leadingIcon: 'text-white',
    trailingIcon: 'text-white'
  }
} as const

export const brandGhostButtonTheme = {
  button: {
    base: [
      'text-primary-200',
      'hover:text-primary-100',
      'active:text-primary-100',
      'focus-visible:text-primary-100'
    ].join(' ')
  }
} as const

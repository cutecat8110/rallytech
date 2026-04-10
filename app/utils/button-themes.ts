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
      'hover:bg-secondary-700',
      'active:bg-secondary-800',
      'focus-visible:bg-secondary-700',
      'focus-visible:text-white'
    ].join(' ')
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

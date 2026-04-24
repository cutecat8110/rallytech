const joinClasses = (...classes: string[]) => classes.join(' ')

const sharedChromaticMotion = joinClasses(
  'ring-1',
  'shadow-none',
  'motion-safe:transition-[background-color,border-color,color]',
  'motion-safe:duration-[180ms]',
  'focus-visible:ring-2',
  'focus-visible:shadow-none'
)

const sharedCurrentColorSlots = {
  label: 'text-current',
  leadingIcon: 'text-current',
  trailingIcon: 'text-current'
} as const

export const contrastSolidDarkButtonTheme = {
  button: {
    base: joinClasses(
      'bg-secondary-800',
      'text-white',
      '[&_*]:text-white',
      'ring-secondary-900/10',
      sharedChromaticMotion,
      'hover:bg-secondary-700',
      'active:bg-secondary-900',
      'focus-visible:bg-secondary-700',
      'focus-visible:text-white',
      'focus-visible:ring-secondary-200/70'
    ),
    label: 'text-white',
    leadingIcon: 'text-white',
    trailingIcon: 'text-white'
  }
} as const

export const contrastSolidLightButtonTheme = {
  button: {
    base: joinClasses(
      'group',
      'bg-white',
      'text-primary-950',
      '[&_*]:text-primary-950',
      'ring-white/18',
      sharedChromaticMotion,
      'hover:bg-primary-50',
      'hover:text-primary-950',
      'hover:ring-primary-200/70',
      'active:bg-primary-100',
      'active:text-primary-950',
      'active:ring-primary-300/72',
      'focus-visible:bg-white',
      'focus-visible:text-primary-950',
      'focus-visible:ring-primary-300/76'
    ),
    label: 'text-primary-950',
    leadingIcon: 'text-primary-950',
    trailingIcon: 'text-primary-950'
  }
} as const

export const segmentedControlButtonTheme = {
  button: {
    base: joinClasses(
      'group',
      'h-[var(--home-sys-header-control-height)]',
      'justify-center',
      'rounded-none',
      'bg-transparent',
      'px-0',
      'text-secondary-700',
      'shadow-none',
      'ring-0',
      'motion-safe:transition-[background-color,color,border-color]',
      'motion-safe:duration-[160ms]',
      'hover:bg-primary-50',
      'hover:text-primary-900',
      'active:bg-secondary-700',
      'active:text-white',
      'focus-visible:bg-primary-50',
      'focus-visible:text-primary-900',
      'focus-visible:ring-2',
      'focus-visible:ring-primary-200/90',
      'aria-[pressed=true]:bg-secondary-600',
      'aria-[pressed=true]:text-white',
      'aria-[current=page]:bg-secondary-600',
      'aria-[current=page]:text-white',
      '[&[aria-pressed=true]_*]:text-white',
      '[&[aria-current=page]_*]:text-white',
      'disabled:bg-transparent',
      'disabled:text-neutral-400',
      'disabled:opacity-45',
      'aria-disabled:bg-transparent',
      'aria-disabled:text-neutral-400',
      'aria-disabled:opacity-45'
    ),
    label: joinClasses(
      'text-current',
      'text-[0.75rem]',
      'font-semibold',
      'tracking-[0.08em]',
      'group-hover:text-primary-900',
      'group-focus-visible:text-primary-900',
      'group-active:text-white',
      'group-aria-[pressed=true]:text-white',
      'group-aria-[current=page]:text-white'
    ),
    leadingIcon: joinClasses(
      'text-current',
      'group-hover:text-primary-900',
      'group-focus-visible:text-primary-900',
      'group-active:text-white',
      'group-aria-[pressed=true]:text-white',
      'group-aria-[current=page]:text-white'
    ),
    trailingIcon: joinClasses(
      'text-current',
      'group-hover:text-primary-900',
      'group-focus-visible:text-primary-900',
      'group-active:text-white',
      'group-aria-[pressed=true]:text-white',
      'group-aria-[current=page]:text-white'
    )
  }
} as const

export const iconUtilityLightButtonTheme = {
  button: {
    base: joinClasses(
      'bg-transparent',
      'text-secondary-800',
      'justify-center',
      'px-0',
      'py-0',
      'gap-0',
      'shadow-none',
      'ring-1',
      'ring-secondary-200',
      'motion-safe:transition-[background-color,color,border-color]',
      'motion-safe:duration-[160ms]',
      'hover:bg-secondary-50',
      'hover:text-secondary-950',
      'active:bg-secondary-100',
      'active:text-secondary-950',
      'focus-visible:bg-secondary-50',
      'focus-visible:text-secondary-950',
      'focus-visible:ring-2',
      'focus-visible:ring-primary-200/75'
    ),
    ...sharedCurrentColorSlots
  }
} as const

export const iconUtilityDarkButtonTheme = {
  button: {
    base: joinClasses(
      'bg-transparent',
      'text-white/90',
      'justify-center',
      'px-0',
      'py-0',
      'gap-0',
      'shadow-none',
      'ring-1',
      'ring-white/14',
      'motion-safe:transition-[background-color,color,border-color]',
      'motion-safe:duration-[160ms]',
      'hover:bg-white/8',
      'hover:text-white',
      'active:bg-white/12',
      'active:text-white',
      'focus-visible:bg-white/8',
      'focus-visible:text-white',
      'focus-visible:ring-2',
      'focus-visible:ring-white/28'
    ),
    ...sharedCurrentColorSlots
  }
} as const

export const iconUtilityEmphasisButtonTheme = {
  button: {
    base: joinClasses(
      'bg-primary-800',
      'text-white',
      'justify-center',
      'px-0',
      'py-0',
      'gap-0',
      '[&_*]:text-white',
      'ring-1',
      'ring-primary-300/20',
      sharedChromaticMotion,
      'hover:bg-primary-700',
      'active:bg-primary-900',
      'focus-visible:bg-primary-700',
      'focus-visible:text-white',
      'focus-visible:ring-primary-200/70'
    ),
    label: 'text-white',
    leadingIcon: 'text-white',
    trailingIcon: 'text-white'
  }
} as const

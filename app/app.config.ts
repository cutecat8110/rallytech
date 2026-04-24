export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      secondary: 'secondary',
      neutral: 'neutral'
    },
    button: {
      slots: {
        base: [
          'cursor-pointer',
          'justify-center',
          'rounded-none',
          'disabled:cursor-not-allowed',
          'aria-disabled:cursor-not-allowed'
        ].join(' ')
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: {
            base: [
              'bg-primary-700',
              'text-white',
              'ring-1 ring-primary-950/10',
              'shadow-none',
              'motion-safe:transition-[background-color,border-color,color]',
              'motion-safe:duration-[180ms]',
              'hover:bg-primary-600',
              'active:bg-primary-800',
              'focus-visible:bg-primary-700',
              'focus-visible:text-white',
              'focus-visible:ring-2',
              'focus-visible:ring-primary-200/75',
              '[&_*]:text-white'
            ].join(' '),
            label: 'text-white',
            leadingIcon: 'text-white',
            trailingIcon: 'text-white'
          }
        }
      ],
      variants: {
        size: {
          xs: {
            base: 'type-sys-label-s min-h-8 px-3 py-1.5 gap-1.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          sm: {
            base: 'type-sys-label-s min-h-9 px-4 py-2 gap-1.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          md: {
            base: 'type-sys-label-m min-h-10 px-5 py-2 gap-2',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          lg: {
            base: 'type-sys-label-m min-h-11 px-6 py-2.5 gap-2',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          xl: {
            base: 'type-sys-label-m min-h-12 px-8 py-3 gap-2.5',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs',
            trailingIcon: 'size-6'
          }
        }
      }
    },
    input: {
      slots: {
        base: 'rounded-sm'
      }
    },
    textarea: {
      slots: {
        base: 'rounded-sm'
      }
    },
    select: {
      slots: {
        base: 'rounded-sm'
      }
    }
  }
})

export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      secondary: 'secondary',
      neutral: 'neutral'
    },
    button: {
      slots: {
        base: 'rounded-sm'
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: {
            base: [
              'bg-primary-700',
              'text-white',
              'ring-1 ring-transparent',
              'shadow-md shadow-primary-950/15',
              'motion-safe:transition-[transform,box-shadow,background-color]',
              'motion-safe:duration-200',
              'hover:bg-primary-700',
              'hover:-translate-y-px',
              'hover:shadow-lg',
              'hover:shadow-primary-950/20',
              'hover:ring-primary-300/35',
              'active:translate-y-0',
              'active:bg-primary-800',
              'active:shadow-md',
              'active:shadow-primary-950/15',
              'focus-visible:bg-primary-700',
              'focus-visible:text-white',
              'focus-visible:ring-2',
              'focus-visible:ring-primary-200/70',
              'focus-visible:shadow-lg',
              'focus-visible:shadow-primary-950/18',
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
            base: 'type-sys-label-s px-3 py-2 gap-1.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          sm: {
            base: 'type-sys-label-s px-4 py-2 gap-1.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          md: {
            base: 'type-sys-label-m px-5 py-2 gap-1.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          lg: {
            base: 'type-sys-label-m px-6 py-2.5 gap-2',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          xl: {
            base: 'type-sys-label-m px-8 py-3 gap-2',
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

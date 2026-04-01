export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      secondary: 'secondary',
      neutral: 'neutral',
      success: 'success',
      info: 'info',
      warning: 'warning',
      error: 'error'
    },
    button: {
      defaultVariants: {
        size: 'lg'
      },
      slots: {
        base: 'inline-flex items-center justify-center rounded-full font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-200 disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 hover:-translate-y-0.5',
        label: 'truncate',
        leadingIcon: 'shrink-0',
        trailingIcon: 'shrink-0'
      },
      variants: {
        size: {
          lg: {
            base: 'min-h-[3.35rem] px-5 py-3 text-sm gap-2',
            leadingIcon: 'size-5',
            trailingIcon: 'size-5'
          },
          xl: {
            base: 'min-h-[3.6rem] px-6 py-3.5 text-base gap-2',
            leadingIcon: 'size-6',
            trailingIcon: 'size-6'
          }
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class:
            'bg-linear-to-br from-primary-800 via-primary-700 to-primary-600 text-white shadow-sys-md hover:from-primary-700 hover:via-primary-700 hover:to-primary-500 active:from-primary-900 active:via-primary-800 active:to-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700'
        },
        {
          color: 'neutral',
          variant: 'outline',
          class:
            'ring ring-inset ring-neutral-200/80 bg-white/82 text-neutral-950 shadow-sys-sm hover:bg-white active:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400'
        },
        {
          color: 'neutral',
          variant: 'ghost',
          class:
            'text-neutral-700 hover:bg-neutral-100/80 hover:text-neutral-950 active:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400'
        },
        {
          color: 'neutral',
          variant: 'link',
          class:
            'text-neutral-950 hover:text-neutral-700 active:text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400'
        }
      ]
    },
    navigationMenu: {
      slots: {
        root: 'relative flex items-center gap-1.5 [&>div]:min-w-0',
        list: 'isolate min-w-0 rounded-full border border-neutral-200/80 bg-white/72 px-2 py-1 backdrop-blur-md shadow-sys-sm',
        item: 'min-w-0 py-0',
        link: 'group relative flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-neutral-600 before:absolute before:inset-0 before:z-[-1] before:rounded-full before:transition-colors transition-colors hover:text-neutral-950',
        linkLeadingIcon: 'hidden',
        linkTrailingIcon: 'hidden',
        indicator: 'hidden',
        content: 'rounded-2xl border border-neutral-200 bg-white p-2 shadow-sys-md'
      },
      variants: {
        active: {
          true: {
            link: 'text-neutral-950 before:bg-white before:shadow-[inset_0_0_0_1px_rgb(228_228_231/0.9)]'
          },
          false: {
            link: 'text-neutral-600'
          }
        }
      }
    },
    tabs: {
      defaultVariants: {
        variant: 'pill',
        color: 'neutral',
        size: 'lg'
      },
      slots: {
        root: 'flex flex-col gap-0',
        list: 'inline-flex w-fit gap-2 rounded-full border border-neutral-200 bg-neutral-50/90 p-1',
        indicator: 'rounded-full bg-secondary-950 shadow-sys-sm',
        trigger:
          'rounded-full px-4 py-3 text-sm font-semibold text-neutral-500 transition-colors data-[state=active]:text-white hover:data-[state=inactive]:text-neutral-900',
        content: 'w-full pt-6 focus:outline-none'
      }
    },
    drawer: {
      slots: {
        overlay: 'fixed inset-0 bg-secondary-950/72 backdrop-blur-sm',
        content: 'fixed flex bg-secondary-950 text-white focus:outline-none',
        container: 'w-full flex flex-col gap-0 overflow-y-auto p-0',
        header: 'border-b border-white/10 px-6 py-5',
        title: 'type-sys-headline-s text-white',
        description: 'type-sys-body-s mt-2 text-white/64',
        body: 'flex-1 px-4 py-5',
        footer: 'border-t border-white/10 px-4 py-4'
      }
    },
    input: {
      defaultVariants: {
        size: 'lg',
        variant: 'outline',
        color: 'neutral'
      },
      slots: {
        base: 'w-full rounded-full appearance-none transition-[background-color,border-color,color,box-shadow] focus:outline-none disabled:cursor-not-allowed disabled:opacity-75'
      },
      variants: {
        variant: {
          outline:
            'bg-white/6 text-white ring ring-inset ring-white/16 placeholder:text-white/35 hover:bg-white/8 focus:bg-white/10'
        },
        size: {
          lg: {
            base: 'min-h-[3.3rem] px-4 text-base/5 gap-2',
            leading: 'ps-4',
            trailing: 'pe-4',
            leadingIcon: 'size-5',
            trailingIcon: 'size-5'
          }
        }
      }
    }
  }
})

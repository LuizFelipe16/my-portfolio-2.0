import React, { HTMLAttributes, ReactNode } from "react";
import { motion } from 'framer-motion'
interface ViewProps extends HTMLAttributes<HTMLDivElement> {
  style?: string | undefined | any;
  children?: ReactNode;
  type?: 'div' | 'main';
  css?: Array<React.CSSProperties>
  animated?: boolean
}

export const View = (
  {
    children,
    style,
    type = 'div',
    animated = false,
    css,
    ...rest
  }: ViewProps
) => {
  const cachedStyle = React.useMemo(() => {
    if (!css) return null

    let style = {}

    css?.forEach(s => {
      style = { ...style, ...s }
    })

    return style
  }, [css])

  const props = !!cachedStyle ? {
    style: cachedStyle,
  } : {}

  if (animated) {
    return (
      <motion.div {...props} {...rest}>
        {children}
      </motion.div>
    )
  }

  if (type === 'main') {
    return (
      <main className={style} {...props} {...rest}>
        {children}
      </main>
    )
  } else {
    return (
      <div className={style} {...props} {...rest}>
        {children}
      </div>
    )
  }
};

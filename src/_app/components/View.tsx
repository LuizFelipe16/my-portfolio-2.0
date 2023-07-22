import React, { HTMLAttributes, ReactNode } from "react";

interface ViewProps extends HTMLAttributes<HTMLDivElement> {
  style?: string | undefined | any;
  children?: ReactNode;
  type?: 'div' | 'main';
  css?: Array<React.CSSProperties>
}

export const View = (
  {
    children,
    style,
    type = 'div',
    css,
    ...rest
  }: ViewProps
) => {
  const cachedStyle = React.useMemo(() => {
    if (!css) return {}

    let style = {}

    css?.forEach(s => {
      style = { ...style, ...s }
    })

    return style
  }, [css])

  const props = {
    style: cachedStyle,
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

import { HStack } from "@chakra-ui/react";
import React from 'react';
import { useScroll } from '../../../utils';
import { themeProvider, View } from '../../../_app';
import { valueLeftContentTexts } from "../../SessionsPageIndex/Entry/styles";
import { ItemNav } from './ItemNav';

export function Navbar() {
  const scroll = useScroll()

  const animatedStyle = scroll.atTop ? {} : {
    backdropFilter: 'blur(4px) brightness(85%)',
  }

  return (
    <View css={[wrapperStyle, animatedStyle]}>
      <ItemNav href="about" text="Quem sou" />
      <ItemNav href="services" text="O que faço" />
      <ItemNav href="portfolio" text="Projetos" />
      <ItemNav href="contact" text="Fale comigo" />
      <ItemNav isPage href="posts/web-react" text="Blog" />
    </View>
  )
}

const wrapperStyle = themeProvider.createComponentStyle(theme => ({
  width: theme.values.width,
  height: theme.values.auto,
  top: theme.spacing.value(0),
  left: theme.spacing.value(0),
  right: theme.spacing.value(0),
  paddingTop: theme.spacing.value(2),
  paddingBottom: theme.spacing.value(1),
  paddingLeft: valueLeftContentTexts,
  transition: 'all 0.4s',
  ...theme.presets.fixed,
  ...theme.presets.row,
  ...theme.presets.alignCenter,
  ...theme.presets.justifyStart,
  ...theme.funcs.index(999),
  ...theme.spacing.gap(4),
}))

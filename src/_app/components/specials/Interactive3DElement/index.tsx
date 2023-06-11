import dynamic from 'next/dynamic';
import type { SplineProps } from '@splinetool/react-spline';
import { View } from '../../..';
// import Spline from '@splinetool/react-spline';

import styles from './styles.module.scss';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  suspense: false,
});

interface Interactive3DElementProps extends SplineProps {
  style: string | undefined | any;
}

export function Interactive3DElement({ style, scene, ...rest }: Interactive3DElementProps) {
  return (
    <View style={style}>
      {/* <Spline {...rest} /> */}

      <spline-viewer events-target="global" url={scene} {...rest}></spline-viewer>
    </View>
  );
}
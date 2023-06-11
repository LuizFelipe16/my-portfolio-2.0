import type { SplineProps } from '@splinetool/react-spline';
import { View } from '../../..';

interface Interactive3DElementProps extends SplineProps {
  style: string | undefined | any;
}

export function Interactive3DElement({ style, scene, ...rest }: Interactive3DElementProps) {
  return (
    <View style={style}>
      <spline-viewer loading-anim events-target="global" url={scene} {...rest}></spline-viewer>
    </View>
  );
}
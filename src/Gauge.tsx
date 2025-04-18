import React, {useEffect, useRef} from 'react';
import {Path, Svg} from 'react-native-svg';
import {Animated} from 'react-native';

const AnimatedPath = Animated.createAnimatedComponent(Path);

type Props = {
  value: number;
  color: string;
};

const Gauge = ({value, color}: Props) => {
  const animationValue = useRef(new Animated.Value(0)).current;
  const pathRef = useRef<Path>(null);

  useEffect(() => {
    const animatePath = () => {
      Animated.loop(
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ).start();
    };

    animatePath();

    return () => {
      animationValue.setValue(0);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Svg width="150" height="120" viewBox="0 0 100 80">
        {/* Background path (grey arc) */}
        <Path
          d="M22.37 60.987a30.3 30.3 0 0 1-2.357-11.76C20.013 32.54 33.44 19.012 50 19.012S79.987 32.54 79.987 49.226c0 4.172-.84 8.146-2.357 11.76"
          fill="none"
          strokeWidth={14}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#3a393e"
          ref={pathRef}
        />
        {/* Foreground path (colored arc) */}
        <AnimatedPath
          d="M22.37 60.987a30.3 30.3 0 0 1-2.357-11.76C20.013 32.54 33.44 19.012 50 19.012S79.987 32.54 79.987 49.226c0 4.172-.84 8.146-2.357 11.76"
          strokeDasharray={animationValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0 119', `${(119 * value) / 100} 119`, '0 119'],
          })}
          fill="none"
          strokeWidth={14}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={color}
        />
      </Svg>
    </>
  );
};

export default Gauge;

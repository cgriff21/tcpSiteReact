import React, { ReactElement, useState } from 'react';
import { CircleMenuItem, CircleMenuItemProps } from './CircleMenuItem';
import { CircleMenuToggle } from './CircleMenuToggle';

interface Props {
  startAngle: number,
  rotationAngle: number,
  rotationAngleInclusive?: boolean,
  radius?: number,
  itemSize?: number
  mainSize?: number
}

export const CircleMenu: React.FC<Props> = ({
  rotationAngleInclusive = true,
  radius = 2,
  itemSize = 2,
  mainSize = 2,
  ...props
}) => {

  const [menuActive, setMenuActive] = useState<boolean>(false);

  const childrenCount = React.Children.count(props.children);
  const itemCount = rotationAngleInclusive ? childrenCount - 1 : childrenCount;

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={'circle-menu' + (menuActive ? ' circle-menu-active' : '')}>
      <CircleMenuToggle size={mainSize} toggleMenu={toggleMenu} />
      <div className='circle-menu-data'>
        {React.Children.map(props.children, (child, index: number) => {
          // Calculating angle
          let angle = props.startAngle;
          let increment = 0;
          if (childrenCount > 1) {
            increment = Math.round(props.rotationAngle / itemCount);
          }
          angle += index * increment;

          return <CircleMenuItem
            key={'cm-item-' + index}
            {...(child as ReactElement<CircleMenuItemProps>).props}
            size={itemSize}
            menuActive={menuActive}
            radius={radius}
            rotationAngle={angle}
          />;
        })}
      </div>
    </div>
  );
};


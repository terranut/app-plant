import React, { HTMLProps } from 'react';

import { Stat, StatLabel, StatNumber } from './';
interface StatType extends HTMLProps<HTMLHtmlElement> {
  bgColor?: any;
  description?: string;
  number?: number;
  name?: string;
}

const CourseStat: React.FC<React.ComponentProps<typeof Stat> & StatType> = ({
  bgColor = 'bacground.main',
  description = 'description',
  number = 0,
  name,
  ...props
}) => {
  return (
    <Stat bg={bgColor} justifyContent="center" display="flex" borderRadius={4} textAlign="center" {...props} p={3}>
      <StatNumber fontSize={'lg'} mb={1}>
        {number} {name}
      </StatNumber>
      <StatLabel fontSize={'xs'} color="textColor.secondary" lineHeight={'16px'}>
        {description}
      </StatLabel>
    </Stat>
  );
};

export default CourseStat;

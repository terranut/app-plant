// Packages
import React, { HTMLProps } from 'react';

// Components
import { Heading, Text, Stack, Button, Image, Box } from '../..';

interface Props extends HTMLProps<HTMLHtmlElement> {
  img?: any;
  altImg?: string;
  description?: string;
  emptyAction?: React.ReactNode;
  onClick?: () => void;
}

const Empty = ({ img, title, description, emptyAction, altImg, onClick }: Props) => {
  return (
    <Box w="600px">
      <Stack direction={'column'} spacing={6} align={'center'} p={'48px'}>
        <Image src={img} alt={altImg} />
        <Heading type="h4">{title}</Heading>
        <Text fontSize={'md'} w="400px" color="textColor.secondary" align={'center'}>
          {description}
        </Text>
        <Button size="lg" onClick={onClick}>
          {emptyAction}
        </Button>
      </Stack>
    </Box>
  );
};

export default Empty;

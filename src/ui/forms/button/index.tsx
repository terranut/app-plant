import { Button as ButtonUi, ButtonProps, ButtonGroup } from '@chakra-ui/button';

const Button = ({ ...props }: ButtonProps) => {
  return <ButtonUi {...props} />;
};

export type { ButtonProps };

export { Button, ButtonGroup };
export default Button;

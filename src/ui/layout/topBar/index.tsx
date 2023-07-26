import { Button, Flex, Heading, ButtonGroup } from '../..';

export interface TopBarProps {
  title: string;
  onCancel?: () => void;
  cancelTitle?: string;
  onSuccess?: () => void;
  successTitle?: string;
}

const TopBar = ({ title, onCancel, cancelTitle = 'Cancelar', onSuccess, successTitle = 'Guardar' }: TopBarProps) => {
  return (
    <Flex bg="primary.main" minH="80px" alignItems="center" justify="space-between" px="32px" position="sticky" top={0}>
      <Heading type="h4" color="white">
        {title}
      </Heading>

      <ButtonGroup gap="2">
        {onCancel && (
          <Button onClick={onCancel} color="white" size="sm">
            {cancelTitle}
          </Button>
        )}
        {onSuccess && (
          <Button onClick={onSuccess} variant="ghost" type="submit" size="sm">
            {successTitle}
          </Button>
        )}
      </ButtonGroup>
    </Flex>
  );
};
export default TopBar;

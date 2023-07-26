import { EditableProps, useEditableControls } from '@chakra-ui/react';

import { Editable as EditableUI, EditablePreview, EditableInput, IconButton, Tooltip, Flex, Input } from '../../';
type EditableType = {
  value?: string;
};

const EditableInputName: React.FC<React.ComponentProps<typeof EditableUI> & EditableType> = ({ ...props }) => {
  function EditableControls() {
    const { isEditing, getEditButtonProps } = useEditableControls();

    return isEditing ? (
      <></>
    ) : (
      <Flex justifyContent="center">
        <IconButton aria-label="Editar" size="lg" iconName="Edit" variant={'link'} {...getEditButtonProps()} />
      </Flex>
    );
  }
  return (
    <EditableUI
      defaultValue={'Nombre'}
      {...props}
      border="1px solid"
      borderColor="white"
      borderRadius={4}
      _hover={{
        borderColor: 'border.component',
      }}
    >
      <Tooltip label="Editar nombre" placement="top">
        <Flex>
          <EditablePreview pl={2} />
          <Flex>
            <Input as={EditableInput} pl={2} onCancel={(previousValue: string) => previousValue} />
            <EditableControls />
          </Flex>
        </Flex>
      </Tooltip>
    </EditableUI>
  );
};
export type { EditableProps };

export default EditableInputName;

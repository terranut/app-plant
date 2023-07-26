import { FC, useState } from 'react';
import { CUIAutoComplete, CUIAutoCompleteProps } from 'chakra-ui-autocomplete';
import { OptionItemProps } from '../../types';
import { TagStyles } from '../../dataDisplay';
import { TagProps } from '@chakra-ui/react';

const AutoCompleteSelect: FC<CUIAutoCompleteProps<OptionItemProps> & { items: OptionItemProps[] }> = ({
  items,
  ...props
}) => {
  const [selectedItems, setSelectedItems] = useState<OptionItemProps[]>([]);

  const handleCreateItem = (item: OptionItemProps) => {
    setSelectedItems((curr) => [...curr, item]);
  };
  const handleSelectedItemsChange = (selectedItems?: OptionItemProps[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };
  return (
    <CUIAutoComplete
      onCreateItem={handleCreateItem}
      items={items}
      selectedItems={selectedItems}
      onSelectedItemsChange={(changes) => handleSelectedItemsChange(changes.selectedItems)}
      tagStyleProps={TagStyles.baseStyle as TagProps}
      {...props}
    />
  );
};
export default AutoCompleteSelect;

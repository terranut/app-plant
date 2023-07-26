import { Button, Icon, Text, Flex, Spacer, Heading, Stack } from '../..';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import { FieldValues, FormState } from 'react-hook-form';

interface TabsItem {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  disabled?: Boolean;
  idForm?: string;
}
interface TabsProps {
  orientation?: 'horizontal' | 'vertical';
  tabsItems: TabsItem[];
  isSequency?: Boolean;
  formState?: FormState<FieldValues>;
  nextStep?: (field: string) => Promise<boolean>;
}

const TabsCustom = ({ orientation = 'horizontal', tabsItems, isSequency, formState, nextStep }: TabsProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [newTabsItems, setNewTabsItems] = useState(tabsItems);
  const [idFormSelected, setIdFormSelected] = useState(newTabsItems[tabIndex].idForm || '');
  const changeItems = (step: number) => {
    const newItems = newTabsItems.reduce((acc: TabsItem[], item, index) => {
      const newItem = step === index ? { ...newTabsItems[step], disabled: false } : item;
      return [...acc, newItem];
    }, []);

    setTabIndex(step);
    setNewTabsItems(newItems);
  };
  const nextStepTab = async (step: number) => {
    let res = true;
    if (nextStep) {
      res = await nextStep(idFormSelected);
    }
    if (res) changeItems(step);
  };
  useEffect(() => {
    if (formState && newTabsItems[tabIndex]) {
      setIdFormSelected(newTabsItems[tabIndex].idForm || '');
    }
  }, [formState, idFormSelected, newTabsItems, tabIndex]);

  return (
    <Tabs orientation={orientation} onChange={(index) => setTabIndex(index)} index={tabIndex}>
      <TabList>
        {newTabsItems.map(({ title, subtitle, disabled = false }, index) => (
          <Tab key={index} isDisabled={isSequency && !!disabled}>
            <Stack spacing={2}>
              <Heading type="h2">{title}</Heading>
              <Text fontSize="xs" color={index === tabIndex && formState?.errors[idFormSelected] ? 'red' : ''}>
                {subtitle}
              </Text>
            </Stack>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {newTabsItems.map(({ children }, index) => (
          <TabPanel key={index}>
            <>
              {children}
              {isSequency && index !== newTabsItems.length - 1 && (
                <Flex minWidth="max-content">
                  <Spacer />
                  <Button
                    variant={'link'}
                    rightIcon={<Icon iconName="ArrowRight" />}
                    onClick={() => nextStepTab(index + 1)}
                  >
                    Siguiente
                  </Button>
                </Flex>
              )}
            </>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export type { TabsProps };
export { TabsCustom };

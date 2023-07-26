import {
  Breadcrumb as BreadcrumbUI,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbProps,
} from '@chakra-ui/react';

interface Props extends BreadcrumbProps {
  links: { label: string; to?: string; isCurrent?: boolean }[];
}
const Breadcrumb = ({ color = 'textColor.secondary', fontSize = 'sm', links, ...props }: Props) => {
  return (
    <BreadcrumbUI color={color} fontSize={fontSize}>
      {links.map(({ label, to, isCurrent }) => (
        <BreadcrumbItem key={label} isCurrentPage={isCurrent}>
          <BreadcrumbLink href={to}>{label}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </BreadcrumbUI>
  );
};
export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator };

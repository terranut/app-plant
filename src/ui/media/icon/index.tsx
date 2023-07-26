import type { IconTypes } from '../../types';
import { Icon as CustomIcon } from '@chakra-ui/react';
import {
  Trash,
  Add,
  AddCircle,
  CloseCircle,
  Edit,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  DocumentDownload,
  Code,
  Check,
  Settings,
  Export,
  Chart2,
  DirectNotification,
  Profile2User,
  VideoPlay,
  Teacher,
  TaskSquare,
  Video,
  Smallcaps,
  Subtitle,
  Gallery,
  MessageQuestion,
  Notepad2,
  WristClock,
  Paperclip2,
  GoogleDrive,
  DocumentText,
  TickSquare,
  DocumentCopy,
  Cup,
  Buliding,
  ProfileAdd,
  Personalcard,
  GalleryExport,
  Tag,
  Icon as IconBase,
  Eye,
  EyeSlash,
  Google,
  More,
} from 'iconsax-react';

const Icons = {
  CloseCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  DocumentDownload,
  Code,
  Trash,
  Edit,
  Add,
  AddCircle,
  Check,
  Settings,
  Export,
  Chart2,
  DirectNotification,
  Profile2User,
  VideoPlay,
  Teacher,
  TaskSquare,
  Video,
  Smallcaps,
  Subtitle,
  Gallery,
  MessageQuestion,
  Notepad2,
  WristClock,
  Paperclip2,
  GoogleDrive,
  DocumentText,
  TickSquare,
  DocumentCopy,
  Cup,
  Buliding,
  ProfileAdd,
  Personalcard,
  Eye,
  EyeSlash,
  Google,
  GalleryExport,
  Tag,
  More,
};

interface IconProps extends React.ComponentProps<typeof CustomIcon> {
  fontSize?: string;
  iconName?: IconTypes;
}

const Icon = ({ iconName, fontSize, ...props }: IconProps) => {
  const As = iconName && Icons[iconName] ? Icons[iconName] : props.as;
  return <CustomIcon {...props} key={iconName} as={As} fontSize={fontSize} />;
};

export type { IconProps };

export { Icons, Icon };

export default Icon;

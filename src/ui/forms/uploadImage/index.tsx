import { ChangeEvent, useState } from 'react';
import { Box, Stack, Input, Image, Icon, Text } from '../..';

const UploadImage = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const [files, setFiles] = useState<FileList>();
  const [url, setURL] = useState('');
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;

    if (files && files.length > 0) {
      setFiles(files);
      setURL(URL.createObjectURL(files[0]));
    }
  };

  return (
    <Box
      w="90px"
      h="90px"
      borderColor="gray.300"
      borderStyle="dashed"
      borderWidth="2px"
      rounded="md"
      cursor="pointer"
      shadow="sm"
      role="group"
      transition="all 150ms ease-in-out"
      _hover={{
        shadow: 'md',
      }}
      as={'div'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Box position="relative" height="100%" width="100%" bg="background.main">
        <Box position="absolute" top="0" left="0" height="100%" width="100%" display="flex" flexDirection="column">
          <Stack height="100%" width="100%" display="flex" justify="center" spacing={4}>
            <Stack p="8" textAlign="center" spacing={2} alignItems="center">
              {files?.length && !isHovering ? (
                <Image src={url} alt={url} layout="fill" />
              ) : (
                <>
                  <Icon iconName="GalleryExport" fontSize="24px" />
                  <Text fontWeight="light" lineHeight={1} fontSize="sm">
                    Subir imagen
                  </Text>
                </>
              )}
            </Stack>
          </Stack>
        </Box>
        <Input
          type="file"
          height="100%"
          width="100%"
          position="absolute"
          top="0"
          left="0"
          opacity="0"
          accept="image/*"
          onChange={(event) => handleFileSelect(event)}
        />
      </Box>
    </Box>
  );
};

export default UploadImage;

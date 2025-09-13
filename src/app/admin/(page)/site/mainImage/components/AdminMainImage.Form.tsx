'use client';

import { useState } from 'react';
import axios from 'axios';
import { FiImage, FiUpload } from 'react-icons/fi';
import { useMutation, useQueryClient } from 'react-query';
import { Button, Card, FileButton, Group, Image, Stack, Text } from '@mantine/core';

export const AdminMainImageForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const queryClient = useQueryClient();

  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('serviceName', 'mainImage');
      formData.append('fileType', 'ATTACHMENT');
      formData.append('files', file);
      const res = await axios.post('/api/files/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mainImage'] });
      setFile(null);
    },
  });

  return (
    <Card withBorder shadow="sm" radius="md" p="lg">
      <Stack align="center" gap="md">
        <FiImage size={40} color="var(--mantine-color-blue-6)" />
        <Text size="lg" fw={500}>
          메인 이미지 업로드
        </Text>
        <Text c="dimmed" size="sm" ta="center">
          JPG, PNG 등 이미지 파일을 선택하세요. <br />
          업로드 시 현재 메인 이미지로 적용됩니다.
        </Text>

        {file && <Image src={URL.createObjectURL(file)} alt="preview" radius="md" w={200} />}

        <Group justify="center" gap="md">
          <FileButton onChange={setFile} accept="image/*">
            {(props) => (
              <Button variant="light" leftSection={<FiUpload size={16} />} {...props}>
                파일 선택
              </Button>
            )}
          </FileButton>

          <Button
            type="submit"
            onClick={() => file && uploadMutation.mutate(file)}
            loading={uploadMutation.isLoading}
            disabled={!file}
          >
            업로드
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};

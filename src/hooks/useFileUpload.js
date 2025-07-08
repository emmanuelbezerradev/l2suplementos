import { useState } from 'react';

export const useFileUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadFile = async (file) => {
    if (!file) return null;

    setUploading(true);
    setUploadProgress(0);

    try {
      // Simular progresso de upload
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setUploadProgress(i);
      }

      // Em produção, aqui você faria a chamada real para o servidor
      // const formData = new FormData();
      // formData.append('file', file);
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // });
      // const result = await response.json();
      // return result.url;

      // Por agora, retornar uma URL blob local
      const url = URL.createObjectURL(file);
      
      // Simular salvamento no "servidor" (localStorage para demo)
      const savedFiles = JSON.parse(localStorage.getItem('uploadedFiles') || '[]');
      const fileData = {
        id: Date.now(),
        name: file.name,
        size: file.size,
        type: file.type,
        url: url,
        uploadedAt: new Date().toISOString()
      };
      savedFiles.push(fileData);
      localStorage.setItem('uploadedFiles', JSON.stringify(savedFiles));

      return url;
    } catch (error) {
      console.error('Erro no upload:', error);
      throw new Error('Falha no upload do arquivo');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const deleteFile = (url) => {
    try {
      // Remover do localStorage
      const savedFiles = JSON.parse(localStorage.getItem('uploadedFiles') || '[]');
      const updatedFiles = savedFiles.filter(file => file.url !== url);
      localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));

      // Revogar URL blob se for local
      if (url.startsWith('blob:')) {
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Erro ao deletar arquivo:', error);
    }
  };

  const getUploadedFiles = () => {
    try {
      return JSON.parse(localStorage.getItem('uploadedFiles') || '[]');
    } catch {
      return [];
    }
  };

  return {
    uploadFile,
    deleteFile,
    getUploadedFiles,
    uploading,
    uploadProgress
  };
};

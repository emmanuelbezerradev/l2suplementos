import React, { useState, useRef } from 'react';
import { PhotoIcon, XMarkIcon, PlusIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { showToast } from '../../utils/toastUtils';

const MultipleImageUpload = ({ images = [], onImagesChange, maxImages = 5 }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const fileInputRef = useRef(null);

  // Simular upload (em produção, enviaria para servidor)
  const simulateUpload = async (file) => {
    setUploading(true);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          // Simular URL do arquivo enviado
          const fakeUrl = URL.createObjectURL(file);
          resolve(fakeUrl);
        } catch (error) {
          reject(error);
        }
      }, 1500);
    });
  };

  const handleMultipleFiles = async (files) => {
    const fileArray = Array.from(files);
    const remainingSlots = maxImages - images.length;
    
    if (fileArray.length > remainingSlots) {
      showToast.warning('Limite excedido', `Você pode adicionar apenas mais ${remainingSlots} imagem(ns).`);
      return;
    }

    // Processar todos os arquivos em paralelo
    const validFiles = [];
    
    for (const file of fileArray.slice(0, remainingSlots)) {
      // Validar tipo de arquivo
      if (!file.type.startsWith('image/')) {
        showToast.error('Arquivo inválido', `${file.name} não é uma imagem válida.`);
        continue;
      }

      // Validar tamanho (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        showToast.error('Arquivo muito grande', `${file.name} é muito grande (máx 5MB).`);
        continue;
      }

      validFiles.push(file);
    }

    if (validFiles.length === 0) {
      setUploading(false);
      return;
    }
    
    try {
      // Upload de todos os arquivos válidos
      const uploadPromises = validFiles.map(file => simulateUpload(file));
      const uploadedUrls = await Promise.all(uploadPromises);
      
      // Adicionar todas as URLs de uma vez, mantendo as existentes
      const newImages = [...images, ...uploadedUrls];
      
      onImagesChange(newImages);
      showToast.success('Upload concluído', `${uploadedUrls.length} imagem(ns) adicionada(s) com sucesso.`);
    } catch (error) {
      console.error('Erro no upload:', error);
      showToast.error('Erro no upload', 'Erro ao fazer upload das imagens.');
    } finally {
      setUploading(false);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleMultipleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      handleMultipleFiles(e.target.files);
    }
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
  };

  const removeImage = (indexToRemove) => {
    const newImages = images.filter((_, index) => index !== indexToRemove);
    onImagesChange(newImages);
  };

  // Funções de drag & drop para reordenar
  const handleImageDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleImageDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
  };

  const handleImageDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleImageDrop = (e, dropIndex) => {
    e.preventDefault();
    setDragOverIndex(null);
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      return;
    }

    const newImages = [...images];
    const draggedImage = newImages[draggedIndex];
    
    // Remove a imagem da posição original
    newImages.splice(draggedIndex, 1);
    
    // Insere na nova posição
    newImages.splice(dropIndex, 0, draggedImage);
    
    onImagesChange(newImages);
    setDraggedIndex(null);
  };

  const handleImageDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Imagens do Produto ({images.length}/{maxImages})
      </label>

      {/* Grid de imagens existentes */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((imageUrl, index) => (
            <div 
              key={index} 
              className={`relative group cursor-move transition-all duration-200 ${
                dragOverIndex === index ? 'transform scale-105 z-10' : ''
              } ${draggedIndex === index ? 'opacity-50' : ''}`}
              draggable
              onDragStart={(e) => handleImageDragStart(e, index)}
              onDragOver={(e) => handleImageDragOver(e, index)}
              onDragLeave={handleImageDragLeave}
              onDrop={(e) => handleImageDrop(e, index)}
              onDragEnd={handleImageDragEnd}
            >
              <img
                src={imageUrl}
                alt={`Produto ${index + 1}`}
                className={`w-full h-32 object-cover rounded-lg border-2 shadow-sm transition-all duration-200 ${
                  dragOverIndex === index 
                    ? 'border-blue-500 border-dashed bg-blue-50' 
                    : 'border-gray-300'
                }`}
              />
              
              {/* Ícone de arrastar */}
              <div className="absolute top-1 left-1 bg-black bg-opacity-50 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                <Bars3Icon className="w-3 h-3" />
              </div>
              
              {/* Botão de remover */}
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg opacity-0 group-hover:opacity-100"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>

              {/* Badge de imagem principal */}
              {index === 0 && (
                <div className="absolute bottom-1 left-1 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Principal
                </div>
              )}

              {/* Indicador de posição */}
              <div className="absolute top-1 right-1 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
                {index + 1}
              </div>
            </div>
          ))}

          {/* Botão de adicionar mais imagens */}
          {images.length < maxImages && (
            <div
              className={`relative border-2 border-dashed rounded-lg h-32 transition-colors cursor-pointer flex flex-col items-center justify-center ${
                dragActive
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              } ${uploading ? 'pointer-events-none opacity-50' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={openFileSelector}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              {uploading ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-xs text-gray-600 mt-1">Enviando...</p>
                </div>
              ) : (
                <div className="text-center">
                  <PlusIcon className="mx-auto h-6 w-6 text-gray-400" />
                  <p className="text-xs text-gray-500 mt-1">Adicionar</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Informação sobre reordenação */}
      {images.length > 1 && (
        <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg border border-blue-200">
          <p className="flex items-center gap-2">
            <Bars3Icon className="w-4 h-4 text-blue-600" />
            <strong>Dica:</strong> Arraste as imagens para reordená-las. A primeira imagem será exibida como principal na loja.
          </p>
        </div>
      )}

      {/* Área de upload inicial (quando não há imagens) */}
      {images.length === 0 && (
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 transition-colors ${
            dragActive
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          } ${uploading ? 'pointer-events-none opacity-50' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          <div className="text-center">
            {uploading ? (
              <div className="space-y-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-sm text-gray-600">Fazendo upload...</p>
              </div>
            ) : (
              <div className="space-y-3">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div>
                  <button
                    type="button"
                    onClick={openFileSelector}
                    className="text-blue-600 hover:text-blue-500 font-medium"
                  >
                    Clique para fazer upload de imagens
                  </button>
                  <p className="text-gray-500">ou arraste e solte aqui</p>
                </div>
                <p className="text-sm text-gray-500">
                  Adicione até {maxImages} imagens • PNG, JPG, GIF até 5MB cada
                </p>
                <p className="text-xs text-gray-400">
                  A primeira imagem será a principal
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Dicas de uso */}
      <div className="text-xs text-gray-500 space-y-1">
        <p>• A primeira imagem será exibida como principal na loja</p>
        <p>• Você pode adicionar até {maxImages} imagens por produto</p>
        <p>• Formatos aceitos: PNG, JPG, GIF (máx 5MB cada)</p>
      </div>
    </div>
  );
};

export default MultipleImageUpload;

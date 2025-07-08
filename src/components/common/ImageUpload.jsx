import React, { useState, useRef } from 'react';
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ImageUpload = ({ value, onChange, onRemove }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  // Simular upload (em produção, enviaria para servidor)
  const simulateUpload = async (file) => {
    setUploading(true);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simular URL do arquivo enviado
        const fakeUrl = URL.createObjectURL(file);
        resolve(fakeUrl);
      }, 2000);
    });
  };

  const handleFile = async (file) => {
    if (!file) return;

    // Validar tipo de arquivo
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione apenas arquivos de imagem.');
      return;
    }

    // Validar tamanho (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('O arquivo deve ter no máximo 5MB.');
      return;
    }

    try {
      const uploadedUrl = await simulateUpload(file);
      onChange(uploadedUrl);
    } catch (error) {
      alert('Erro ao fazer upload da imagem.');
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

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Imagem do Produto
      </label>

      {value ? (
        // Preview da imagem
        <div className="relative w-48 h-48 mx-auto">
          <img
            src={value}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg border-2 border-gray-300 shadow-md"
          />
          <button
            type="button"
            onClick={() => onRemove && onRemove()}
            className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
            Clique no X para remover
          </div>
        </div>
      ) : (
        // Área de upload
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 transition-colors w-48 h-48 mx-auto flex flex-col items-center justify-center ${
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
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          <div className="text-center">
            {uploading ? (
              <div className="space-y-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-xs text-gray-600">Fazendo upload...</p>
              </div>
            ) : (
              <div className="space-y-3">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div>
                  <button
                    type="button"
                    onClick={openFileSelector}
                    className="text-blue-600 hover:text-blue-500 font-medium text-sm"
                  >
                    Clique para fazer upload
                  </button>
                  <p className="text-gray-500 text-xs">ou arraste e solte aqui</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF até 5MB
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Opção de URL manual */}
      <div className="text-center">
        <span className="text-sm text-gray-500">ou</span>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          URL da Imagem (opcional)
        </label>
        <input
          type="url"
          value={value && value.startsWith('blob:') ? '' : value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="https://exemplo.com/imagem.jpg"
          disabled={uploading}
        />
        <p className="text-xs text-gray-500 mt-1">
          Cole uma URL de imagem externa se preferir
        </p>
      </div>
    </div>
  );
};

export default ImageUpload;

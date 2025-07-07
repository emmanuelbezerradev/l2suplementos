# 🖼️ Carrossel do HeroBanner - L2 Suplementos

## 📷 Imagens Atualmente Configuradas
O carrossel já está configurado com **5 imagens reais** dos produtos:

1. **Creatina** (`creatina.webp`) - Azul para Roxo
2. **Integral Médica** (`integral capa.png`) - Verde para Azul-verde  
3. **Black Skull** (`black-skull.webp`) - Cinza para Preto
4. **Probiótica** (`probiotica.jpg`) - Verde para Esmeralda
5. **Shark Pro** (`sharkpro.webp`) - Índigo para Azul

## 📁 Passo 1: Adicionar Nova Imagem
1. Coloque sua nova imagem na pasta: `src/assets/`
2. Formatos recomendados: `.webp`, `.jpg`, `.png`
3. Tamanho recomendado: 1920x1080 ou maior
4. Nome sugerido: use nomes descritivos (ex: `whey-protein.webp`, `bcaa-premium.jpg`)

## ⚙️ Passo 2: Configurar no Código
1. Abra o arquivo: `src/components/common/HeroBanner.jsx`
2. Encontre o array `backgroundSlides` (linha ~18)
3. Adicione um novo objeto ao final do array:

```javascript
{
  id: 6, // Próximo ID disponível
  image: "/src/assets/sua-nova-imagem.webp", // Caminho da sua imagem
  title: "Nome do Produto", // Título que aparece na info
  subtitle: "Descrição do produto", // Subtítulo
  color: "from-blue-600 to-purple-700", // Gradiente (quase invisível)
  category: "Categoria" // Categoria do produto
}
```

## 🎨 Opções de Gradientes Disponíveis
- `from-blue-600 to-purple-700` (Azul para Roxo)
- `from-emerald-600 to-teal-700` (Verde para Azul-verde)
- `from-orange-600 to-red-700` (Laranja para Vermelho)
- `from-purple-600 to-pink-700` (Roxo para Rosa)
- `from-indigo-600 to-blue-700` (Índigo para Azul)
- `from-green-600 to-emerald-700` (Verde)
- `from-red-600 to-orange-700` (Vermelho para Laranja)
- `from-pink-600 to-purple-700` (Rosa para Roxo)
- `from-yellow-600 to-orange-700` (Amarelo para Laranja)
- `from-teal-600 to-cyan-700` (Azul-verde para Ciano)

## 🚀 Características do Carrossel
- ✅ **Imagens 100% visíveis** - Sem overlays bloqueando
- ✅ **Auto-slide a cada 6 segundos** - Tempo ideal para visualização
- ✅ **Transições suaves** - Efeitos profissionais
- ✅ **Indicadores clicáveis** - Pontos no canto superior direito
- ✅ **Zoom suave** - Animação elegante na imagem ativa
- ✅ **Info do produto** - Card no canto inferior direito
- ✅ **Responsivo** - Funciona em todos os dispositivos

## 📝 Exemplo Completo
```javascript
{
  id: 6,
  image: "/src/assets/whey-protein-premium.webp",
  title: "Whey Protein Isolado",
  subtitle: "Proteína pura e de rápida absorção",
  color: "from-indigo-600 to-blue-700",
  category: "Proteínas"
}
```

## ⚠️ Observações Importantes
- As imagens são exibidas **100% VISÍVEIS** - sem overlays bloqueando
- O gradiente configurado tem apenas **5% de opacidade** (quase invisível)
- Certifique-se de que as imagens tenham **boa qualidade e resolução**
- As imagens devem ter **produtos bem destacados** para melhor visualização
- O carrossel funciona automaticamente após configurar
- **Auto-slide a cada 6 segundos** para melhor visualização

## 🔄 Status Atual
✅ **5 imagens configuradas** e funcionando
🎯 **Pronto para expansão** - basta adicionar novos objetos ao array
🚀 **Carrossel totalmente visível** - sem interferências visuais

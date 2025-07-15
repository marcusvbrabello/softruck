# Softruck - Frontend 3D Car

## Descrição

Aplicação frontend desenvolvida como parte do processo seletivo da Softruck. O projeto consiste em uma tela que exibe um carro animado se deslocando sobre um mapa, com base em dados reais de GPS.

## Tecnologias Utilizadas

### Framework Principal

-   **React Native com Expo**: Escolhido para desenvolvimento multiplataforma (iOS/Android) com facilidade de configuração e deploy. O Expo oferece APIs nativas otimizadas e um ambiente de desenvolvimento ágil.
-   **TypeScript**: Para tipagem estática, melhor IntelliSense, detecção de erros em tempo de desenvolvimento e maior robustez do código.

### Navegação e Roteamento

-   **Expo Router**: Sistema de roteamento baseado em arquivos, similar ao Next.js, que simplifica a navegação e oferece uma estrutura mais organizada para rotas.

### Estado Global

-   **Zustand**: Gerenciamento de estado leve e performático, escolhido pela simplicidade de implementação e menor boilerplate comparado ao Redux.

### Mapas e Localização

-   **React Native Maps**: Para renderização de mapas nativos com performance otimizada. Utiliza MapKit no iOS e Google Maps no Android.

### Internacionalização

-   **i18n-js** + **expo-localization**: Para suporte multilíngue completo, detectando automaticamente o idioma do dispositivo e oferecendo fallback para idiomas não suportados.

### Estilização

-   **StyleSheet (React Native)**: Optei por utilizar o StyleSheet nativo do React Native ao invés de SCSS, pois se trata de um projeto desenvolvido especificamente para mobile. O StyleSheet oferece:
    -   Performance otimizada para dispositivos móveis
    -   Tipagem nativa com TypeScript
    -   Integração perfeita com as APIs do React Native
    -   Sistema de unidades responsivo (utilizando função `resizePixel` personalizada)
    -   Menos dependências e configurações desnecessárias

### Arquitetura

-   **MVVM Pattern**: Separação clara entre View (componentes), ViewModel (lógica de apresentação) e Model (dados), facilitando manutenção e testes.

## Estrutura do Projeto

```
app/
├── @types/           # Tipagens TypeScript
├── components/       # Componentes reutilizáveis
├── constants/        # Dados estáticos e configurações
├── i18n/            # Arquivos de internacionalização
├── utils/           # Funções utilitárias
├── view_models/     # Lógica de negócio (MVVM)
├── views/           # Telas da aplicação
└── stores/          # Estados globais (Zustand)
```

## Funcionalidades Implementadas

### Principais

-   ✅ Mapa interativo com trajetos GPS
-   ✅ Animação de sprite do carro baseada na direção
-   ✅ Visualização de múltiplos pontos de trajeto

### Bônus

-   ✅ Velocidade do veículo influencia na animação
-   ✅ Seleção de diferentes trajetos pelo usuário
-   ✅ Interface multilíngue (PT/EN)

## Como Executar

### Pré-requisitos

-   Node.js 18+
-   Expo CLI
-   Dispositivo físico ou emulador

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar o projeto
npm start

# Para plataformas específicas
npm run android  # Android
npm run ios      # iOS
```

## Técnicas Destacadas

### Animação de Sprite

Implementação de sprite sheet para rotação do carro baseada na direção GPS, utilizando transformações CSS otimizadas.

### Responsividade

Sistema de redimensionamento automático através da função `resizePixel`, garantindo consistência visual em diferentes tamanhos de tela.

### Performance

-   Gerenciamento de estado otimizado com Zustand
-   Animações performáticas com transformações CSS nativas
-   Cálculos geográficos precisos usando fórmula de Haversine
-   Utilização de componentes nativos do React Native Maps

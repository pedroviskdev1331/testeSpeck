# 🚀 Automação de Testes - Quadro Kanban
## 📋 Descrição do Projeto

Este projeto contém uma automação completa de testes para um quadro Kanban desenvolvido em React, utilizando **Cypress** como framework principal. A automação foi construída com foco em **arquitetura de commands personalizados**, evitando duplicidade de código e mantendo um código limpo, legível e altamente reutilizável.

### 🎯 Objetivos Alcançados

- ✅ **Cobertura completa** de funcionalidades críticas
- ✅ **Arquitetura escalável** com commands reutilizáveis
- ✅ **Dados centralizados** em fixtures
- ✅ **Testes organizados** por funcionalidade
- ✅ **Relatórios detalhados** com Allure
- ✅ **Integração contínua** preparada
- ✅ **Tratamento de desafios** de segurança (Vercel)

### 📊 **Relatório Allure - Dashboard Principal**

![Relatório Allure](images/allure-report-example.png)

---

## 🏗️ Arquitetura do Projeto

### 📁 Estrutura de Diretórios

```
📦 testeTiago/
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   ├── 📄 tarefas.cy.js          # Testes de tarefas (CRUD + movimentação)
│   │   ├── 📄 listas.cy.js           # Testes de listas (CRUD)
│   │   └── 📄 interface.cy.js        # Testes de interface (UI/UX)
│   ├── 📁 fixtures/
│   │   └── 📄 testData.json          # Dados centralizados para testes
│   ├── 📁 support/
│   │   ├── 📄 e2e.js                 # Configuração principal de suporte
│   │   ├── 📄 tarefas.js             # Commands para tarefas
│   │   ├── 📄 listas.js              # Commands para listas
│   │   └── 📄 validacoes.js          # Commands para validações
│   └── 📁 downloads/                 # Arquivos baixados durante testes
├── 📄 cypress.config.js              # Configuração principal do Cypress
├── 📄 package.json                   # Dependências e scripts
└── 📄 README.MD                      # Documentação do projeto
```

### 🔧 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **Cypress** | 14.4.1 | Framework principal de automação |
| **cypress-real-events** | 1.14.0 | Simulação de eventos reais (drag & drop) |
| **@shelex/cypress-allure-plugin** | 2.41.2 | Geração de relatórios detalhados |

---

## 🎮 Funcionalidades Testadas

### 📋 **Gestão de Tarefas**
- ✅ **Adicionar tarefas** em todas as colunas (To Do, In Progress, Done)
- ✅ **Excluir tarefas** de todas as colunas
- ✅ **Validação de posicionamento** de tarefas nas colunas corretas

### 📝 **Gestão de Listas**
- ✅ **Criar novas listas** com nomes personalizados
- ✅ **Excluir listas** existentes
- ✅ **Validação de criação** e remoção de listas

### 🎨 **Interface e Temas**
- ✅ **Switch de tema** (claro/escuro)
- ✅ **Colunas padrão** com ícones 
- ✅ **Responsividade** em diferentes viewports

---

## 🎯 Casos de Teste Implementados

### 📋 **Testes de Tarefas** (`tarefas.cy.js`)

#### **Operações CRUD**
1. ✅ Adicionar tarefa na coluna **To Do**
2. ✅ Excluir tarefa da coluna **To Do**
3. ✅ Adicionar tarefa na coluna **In Progress**
4. ✅ Excluir tarefa da coluna **In Progress**
5. ✅ Adicionar tarefa na coluna **Done**
6. ✅ Excluir tarefa da coluna **Done**


### 🎨 **Testes de Interface** (`interface.cy.js`)

1. ✅ **Validar colunas padrão** do Kanban
2. ✅ **Validar switch de tema** e funcionalidade
3. ✅ **Validar responsividade** da interface

### 📝 **Testes de Listas** (`listas.cy.js`)

1. ✅ **Adicionar uma lista** com sucesso
2. ✅ **Excluir uma lista** com sucesso

---

## 🚀 Como Executar

### 📋 **Pré-requisitos**

```bash
# Node.js 16+ instalado
node --version

# npm ou yarn
npm --version
```

### ⚙️ **Instalação**

```bash
# Clonar o repositório
git clone <repository-url>
cd testeTiago

# Instalar dependências
npm install
```

### 🎮 **Execução dos Testes**

#### **Executar Todos os Testes**
```bash
npm run e2e
```

#### **Executar Testes Específicos**
```bash
# Apenas testes de tarefas
npx cypress run --spec "cypress/e2e/tarefas.cy.js"

# Apenas testes de listas
npx cypress run --spec "cypress/e2e/listas.cy.js"

# Apenas testes de interface
npx cypress run --spec "cypress/e2e/interface.cy.js"

# Modo interativo
npx cypress open
```

#### **Gerar Relatórios Allure**
##### **Precisa ter o Java instalado e configurado**
```bash
# Executar testes + gerar relatório
npm run test:allure

# Apenas gerar relatório (após execução)
npm run report:allure
```

---

## 📊 Relatórios e Métricas

### 📈 **Allure Reports**

O projeto está configurado para gerar relatórios detalhados usando **Allure Framework**:

- 📊 **Métricas de execução** (pass/fail/skip)
- 📋 **Detalhes dos testes** com screenshots
- 🎯 **Tempo de execução** por teste
- 📝 **Logs detalhados** de cada comando
- 🖼️ **Screenshots automáticos** em falhas

### 📋 **Comandos de Relatório**

```bash
# Executar testes + relatório completo
npm run test:allure

# Apenas abrir relatório existente
npm run report:allure
```

---

## ⚙️ Configurações Avançadas


## 🎨 Seletores e Estratégias

### 🎯 **Seletores Estáveis Utilizados**

#### **IDs Únicos**
```javascript
'[id="📝  To DoCreateTask"]'
'[id="💻  In ProgressCreateTask"]'
'[id="🚀  DoneCreateTask"]'
```

#### **Textos e Conteúdo**
```javascript
'h1:contains("📝  To Do")'
'p:contains("Adicionar outra lista")'
'input[placeholder*="tarefa"]'
```

#### **Atributos Específicos**
```javascript
'input[role="switch"]'
'svg[viewBox="0 0 24 24"]'
```

### 🚫 **Seletores Evitados**

- ❌ Classes CSS dinâmicas (`.sc-gKXOVf`, `.sc-iBkjds`)
- ❌ Seletores baseados em posição
- ❌ Classes geradas automaticamente
- ❌ Seletores baseados em estilos

---

## 🔄 Dados de Teste

### 📄 **Estrutura do testData.json**

```json
{
  "tarefas": {
    "validas": [
      "Teste de automação",
      "Implementar novos testes",
      "Revisar documentação",
      "Atualizar dependências",
      "Criar relatórios",
      "Validar funcionalidades"
    ],
    "invalidas": ["", "   ", null]
  },
  "listas": {
    "validas": [
      "Nova Lista",
      "Backlog",
      "Em Revisão",
      "Concluído",
      "Testes",
      "Documentação"
    ]
  },
  "colunas": {
    "todo": "todo",
    "emProgresso": "in-progress",
    "concluido": "done"
  }
}
```

---

## 🚀 Integração Contínua

### 📋 **GitHub Actions** (Preparado)

O projeto está estruturado para integração com CI/CD:

```yaml
# .github/workflows/cypress.yml
name: Cypress Tests
on: [push, pull_request]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: cypress-io/github-action@v6
        with:
          start: npm start
```

---

## 🎯 Características Técnicas

- 🏗️ **Arquitetura escalável** com commands reutilizáveis
- 📊 **Cobertura completa** de funcionalidades críticas
- 📝 **Documentação detalhada** e atualizada
- 🎨 **Código limpo** e bem estruturado
- 📈 **Relatórios avançados** com Allure
- 🔄 **Dados centralizados** em fixtures
- 🎯 **Seletores estáveis** e confiáveis

### 🚀 **Inovações Implementadas**

- 🎮 **cypress-real-events** para drag & drop realista
- 📊 **Relatórios Allure** integrados
- 🎯 **Testes organizados** por funcionalidade

---

## 👨‍💻 Autor

**Pedro Romulo** - Desenvolvedor de Automação de Testes

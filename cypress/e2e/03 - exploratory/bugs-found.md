# Bugs Encontrados

---

## BUG 1 - Fluxo de recuperação de senha não funciona

### Severidade
Média

### Prioridade
Média

### Passos para reproduzir
1. Acessar a tela de login
2. Clicar em "Esqueceu sua senha?"

### Resultado Esperado
O sistema deve redirecionar o usuário para o fluxo de recuperação de senha.

### Resultado Obtido
O clique não realiza nenhum redirecionamento ou ação.
O usuário permanece na tela de login.

---

## BUG 2 - Mensagem de autenticação incorreta com credenciais válidas

### Severidade
Alta

### Prioridade
Alta

### Passos para reproduzir
1. Acessar a tela de login
2. Informar credenciais válidas:
   - Email: qa@test.com
   - Senha: 123456
3. Clicar em "Entrar"

### Resultado Esperado
O sistema deve autenticar o usuário normalmente sem apresentar mensagens de erro.

### Resultado Obtido
O sistema apresenta a mensagem:
"Seu login está incorreto, quer continuar?"
mesmo utilizando credenciais válidas.

Após clicar em "Continuar", o usuário é autenticado normalmente.

---

## BUG 3 - Botão arquivar exclui o banco de dados

### Severidade
Crítica

### Prioridade
Alta

### Passos para reproduzir
1. Realizar login no sistema
2. Criar um novo banco de dados
3. Clicar no botão "Arquivar"

### Resultado Esperado
O banco de dados deve ser movido para a área de itens arquivados.

### Resultado Obtido
O banco de dados é excluído permanentemente ao invés de ser arquivado.

---

## BUG 4 - Inconsistência na funcionalidade de itens arquivados

### Severidade
Alta

### Prioridade
Média

### Passos para reproduzir
1. Acessar a área de itens arquivados
2. Tentar arquivar um banco de dados

### Resultado Esperado
Os bancos arquivados devem ser exibidos corretamente na área de itens arquivados.

### Resultado Obtido
Nenhum banco pode ser arquivado, pois a ação de arquivar remove permanentemente o registro.
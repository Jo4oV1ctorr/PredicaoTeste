# 🧪 Projeto com Testes Unitários em Python

Este repositório contém a aplicação Flask acompanhada de uma suíte de testes automatizados que eu, **João Victor**, fui responsável por desenvolver. O foco foi garantir a qualidade das principais rotas da aplicação, simular falhas e validar o comportamento da API frente a diferentes tipos de entradas — tudo isso utilizando **testes unitários com `unittest`**, uma biblioteca padrão do Python.

---

## 🚀 Minhas responsabilidades

Fui o responsável pela implementação completa dos testes automatizados, com foco nos seguintes pontos:

- Teste de resposta das rotas principais da aplicação (`/`, `/dashboard`, `/predict`, `/dashboard_data`);
- Teste de entradas válidas e inválidas no endpoint `/predict`;
- Simulação de falhas de conexão com o MongoDB para verificar a resiliência da aplicação;
- Configuração de logging para tornar os testes mais informativos e fáceis de rastrear.

---

## 📁 Estrutura dos testes

O arquivo de testes implementado é:


As bibliotecas utilizadas estão listadas no `requirements.txt`. Execute o seguinte comando para instalá-las:

``
pip install -r requirements.txt ``

Como rodar os testes 

``
python test_main.py `` ou ``python -m unittest test_main.py -v``

Você verá uma saída semelhante a esta no terminal:

✅ Rota '/' respondeu com 200 OK.
✅ Rota '/dashboard' respondeu com 200.
✅ Rota '/predict' com dados válidos funcionou corretamente.
✅ Rota '/predict' respondeu corretamente com erro para dados inválidos.
✅ Rota '/dashboard_data' respondeu com dados esperados.
❌ Falha simulada na conexão com o MongoDB ocorreu como esperado.
.
----------------------------------------------------------------------
Ran 6 tests in 0.XXXs

OK

Pré-requisitos

Certifique-se de ter o Python instalado (versão 3.8 ou superior recomendada) e que você já tenha a aplicação main.py no mesmo diretório dos testes.

📄 Relatório
Caso deseje ver o relatório técnico completo sobre a implementação dos testes, você pode acessar o PDF clicando no link abaixo:

📄 [Clique aqui para ver o PDF](./Documentação%20e%20Relatório.pdf)









# Gitlab Member Overview  

> Esse projeto tem o objetivo de monitorar e acompanhar as atividades dos membros da InfoJr.  

#### To-Do list:  
* [ ] Visualizar todos os membros (e não somentes os que fecharam issues)  
* [ ] Mostrar as milestones analizadas  
* [ ] Considerar uma pontuação para commits
* [ ] Criar uma animação para o membro de maior pontuação  

## Instalando  
*  `git clone https://gitlab.com/heboli/gitlab-member-overview.git`
*  `cd gitlab-member-overview`
*  `npm install`
*  copie o .env.example para um arquivo chamado .env
*  preencha as configurações necessárias para o projeto ([como configurar](#configurando))
*  `npm start`

## Configurando
No arquivo _.env_ os seguintes atributos deverão ser configurados:  

| Atributo | Definição | Valor Padrão |
|  ------  |  -------  | :----------: |
| **REACT_APP_ACESS_TOKEN**     | Acess token gerado no gitlab ([como gerar](#Integrando))|    -    |
| **REACT_APP_GITLAB_GROUP_ID** | Id do grupo a ser monitorado                            |    -    |
| **REACT_APP_PRIZES**          | Numero de membros a ser honrado*                       |    3    |
| **REACT_APP_MEMBER_GOAL**     | Peso minimo de issues que cada membro deve alcançar     |    6    |

\* Ex.: REACT_APP_PRIZES=3 significa que as(os) 3 melhores são honradas  

## Intagrando  

Acesse a pagina de configurações do seu gitlab na área de Acess Token  

![image](/uploads/7b33c8c6808f946085379934262234eb/image.png)   ![image](/uploads/ed6837756ec1c8b601592d200f3d224b/image.png)  

Crie uma chave com scope de API e defina o valor de **REACT_APP_ACESS_TOKEN** do _.env_ com essa chave  

![image](/uploads/a4ce9cc64c2f576980dbd353e69257de/image.png) 
 

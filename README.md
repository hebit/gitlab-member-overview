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
| **REACT_APP_GITLAB_GROUP_ID** | Id do grupo a ser monitorado                            | 3340354 |
| **REACT_APP_PRIZES**          | Numero de membros a ser honrado*                       |    3    |
| **REACT_APP_MEMBER_GOAL**     | Peso minimo de issues que cada membro deve alcançar     |    6    |

\* Ex.: REACT_APP_PRIZES=3 significa que as(os) 3 melhores são honradas  

## Intagrando  

Acesse a pagina de configurações do seu gitlab na área de Acess Token  

![image](/uploads/7b33c8c6808f946085379934262234eb/image.png)   ![image](/uploads/ed6837756ec1c8b601592d200f3d224b/image.png)  

Crie uma chave com scope de API e defina o valor de **REACT_APP_ACESS_TOKEN** do _.env_ com essa chave  

![image](/uploads/a4ce9cc64c2f576980dbd353e69257de/image.png)  

###### O conteudo a seguir faz parte da documentação default do [Create React App](https://github.com/facebook/create-react-app).

## 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

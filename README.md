# FillableString
Classe para criação de strings, onde se deseja ter controle sobre posição e quantidade de caracteres, 
ideal para criação de string para arquivos de remessas bancárias e outros onde controle da informação no texto é feito por posição.

Repositório NPM: https://www.npmjs.com/package/fillablestring

## Instalação via NPM

```sh 
npm install fillablestring --save
```

## Exemplo de uso 
```js
const FillableString = require('fillablestring')

const stringText = new FillableString();
stringText.fill('REMESSA')
stringText.fill(' ')
stringText.fill("123456", 5, FillableString.POSITION_RIGHT)
stringText.fill(' ')
stringText.fill('JOÃO PEDRO DA SILVA')
stringText.fill("9", 2, FillableString.POSITION_LEFT)
stringText.fill("21", 2, FillableString.POSITION_RIGHT)
stringText.fill("\n")
stringText.fill('JOÃO PEDRO DA SILVA')
stringText.fill(' ', 27, FillableString.POSITION_RIGHT)
stringText.fill('joao@gmail.com')
stringText.fill('21', 2, FillableString.POSITION_RIGHT)

console.info(stringText.getString())
```

Retorno da execução acima será:
```sh
99REMESSA 123456123456123456123456123456 JOÃO PEDRO DA SILVA2121
JOÃO PEDRO DA SILVA                           joao@gmail.com2121
```

## Documentação dos métodos
* **fill(string)**

Preenche com determinado texto a string criada, exemplo:
```js
const FillableString = require('fillablestring')

const stringText = new FillableString();
stringText.fill('REMESSA')

console.info(stringText.getString())
```
Retorno da execução acima será:
```sh
REMESSA
```

* **fill(string, size)**

Preenche com determinado texto a string criada repetindo ela x número de vezes:
```js
const FillableString = require('fillablestring')

const stringText = new FillableString();
stringText.fill('R', 2)

console.info(stringText.getString())
```
Retorno da execução acima será:
```sh
RR
```

* **fill(string, size, position)**

Preenche com determinado texto a string criada possibilitando informar quantas vezes o texto irá se repetir informando esse valor no segundo parâmetro. Pode definir se o se a string será adicionada à direita ou a esquerda do texto, através do parametro **possition** onde os valores permitidos são **FillableString.POSITION_LEFT** ou **FillableString.POSITION_RIGHT**, exemplo: 
```js
const FillableString = require('fillablestring')

const stringText = new FillableString();
stringText.fill('REMESSA')
stringText.fill("@", 2, FillableString.POSITION_LEFT)
stringText.fill("-", 2, FillableString.POSITION_RIGHT)

console.info(stringText.getString()) 
```

Retorno da execução acima será:
```sh
@@REMESSA--
```

* **fillAndCompleteWith(string, fillable, size, position)**

Preenche uma string com número exatos de caracteres completando espaços vazios com algum caracter especifico, 
ideal para preenchimento de string com tamanho fixo, onde deve-se completar os espaços faltante com algum caracters, exemplo:

```js
const FillableString = require('fillablestring')

const stringText = new FillableString();
stringText.fillAndCompleteWith('Pedro', 0, 15, FillableString.POSITION_LEFT)

console.info(stringText.getString())
```

Retorno da execução acima será:
```sh
0000000000Pedro
```

* **removeSpecialCharacter()**

Altera string removendo todos os caracteres especiais, exemplo:

```js
const FillableString = require('fillablestring')

const stringText = new FillableString();
stringText.fill('654.498.480-99')
stringText.removeSpecialCharacter()

console.info(stringText.getString())
```

Retorno da execução acima será:
```sh
65449848099
```

* **removeWhiteSpaces()**

Altera string removendo todos os espaços vazios, exemplo:

```js
const FillableString = require('fillablestring')

const stringText = new FillableString();
stringText.fill('JOÃO PEDRO DA SILVA')
stringText.removeWhiteSpaces()

console.info(stringText.getString())
```

Retorno da execução acima será:
```sh
JOÃOPEDRODASILVA
```

* **getByPosition(start, end)**

Retorna um trecho da string com base na sua posição, onde a primeira posição do texto é sempre 1, exemplo:

```js
const FillableString = require('fillablestring')

const stringText = new FillableString();
stringText.fill('JOÃO PEDRO DA SILVA')

console.info(stringText.getByPosition(6, 10))
```

Retorno da execução acima será:
```sh
PEDRO
```

* **completeWith(string, size, position)**

Preenche os espaços vazios de uma string até completar um certo número de caracteres, podendo escolher a posição do preenchimento, sendo para direita ou esquerda, exemplo:

```js
const stringText = new FillableString();
stringText.fill('123')
stringText.completeWith(0, 6, FillableString.POSITION_LEFT)
```
Retorno da execução acima será:
```sh
000123
```

* **insertBefore(stringToFind, stringToAdd)**

Insere uma string antes de uma string informada, exemplo:

```js
const FillableString = require('fillablestring')

const stringText = new FillableString();
stringText.fill('JOÃO PEDRO')
stringText.insertBefore('JOÃO', 'NOME: ')
console.info(stringText.getString())
```

Retorno da execução acima será:
```sh
NOME: JOÃO PEDRO
```

* **insertAfter(stringToFind, stringToAdd)**

Insere uma string após a string informada, exemplo:

```js
const FillableString = require('fillablestring')

const stringText = new FillableString();
stringText.fill('JOÃO PEDRO')
stringText.insertAfter('JOÃO', ' E')
console.info(stringText.getString())
```

Retorno da execução acima será:
```sh
JOÃO E PEDRO
```

## Teste unitário

Para executar os testes unitários deve-se executar o comando para instalar as dependências:

```sh
yarn install
```

Após instalado as depedências deve-se executar o teste untiário com o comando:
```sh
yarn test
```
O retorno deverá ser:

```sh
yarn run v1.22.10
$ jest --config ./jest.config.json
 PASS  ./fillableString.test.js
  FillableString
    ✓ Testando método constructor(string) (1 ms)
    ✓ Testando método fill(string)
    ✓ Testando método fill(string, size)
    ✓ Testando método fill(string, size, position) : FillableString.POSITION_RIGHT
    ✓ Testando método fill(string, size, position) : FillableString.POSITION_LEFT
    ✓ Testando método fillAndCompleteWith(string, fillable, size, position) : FillableString.POSITION_RIGHT (1 ms)
    ✓ Testando método fillAndCompleteWith(string, fillable, size, position) : FillableString.POSITION_LEFT
    ✓ Testando método removeSpecialCharacter()
    ✓ Testando método removeWhiteSpaces()
    ✓ Testando método getByPosition(start, end)
    ✓ Testando método completeWith(string, size, position) : FillableString.POSITION_RIGHT (1 ms)
    ✓ Testando método completeWith(string, size, position) : FillableString.POSITION_LEFT
    ✓ Testando método insertBefore(stringToFind, stringToAdd) : String vazia (1 ms)
    ✓ Testando método insertBefore(stringToFind, stringToAdd) : Com string preenchida
    ✓ Testando método insertAfter(stringToFind, stringToAdd) : String vazia
    ✓ Testando método insertAfter(stringToFind, stringToAdd) : Com string preenchida

-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |      100 |     100 |     100 |                   
 FillableString.js |     100 |      100 |     100 |     100 |                   
-------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       16 passed, 16 total
Snapshots:   0 total
Time:        0.191 s, estimated 1 s
Ran all test suites.
Done in 0.61s.
```
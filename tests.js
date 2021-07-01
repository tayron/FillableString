const FillableString = require('./FillableString.js')

// Teste de uso geral

stringText = new FillableString();
stringText.fill('REMESSA')
stringText.fill(' ')
stringText.fill("123456", 5, FillableString.POSITION_RIGHT)
stringText.fill(' ')
stringText.fill('jOÃO PEDRO DA SILVA')
stringText.fill("9", 2, FillableString.POSITION_LEFT)
stringText.fill("21", 2, FillableString.POSITION_RIGHT)
stringText.fill("\n")
stringText.fill('jOÃO PEDRO DA SILVA')
stringText.fill(' ', 27, FillableString.POSITION_RIGHT)
stringText.fill('joao@gmail.com')
stringText.fill('21', 2, FillableString.POSITION_RIGHT)

console.info(stringText.getString())
console.log(stringText.getByPosition(11, 16))

stringText2 = new FillableString();
stringText2.fill('JOÃO PEDRO DA SILVA')
console.info(stringText2.getByPosition(6, 10))


stringText3 = new FillableString();
stringText3.fillAndCompleteWith('Pedro', 0, 15, FillableString.POSITION_LEFT)
console.info(stringText3.getString())
console.info(stringText3.getString().length)
stringText3.fillAndCompleteWith('Maria', '#', 6, FillableString.POSITION_RIGHT)
console.info(stringText3.getString())
console.info(stringText3.getString().length)

stringText4 = new FillableString();
stringText4.fill("**", 5)
console.info(stringText4.getString())


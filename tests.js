const FillableString = require('./FillableString.js')
/*
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
*/
stringText = new FillableString();
stringText.fill('JOÃO PEDRO DA SILVA')
console.info(stringText.getByPosition(6, 10))
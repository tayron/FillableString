const FillableString = require('./FillableString.js')

describe('FillableString', () => {
    it('Testando método constructor(string)', () => {
        const stringText = new FillableString('REMESSA');

        const expectResult = 'REMESSA'
        expect(stringText.getString()).toEqual(expectResult);
    });

    it('Testando método fill(string)', () => {
        const stringText = new FillableString();
        stringText.fill('REMESSA')

        const expectResult = 'REMESSA'
        expect(stringText.getString()).toEqual(expectResult);
    });

    it('Testando método fill(string, size)', () => {
        const stringText = new FillableString();
        stringText.fill('R', 3)

        const expectResult = 'RRR'
        expect(stringText.getString()).toEqual(expectResult);
    });    

    it('Testando método fill(string, size, position) : FillableString.POSITION_RIGHT', () => {
        const stringText = new FillableString();
        stringText.fill('REMESSA')
        stringText.fill("1", 5, FillableString.POSITION_RIGHT)

        const expectResult = 'REMESSA11111'
        expect(stringText.getString()).toEqual(expectResult);
    });  
    
    it('Testando método fill(string, size, position) : FillableString.POSITION_LEFT', () => {
        const stringText = new FillableString();
        stringText.fill('REMESSA')
        stringText.fill("1", 5, FillableString.POSITION_LEFT)

        const expectResult = '11111REMESSA'
        expect(stringText.getString()).toEqual(expectResult);
    });     

    it('Testando método fillAndCompleteWith(string, fillable, size, position) : FillableString.POSITION_RIGHT', () => {
        const stringText = new FillableString();
        stringText.fill('START')
        stringText.fillAndCompleteWith('#', '*', 3, FillableString.POSITION_RIGHT)
        stringText.fill('END')

        const expectResult = 'START#**END'
        expect(stringText.getString()).toEqual(expectResult);
    });  
    
    it('Testando método fillAndCompleteWith(string, fillable, size, position) : FillableString.POSITION_LEFT', () => {
        const stringText = new FillableString();
        stringText.fill('START')
        stringText.fillAndCompleteWith('#', '*', 3, FillableString.POSITION_LEFT)
        stringText.fill('END')

        const expectResult = 'START**#END'
        expect(stringText.getString()).toEqual(expectResult);
    });    

    it('Testando método removeSpecialCharacter()', () => {
        const stringText = new FillableString();
        stringText.fill('654.498.480-99')
        stringText.removeSpecialCharacter()

        const expectResult = '65449848099'
        expect(stringText.getString()).toEqual(expectResult);
    });  
    
    it('Testando método removeWhiteSpaces()', () => {
        const stringText = new FillableString();
        stringText.fill('JOÃO PEDRO DA SILVA')
        stringText.removeWhiteSpaces()

        const expectResult = 'JOÃOPEDRODASILVA'
        expect(stringText.getString()).toEqual(expectResult);
    });    

    it('Testando método getByPosition(start, end)', () => {
        const stringText = new FillableString();
        stringText.fill('REMESSA')

        const expectResult = 'EME'
        expect(stringText.getByPosition(2, 4)).toEqual(expectResult);
    });

    it('Testando método completeWith(string, size, position) : FillableString.POSITION_RIGHT', () => {
        const stringText = new FillableString();
        stringText.fill('123')
        stringText.completeWith(0, 6, FillableString.POSITION_RIGHT)

        const expectResult = '123000'
        expect(stringText.getString()).toEqual(expectResult);
    });

    it('Testando método completeWith(string, size, position) : FillableString.POSITION_LEFT', () => {
        const stringText = new FillableString();
        stringText.fill('123')
        stringText.completeWith(0, 6, FillableString.POSITION_LEFT)

        const expectResult = '000123'
        expect(stringText.getString()).toEqual(expectResult);
    });    

    it('Testando método insertBefore(stringToFind, stringToAdd) : String vazia', () => {
        const stringText = new FillableString();
        stringText.insertBefore('JOÃO', 'NOME: ')

        const expectResult = ''
        expect(stringText.getString()).toEqual(expectResult);
    }); 

    it('Testando método insertBefore(stringToFind, stringToAdd) : Com string preenchida', () => {
        const stringText = new FillableString();
        stringText.fill('JOÃO PEDRO')
        stringText.insertBefore('JOÃO', 'NOME: ')

        const expectResult = 'NOME: JOÃO PEDRO'
        expect(stringText.getString()).toEqual(expectResult);
    }); 
    
    it('Testando método insertAfter(stringToFind, stringToAdd) : String vazia', () => {
        const stringText = new FillableString();
        stringText.insertAfter('JOÃO', ' E')

        const expectResult = ''
        expect(stringText.getString()).toEqual(expectResult);
    });    
    
    it('Testando método insertAfter(stringToFind, stringToAdd) : Com string preenchida', () => {
        const stringText = new FillableString();
        stringText.fill('JOÃO PEDRO')
        stringText.insertAfter('JOÃO', ' E')

        const expectResult = 'JOÃO E PEDRO'
        expect(stringText.getString()).toEqual(expectResult);
    });    
});
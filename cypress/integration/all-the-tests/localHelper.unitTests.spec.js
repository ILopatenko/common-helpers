import localHelper from '../../support/page-objects/local-helper/localHelper';

describe('Unit Tests for LocalHelper - Main Test Suite', () => {
  describe('Main Methods', () => {
    describe('Get Random (between). Method can be runned without any parameters - in this case it should return a random inreger [0,9]. Or you can pass 2 arguments - MIN and MAx values - in this case method should return an integer [min, max]', () => {
      it('Checking method with no arguments (default parameters: min = 0 and max = 9)', () => {
        for (let i = 0; i < 50; i++) {
          let element = localHelper.getRandom();
          expect(element).to.be.a('number');
          expect(element).to.be.at.least(0);
          expect(element).to.be.at.most(9);
        }
      });
      it('Checking method with arguments [0, 20 + [0,9] ]', () => {
        const min = 0;
        const max = 20 + localHelper.getRandom();
        for (let i = 0; i < 50; i++) {
          let element = localHelper.getRandom(min, max);
          expect(element).to.be.a('number');
          expect(element).to.be.at.least(min);
          expect(element).to.be.at.most(max);
        }
      });
      it('Checking method with arguments [-n; +n]', () => {
        const min = 0 - localHelper.getRandom(0, 200);
        const max = localHelper.getRandom(0, 200);
        for (let i = 0; i < 50; i++) {
          let element = localHelper.getRandom(min, max);
          expect(element).to.be.a('number');
          expect(element).to.be.at.least(min);
          expect(element).to.be.at.most(max);
        }
      });
    });
    describe('Get Random Item From List. Method tares in 1 parameter - list of items (string or arran) and returns a random single item from the list', () => {
      it('Checking method with a string', () => {
        const list = localHelper.data.sets.symbols.alphabets.enLower;
        for (let i = 0; i < 50; i++) {
          let element = localHelper.getRandomFromList(list);
          expect(element).to.be.a('string');
          expect(list.includes(element)).to.be.true;
        }
      });
      it('Checking method with an array', () => {
        const list = localHelper.data.sets.people.firstName;
        for (let i = 0; i < 50; i++) {
          let element = localHelper.getRandomFromList(list);
          expect(element).to.be.a('string');
          expect(list.includes(element)).to.be.true;
        }
      });
    });
  });
});

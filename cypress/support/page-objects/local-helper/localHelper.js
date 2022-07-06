class LocalHelper {
  data = {
    sets: {
      people: {
        firstName: [
          'James',
          'Robert',
          'John',
          'Michael',
          'David',
          'William',
          'Richard',
          'Joseph',
          'Thomas',
          'Charles',
          'Christopher',
          'Daniel',
          'Matthew',
          'Anthony',
          'Mark',
          'Donald',
          'Steven',
          'Paul',
          'Andrew',
          'Joshua',
          'Mary',
          'Patricia',
          'Jennifer',
          'Linda',
          'Elizabeth',
          'Barbara',
          'Susan',
          'Jessica',
          'Sarah',
          'Karen',
          'Lisa',
          'Nancy',
          'Betty',
          'Margaret',
          'Sandra',
          'Ashley',
          'Kimberly',
          'Emily',
          'Donna',
          'Michelle',
        ],
        lastName: [
          'Johnson',
          'Williams',
          'Brown',
          'Jones',
          'Garcia',
          'Miller',
          'Davis',
          'Rodriguez',
          'Martinez',
          'Hernandez',
          'Lopez',
          'Gonzales',
          'Wilson',
          'Anderson',
          'Thomas',
          'Taylor',
          'Moore',
          'Jackson',
          'Martin',
          'Lee',
          'Perez',
          'Thompson',
          'White',
          'Harris',
          'Sanchez',
          'Clark',
          'Ramirez',
          'Lewis',
          'Robinson',
          'Walker',
          'Young',
          'Allen',
          'King',
          'Wright',
          'Scott',
          'Torres',
          'Nguyen',
          'Hill',
          'Flores',
        ],
      },
      symbols: {
        alphabets: {
          enLower: 'abcdefghijklmnopqrstuvwxyz',
          enUpper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          symbols: '`!@#$%^&*()_-+={[}}:;"<,>.?/|\\',
        },
      },
    },
  };
  ///////////////////////////////
  //METHODS
  ///////////////////
  //MAIN
  /*  Get Random (between). Method can be runned without any parameters - in this case it should return a random inreger [0,9]. 
      Or you can pass 2 arguments - MIN and MAx values - in this case method should return an integer [min, max] */
  getRandom = (min = 0, max = 9) =>
    Math.floor(Math.random() * (max + 1 - min) + min);
  //
  /*   Get Random Item From List. Method takes in 1 parameter - list of items (string or arran) and returns a random single item from the list */
  getRandomFromList = (list) => list[this.getRandom(0, list.length - 1)];
  //
  /*   Get Random US Phone number (AAABBBCCDD) */
  getRandomUsPhoneNumber = () => this.getRandom(1000000000 - 9999999999);
}

export default new LocalHelper();

const Pet = require('../src/pet');

describe('constructor', () => {

    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

  describe('constructor', () => {

    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });
  });
  
  

  describe('constructor', () => {
  
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
  });

  
  describe('growUp', () => {

    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
  });

  
  describe('growUp', () => {
    it('increments the hunger of 5', () => {
      const rex = new Pet('Rex');
  
      rex.growUp();
  
      expect(rex.hunger).toEqual(5);
    });
  });

  describe('growUp', () => {
    it('decrease the fitness by 3', () => {
      const rex = new Pet('Rex');
  
      rex.growUp();
  
      expect(rex.fitness).toEqual(7);
    });
  });
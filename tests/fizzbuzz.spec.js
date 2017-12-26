/*
Desafio Fizz Buzz

Escreva uma lib que receba um número e:

Se o número for divisível por 3, no lugar do número escreva 'Fizz'
Se o número for divisível por 5, no lugar do número escreva 'Buzz'
Se o número for divisível por 3 e 5, no lugar do número escreva 'Fizz Buzz'
Se não for múltiplo de nada, retorne o número

*/

import { expect } from 'chai';
import fizzBuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {

  // Smoke Test
  describe('Smoke Tests', () => {
    it('should exist and be a function', () => {
      expect(fizzBuzz).to.exist;
      expect(fizzBuzz).to.be.a('function');
    });
  });

  describe('Functionality', () => {
    it('should return \'Fizz\' when receive a number divisible of 3', () => {
      expect(fizzBuzz(6)).to.equal('Fizz');
    });

    it('should return \'Buzz\' when receive a number divisible of 5', () => {
      expect(fizzBuzz(20)).to.equal('Buzz');
    });

    it('should return \'Fizz Buzz\' when receive a number divisible of 3 and 5', () => {
      expect(fizzBuzz(15)).to.equal('Fizz Buzz');
    });

    it('should return the same number when receive a number not divisible of 3 and 5', () => {
      expect(fizzBuzz(8)).to.be.equal(8);
    });

    it('should return 0 when receive 0', () => {
      expect(fizzBuzz(0)).to.be.equal(0);
    });
  });

});

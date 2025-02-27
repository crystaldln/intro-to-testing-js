// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });


    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });


    it('should return "Hello, Jane"', function() {
      expect(sayHello("Jane")).toBe("Hello, Jane");
    });


    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
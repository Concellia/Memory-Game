describe("memory game", function(){
it("should be able to shuffle the cards on load", function(){
    let result = shufler(["A","B","C","D"])
    expect(result).not.toBe(["A","B","C","D"])
})
})
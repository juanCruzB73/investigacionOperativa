function sum(a, b) {
    return a + b;
  }
module.exports = sum;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})
test('two plus two is four',()=>{
    expect(2+2).toBe(4)
});
test('object assigment',()=>{
    const data={one:1};
    data['two']=2;
    expect(data).toEqual({one:1,two:2})
});
test('adding positive number is not zero',()=>{
    for(let i=0;i<10;i++){
        for(let j=1;j<10;j++){
            expect(i+j).not.toBe(0)
        }
    }
})
test('null',()=>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
})
test('zero',()=>{
    const zero=0;
    expect(zero).not.toBeNull();
    expect(zero).toBeDefined();
    expect(zero).not.toBeUndefined();
    expect(zero).not.toBeTruthy();
    expect(zero).toBeFalsy();  
})
def test(string):
    new = ''
    count = 1
    for i in string:
        i = string[-count]
        count = count +1
        new = new +(i)
    return new

print(test('hello'))
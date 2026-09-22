function add(x: number, y: number): number{
    return x+y;
}

let result :number = add(10, 20);
console.log(result);

function concatenateName(first: string, last: string): string{
    const fullName: string = `${first} ${last}`;
    return fullName;
}

let fullName = concatenateName("Bob", "Charlie");
console.log(fullName);

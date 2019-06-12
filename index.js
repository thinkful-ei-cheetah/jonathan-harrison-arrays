/* const mem = require('./memory');
const memory = new mem();


class Array {
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        this._resize(this.length + 1);
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

}

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push('Chen');

    console.log(arr.get(0));
}
 */





/* 5. URLify a string
A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

Input: tauhida parveen

Output: tauhida%20parveen

Input: www.thinkful.com /tauh ida parv een

Output: www.thinkful.com%20/tauh%20ida%20parv%20een */


/* 
let result='';
const str = "www.thinkful.com /tauh ida parv een";
result = str.split(" ").join("%20");


// max sum array

let input = [4, 6, -3, 5, -2, 1];
let output = 0;
let i;
let j;
let tempmax = 0;
for (i=0; i<input.length; i++)
{
    let tempsum = 0;
    for (j=i; j<input.length; j++)
    {
        tempsum = tempsum + input[j]    
        if (tempsum > tempmax)
            tempmax = tempsum;
    }
}

console.log(tempmax) */

/* let result2='';
let vowels=['a', 'e', 'i', 'o', 'u'];
const str2 = "Battle of the Vowels: Hawaii vs. Grozny";
let i;
let result;
for (i=0; i<str2.length; i++)
{
    if (!vowels.includes(str2[i]))
        result2 = result2 + str2[i]
}

console.log(result2); */


//products

/* input = [1, 3, 9, 4];
let i;
let j;
let result = [];
let product = 1;

for (i=0; i<input.length; i++)
{  
    product = 1;
    for (j=0; j<input.length; j++)
    {
        if (i!==j)
            product = product * input[j];
    }
    result[i]=product;
  
}

console.log(result) */

/* input = [[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

let output = input;
let zeroindex = [];
for (let i=0; i<input.length; i++)
{
    for (let j=0; j<input.length; j++)
    {  
        if (input[i][j]===0)
        {
            output[i].fill(0); 
            if (!zeroindex.includes(j))
            zeroindex.push(j);
            
        }
    }
}

console.log(zeroindex) */
/* 
const arr = 
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
function array2D(arr){
    let zeroIndex=[]
    let clear =arr.forEach(array => {
        for (i=0; i<array.length; i++){
            if (array[i]==0 && !zeroIndex.includes(i)){
                zeroIndex.push(i)
            }
        }
    })
    let output=arr.map(array => {
        if (array.includes(0)){
            return Array(array.length).fill(0)
        }
        return array
    })
    zeroIndex.forEach(id =>{
        output.forEach(a =>{
            a[id]=0
        })
    })
    return output
}

console.log(array2D(arr)); */

// 12 string rotation

// str1 str2
const str1 = "hello";
const str2 = "elloh";
let choices=[];

function rotate(str1, str2) {
    choices.push(str1);
    let arr = str1.split('');
    for (let i=0; i<str1.length; i++)
    {
        let shift = arr.shift();
        arr.push(shift)
        choices.push(arr.join(''));
    }
    return (choices.includes(str2))
}

console.log(rotate(str1, str2))

"use strict"
// ____________1 Task
{
    const arr1 = ['a', 'b', 'c'];
    const arr2 = [1 , 2 , 3];
    const arrAmount = arr1.concat(arr2);
    console.log (arrAmount);
}
// --------------------------------
{
    const arr1 = ['a', 'b', 'c'];
    const arr2 = [1 , 2 , 3];
    const arrAmount= [...arr1 , ...arr2 ];
    console.log(arrAmount);
}
//____________ 2 Task
{
    const arr = ['a', 'b', 'c', ];
       arr.push(1 , 2 , 3);
    console.log(arr);
}
// -----------------------------
{
    const arr = ['a', 'b', 'c' ];
    arr.splice(3, 0 , 1 ,2 , 3 ); 
    console.log (arr);
}
// _____________3 Task 
{ 
    const arr = [1 , 2 , 3 , 4 , 5 ];
    arr.splice(1 , 2 ); 
    console.log (arr);
}
//______________4 Task 
{
    const arr = [1 , 2 , 3 , 4 , 5 ];
    arr.splice(3 , 0 , 'a', 'b', 'c' ); 
    console.log (arr);
}
// ______________5 Task
{

     let arr = [1 , 2 , 3 , 4 , 5 ];
     let arr1=[]

     for (let i = 0; i < arr.length ; i++) {
        arr1.push(arr[i] * 10)
    }

    console.log(arr1)
}
// ______________6 Task
{
    for ( let i=4 ; i<=400 ;i++)
    console.log(i)
}
// ______________7 Task
{
    for ( let i=4 ; i<=13 ;i+=3){
        console.log(i)
    }
       
}
// _____________8 Task
{
    for ( let i=654 ; i >= 0 ;i--){
        console.log(i)
    }
}
// _____________9 Task
{
    for ( let i=1983 ; i <= 2017 ;i++){
        console.log(i)
    }  
}
// _____________10 Task
{
    for( let i = -4; i <= 100; i++){
        console.log(i)
    }
}
// _____________11 Task
{
    let result = 0

    for(let i = 0; i <= 100; i++){
        result += i
    }

    console.log(result)
}
// _____________12 Task
{
    const length = +prompt("Введите длинну массива")

    const result = []

    for(let i = 0; i < length; i++){
        const temp = []

        for(let j = 0; j <= i; j++){
            temp.push('x')
        }

        result.push(temp.join(''))
    }

    console.log(result)
}
//___________13 Task
{
    const length = +prompt("Введите длинну массива")

    const result = []

    for(let i = 0; i <= length; i++){
        const temp = []

        for(let j = 0; j <= i; j++){
            temp.push(i + 1)
        }

        result.push(temp.join(''))
    }

    console.log(result)
}
//___________14 Task
{
    const result = []

    for(let i = 0; i<10; i++){
        const temp = []

        for (let j = 0; j < 10; j++) {
            if(i === 0 || i === 9 || j === 0 || j ===9){
                temp.push('x')

                continue
            }

            temp.push('0')
        }

        result.push(temp)
    }

    console.log(result)
}
//___________15 Task
{
    const result = []

    for(let i = 1; i <= 10; i++){
        const temp = []

        for(let j = 1; j<= 10; j++){
            temp.push(i * j)
        }

        result.push(temp)
    }

    console.log(result)
}
//___________16 Task
{
    let word = "товар"

    const count = 30

    if((count % 100 >= 10 && count % 100 <= 20) 
        || (count % 10 >= 5 && count % 10 <= 9) 
        || (count % 10 === 0)){
        word += 'ов'
    } else if(2<= count % 10 && count % 10 <= 4){
        word += 'а'
    }

    console.log( word)
}





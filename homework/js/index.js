// ___________Task 1 
{
   function arrayFill (value, length){
      const result = []

      for(let i = 0; i < length; i++){
         result.push(value) 
      }
      
      return result
   }

   const array = arrayFill('x', 5)
}
// ___________Task 2
{
   function isNumberInRange(num){
      if(num > 0 && num < 10){
         return true
      }else {
         return false
      }
   }
}
// ___________Task 3
{
   function isEven(number) {
      if(number % 2 === 0){
         return true
      } else{
         return false
      }
   }

   function evenArray(array){
      const result = []
      const length = array.length

      for(let i = 0; i < length; i++){
         const element = array[i]

         const isEvenElement = isEven(element)

         if(isEvenElement === true){
            result.push(element)
         } else {
            continue
         }
      }

      return result
   }

   const array1 = [1,2,3]
   const arr = evenArray(array1)
}
// ___________Task 4
{
   function degree (a,b){
      const result = a**b

      console.log(result)
   }
}
// ___________Task 5
{
   function checkAge(age){
      if( age > 16){
         console.log("Добро пожаловать")
      } else{
         console.log("Вы еще молоды")
      }
   }
}
// ___________Task 6,7
{
   function checkAge(age){
      if(age === undefined){
         console.log("Введите возраст")
      }  

      if( age > 16){
         console.log("Добро пожаловать")
      } else{
         console.log("Вы еще молоды")
      }
   }
} 
// ___________Task 8
{
   function ucfirst(word){
      const firstLetter = word[0]
      const firstLetterUpperCase = firstLetter.toUpperCase()
      const result = firstLetterUpperCase + word.slice(1)
      return result
   }

   function ucstring(string){
      const array = string.split(' ')
      const length = array.length

      const result = []

      for(let i =0; i < length; i++){
         const word = array[i]

         const ucword = ucfirst(word)

         result.push(ucword)
      }

      const resultString = result.join(" ")

      return resultString
   }
// ___________Task 9
   function toCamelCase (string){
      const array = string.split("_")
      const length = array.length
      const result = []

      for(let i = 0; i < length; i++){
         const word = array[i]

         if(i === 0){
            result.push(word)
         } else{
            const ucword = ucfirst(word)

            result.push(ucword)
         }
      }

      const resultString = result.join('')

      return resultString
   }
}
// ___________Task 10
{
   function inArray(text, array){
      const isTextInArray = array.includes(text)

      return isTextInArray
   }
}
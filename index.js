function receivesAFunction(cb){
    return cb()
}
receivesAFunction(function (){return `hello world`})
function returnsANamedFunction(){
   function morning (greet='morning'){
    return `${greet} world`
   }
   return morning
}
returnsANamedFunction()
function returnsAnAnonymousFunction(){
    return function (){
        `hello kris`;
    }
}
returnsAnAnonymousFunction() 


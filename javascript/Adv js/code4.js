// function can be return as a value
function test(){
    console.log("Welcome.....")
    function hi(){
        console.log("hi!!!!!")
    }
    return hi;
}


p=test()
p()
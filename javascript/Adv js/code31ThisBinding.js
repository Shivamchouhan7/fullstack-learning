function show(){
        console.log("Roll No Is : ",this.roll)
        console.log("name Is : ",this.nm)
        console.log("Course  Is : ",this.course)
}

ob1={roll:111,nm:"Abhi",course:"BTech"}
ob2={roll:112,nm:"Varsha",course:"MTech"}

// to call the show() for our object(ob1) , we have to bind this with ob1
// so we need to do "this binding"
// 3 ways of this bindding are : call(),apply() and bind()
// show.call(ob1)
// show.apply(ob2)


fun=show.bind(ob1)
fun()
fun()
fun()
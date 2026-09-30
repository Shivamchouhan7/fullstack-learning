/*
function <functionName>(<parameters>) {
    var <var name> = new Promise(function(resolve, reject) {
        do something asynchronous which eventually calls either:
        if(success) {
            resolve(value);
        }
        else{
            reject(error);
        } 
    });
    return <var name>;
}


// using then catch
fun-name().then(
resolve handler 
).catch(
error handler
)


// async await 
async function <functionName>(<parameters>) {
    try {
        await <var name> = <functionName>(<parameters>);
        do something with <var name>
    } catch (error) {
        handle error
    }
}
*/ 


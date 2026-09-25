function si(p,r,t){
    return p+(p*r*t)/100
}

function ci(p,r,t){
    return p*(1+r/100)**t;
}

function calc(p,r,t,callback){
    return callback(p,r,t);
}

ans=calc(500000,4,3,si)
console.log(ans)
ans=calc(500000,4,3,ci)
console.log(ans)
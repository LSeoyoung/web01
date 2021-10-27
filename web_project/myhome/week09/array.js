const a = [40,50,80,100];
const b = new Array(70,10,40,70,50);
console.log(a);
console.log(b);
console.log(a[2]);

hap=0;
for(let i = 0; i < a.length; i++){
    console.log(a[i]);
    hap += a[i];
}
console.log("합=" + hap);
sum=0;
for(let val of b){
    console.log(val);
    sum += val;
}
console.log("b의 합=>" + sum);


a.push(90);
a.push(99);
console.log(a);
a.unshift(22);
console.log(a);
console.log(a.indexOf(80));
console.log(a.indexOf(1000));
console.log(a.includes(80));
console.log(a.includes(1000));

function maxLength1(a,k){
    let length = [];
    for(let i=0;i<a.length;i++){
        let sum=0;
        let j=0;
        while(sum<=k){
            sum= sum+ a[i+j];
            j++;
            //console.log(sum,j)
        }
        length.push(j-1);
    }
    //return Math.max(...length);
    let max = length[0];
    for (let i = 0; i < length.length; i++) {
        if (length[i] > max) {
            max = length[i];
        }
    }
    //console.log(length)
    return max;
}
let test = [2,1,994,4,100,12]
var randoms = Array.from({length: 10000000}, () => Math.floor(Math.random() * 10));
let r = maxLength(randoms,1000)
console.log(r);
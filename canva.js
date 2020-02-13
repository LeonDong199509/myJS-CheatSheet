function maxLength(a,k){
    let arr = [];
    let length = [];
    function startNode(i){
        if(a[i]<=k){
            length[i] = 1;
            return arr[i] = [1,k-a[i]];
        }
        length[i] = 0;
        return arr[i] = [0,k-a[i]];
    }
    function recursive(i){
        if(i==a.length-1){
            return startNode(i);
        } 
        if(arr[i+1][0]){
            if(a[i]<=arr[i+1][1]){
                length[i] = length[i+1] + 1;
                return arr[i] = [1,arr[i+1][1]-a[i]];
            }
            let left = arr[i+1][1];
            for(let j=0;j<length[i+1];j++){
                left = left + a[i+length[i+1]-j];
                if(a[i]<=left){
                    length[i] = length[i+1]- j;
                    return arr[i] = [1,left-a[i]];
                }
            }
        }
        return startNode(i);          
    }

    for(let i =0;i<a.length;i++){
        recursive(a.length-i-1);
    }

    //return Math.max(...length)
    let max = length[0];
    for (let i = 0; i < length.length; i++) {
        if (length[i] > max) {
            max = length[i];
        }
    }
    return max;
}
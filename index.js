function mapToNegativize(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        debugger
        newArray.push(-array[i])
    }
    return newArray
}

function mapToNoChange(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray
}

function mapToDouble(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    return newArray
}

function mapToSquare(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i] * array[i]);
    }
    return newArray
}

function reduceToTotal(array, start=0) {
    let total = start;
    for(const element of array) {
        total += element
    }
    return total
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array) {
    for(const element of array) { 
        if(!!element) return true;
    }
    return false
}

var calcAreaBox = function ( width, height ){
    var area = width * height
    return area
}


var bWidth = 5
var bHeight = 10
var bArea = calcAreaBox(bWidth, bHeight)

var georgeAge = 18
var minAgeDriving = 16

if(georgeAge >= minAgeDriving){
    console.log("Geoge can drive")
}else{
    console.log("George can't drive")
}
for(ii = 0; ii < 101; ii++){
    if(ii % 2 === 1){
        console.log(ii)
    }
}

var nums = [0,11,2,3,5,7,1,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
var calcPrimenumber = function(number){
        if (number % 2 === 0 ){
                console.log("NO!")
        }else if(number % 3 === 0){
            console.log("No!")
        }else if(number % 5 === 0){
            console.log('No!')
        }else{
            console.log("YES.")
        }
    }

for(ii = 0;ii < nums.length; ii++){
    calcPrimenumber(nums[ii])
}




var numberDetector = function(number){
    var temp = 0
    for(ii = 1; ii < number; ii++){
        if(number % ii === 0){
            temp = temp + ii;
        }
    }
    if(temp === number){
        return true;
    }else{
        return false;
    }
}

console.log(numberDetector(6))
console.log(numberDetector(8))
console.log(numberDetector(28))
console.log(numberDetector(496))




var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


var function1 = function(array){
    for(xx = 0; xx<(array.length);xx++){
        if(array[xx] %2 === 0){
            array[xx] = true;
        }else{
            array[xx] = false;
        }
    }
    return array
}



console.log(function1(list))




//[:D]



console.log('im superman fat')


var programmers = [{
    name: 'Jimmy',
    age:'infinity',
    id:11111111111
},{
    name:'Gio',
    age:26,
    id:123456789
},{
    name:'Francisco',
    age:28,
    id:987654321
},{
    name:'George',
    age:18,
    id:43824049187597152
}]

var programmernanme = programmers[0].name



for(ii = 0; ii < programmers.length; ii++){
    var prog = programmers[ii]
    var name = prog.name
    console.log(name)
}
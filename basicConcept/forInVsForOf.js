//for in loop

const posts = {
    'id':1,
    'title':'Post Title',
    'body':'Post Body'
}

for (let post in posts){
    console.log(post,posts[post],"-----------forin")
}

const numbers = [1,3,5,7,9]

for (let number in numbers){
    console.log(number,"-----------forin2")
}

//for of loop

const numbers2 = [1,3,5,7,9]

for (let number of numbers2){
    console.log(number,"-----------forof")
}


// for-in is for object
// for-of is for array
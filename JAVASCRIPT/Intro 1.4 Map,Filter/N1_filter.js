const user_data =[
    {"firstName":"John", "lastName":"Doe",age:55},
  {"firstName":"Anna", "lastName":"Smith",age:20},
  {"firstName":"Peter", "lastName":"Jones",age:45},
]

const output = user_data.map((data)=> 
    data.firstName + " " + data.lastName
)
console.log(output)

const filter = user_data.filter((data)=>{
     if(data.age>50){ 
        console.log("identity found")
       return  data.firstName + data.lastName
     }     
   
})
console.log(filter)

const filter1 = user_data.filter((x)=>x.age>30).map((x)=> x.firstName +" "+ x.lastName)
console.log(filter1)



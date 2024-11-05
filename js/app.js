

// const fs = require('fs');

// fs.writeFileSync('data1.txt','- Dev Yaaqout Tareq')


// fs.appendFileSync('data1.txt',' & MERN Stack Developer')

// console.log(fs.readFileSync('data1.txt').toString()) 

// ----------------------------------------------------- 

// const x = require('./allData');

// console.log(x.lName)


// --------------------------------------- 

// const validator = require('validator');

// console.log(validator.isEmail('mo@gmail.com'))

// -------------------------- #Lec-2 . ---------------- 

// const command = process.argv[2]

// if(command === 'add'){
//   console.log('you have added an item')
// }else if(command === 'delete'){
//   console.log('you have deleted an item')
// }else{
//   console.log('Error')
// }
// ------------------------------------------------ #Lec-3 . ------


const data = require('./data');
const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'to add an item',
  builder: {
    fname:{
      describe: 'first name from builder',
      demandOption : true,
      type: "string" 
    },
    lname:{
      describe: 'last name from builder',
      demandOption : true,
      type: "string" 
    }
  },
  handler: (x)=>{
    data.addPerson(x.id ,x.fname ,x.lname)
    console.log(`- you have already added an item *id =${x.id}`)
  }
})

yargs.command({
  command: 'delete',
  describe: 'to delete an item',
  handler: (x)=>{
    data.deleteData(x.id)
  }
})


yargs.command({
  command: 'read',
  describe: 'to read data',
  builder: {
    id:{
      describe: 'id desc in read command',
      demandOption : true,
      type: "string"
    }
  },
  handler: (x)=>{
    data.readData(x.id)
  }
})




yargs.command ({

  command: "list",
  describe: "to list data",
  handler: () =>{
    data.listData()       
  }
})

yargs.parse()

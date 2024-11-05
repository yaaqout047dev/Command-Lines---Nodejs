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
    console.log(`- ✅ you have already added an item *id =${x.id}`)
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


// ----------------- #Command Lines . ----------------- 

/* 
1- add -> node js/app.js --id='9' --fname='Yaaqout' --lname='Tareq' 
2- delete -> node js/app.js delete --id='9'
3- read -> node js/app.js read --id='9'
4- list -> node js/app.js list
*/ 
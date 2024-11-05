
const fs = require('fs')

const addPerson = (id,fname,lname) =>{
  const allData = loadData()  
  
  const duplicatedData = allData.filter((obj)=>{
    return obj.id ===id 
  })
  
  if(duplicatedData.length == 0){
    allData.push({
      id: id,
      fname: fname,
      lname : lname ,
    })
  
    saveAllData(allData)
  }else {
    console.log("⚠️ Error Duplicated Id")
  }
  

}



const loadData =() =>{
try{
  const dataJson = fs.readFileSync('data.json').toString()
  return  JSON.parse(dataJson)
}
catch{
  return []
}
}


const saveAllData =(allData) =>{
  const allDataJson = JSON.stringify(allData)
  fs.writeFileSync('data.json',allDataJson)
}

// ------------------ #Delete Item . --------------- 

const deleteData = (id)=>{
  const allData = loadData()
  const filteredData = allData.filter((obj)=>{
    return obj.id != id
  })
  saveAllData(filteredData)
  // console.log(filteredData)
  console.log(`✅ You have already deleted an item *id = ${id}`)
  console.log('📝 items count = '+ filteredData.length)
}


// ---------------- #Read Data . ------------- 

const readData =(id)=>{
  const allData = loadData() 

  const itemNeeded = allData.find((obj) => {     
    return obj.id == id
  })
  
  if(itemNeeded){         
    console.table(itemNeeded)
  }else{   
    console.log("⚠️ Error: id not found")
  }
}


// ---------------- #List All Data . ------------ 

const listData = () =>{

  const allData = loadData()    

  allData.forEach ((obj) =>{           
    console.table(obj)
  })
}

module.exports ={
  addPerson,
  deleteData,
  readData,
  listData
}
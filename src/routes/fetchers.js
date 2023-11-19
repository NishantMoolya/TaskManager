const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/user");
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(`An error occurred in fetching data:${err}`);
    }
   }

const postTask = async (input) => {
    try {
      const response = await fetch('http://localhost:8000/user',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({task:"go to mall",status:"todo",date:"23-22-11",checked:false,_id:7890})
      })
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(`An error occured in posting task:${err}`);
    }
  }

const editTask = async () => {
    try {
        const response  = await fetch('http://localhost:8000/user/task',{
             method:"PATCH",
             headers:{"Content-Type":"application/json"},
             body:JSON.stringify(_id)})
    } catch (err) {
        console.log(`An error occured in editing task:${err}`);
    }
}

const postTask = async (input) => {
  try {
    const response = await fetch('http://localhost:8000/user/task', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input)
    })
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(`An error occured in posting task:${err}`);
  }
}

const delTask = async (_id) => {
  try {
    console.log(_id);
    const response = await fetch('http://localhost:8000/user/task', {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({_id:_id})
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(`An error in deleting task:${err}`);
  }


}

const fetchEdit = async (taskList) => {
  try {
    const response = await fetch('http://localhost:8000/user/task', {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskList)
    })
  } catch (err) {
    console.log(`An error occured in editing task:${err}`);
  }
}

export { postTask, delTask, fetchEdit }
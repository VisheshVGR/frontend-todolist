import React, { useEffect, useState } from "react"
import List from "./List"
import { Form, Button, ListGroup } from 'react-bootstrap'

function App() {
  const localData = localStorage.getItem('items')
  let [value, setValue] = useState("");
  let [items, setItems] = useState(localData ? JSON.parse(localData) : []);

  let handleChange = (event) => {
    setValue(event.target.value)
  }

  let alrt = () => {
    alert("Item already present!")
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      return
    }
    let insert = true;
    items.forEach((item) => { if (item === value) return insert = false })
    insert ? setItems([...items, value]) : alrt()
    setValue("")
  }

  function handleDel(idx) {
    setItems(items.filter((item, index) => {
      return (idx.target.id !== `${index}`)
    }))
  }

  let op = items.map((item, idx) => {
    return (
      <List key={idx} id={idx} name={item} onClick={handleDel} />
    )
  })

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])


  return (
    <>
      <div className="ToDoBox">
        <div className="ToDo">
          <br />
          <h1>ToDo List</h1>
          <br />
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                autoFocus
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Enter new item..." />
            </Form.Group>
            <br />
            <Button variant="outline-success" type="submit">Add to List</Button>
          </Form>
          <br />
          <div className="listBox">
            <div className="list">
              <ListGroup>
                {op}
              </ListGroup>
            </div>
          </div>
          <br /><br />
        </div>
      </div>
    </>
  );
}

export default App;

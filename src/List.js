import React from "react"
import { ListGroup, Button } from 'react-bootstrap';


function List(props) {
    return (
        <>
            <ListGroup.Item>
                <Button
                    variant="outline-danger"
                    style={{ marginRight: "10px" }}
                    onClick={props.onClick}
                    id={props.id}
                >X</Button>
                {props.name}
            </ListGroup.Item>
        </>
    )
}

export default List
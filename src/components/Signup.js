import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function Signup() {
  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="w-100 text-center mb-5">Sign Up</h2>
                <Form>
                    <Form.Group id="email" className="mt-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required />
                    </Form.Group>
                    <Form.Group id="password" className="mt-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required />
                    </Form.Group>
                    <Form.Group id="password-confirm" className="mt-2">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" required />
                    </Form.Group>
                    <Button className="w-100 mt-4" type="submit">Sign Up</Button>
                    <div className="text-center mt-3">
                        Already have an account? Log In
                    </div>
                </Form>
            </Card.Body>
        </Card>    
    </>
  )
}

export default Signup
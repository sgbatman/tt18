import React from 'react'
import { useState } from 'react'

const AddExpenses = () => {
    const [expenses, setExpenses] = useState('')
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const [created_at, setCreatedAt] = useState('')
    const [created_by, setCreatedBy] = useState('')
    const [updated_at, setUpdatedAt] = useState('')
    const [updated_by, setUpdatedBy] = useState('')

    const onSubmit = () => {
      console.log('Submit press')
    }

    // Add to backend
    // Need to update the link
    const addExpenses = async (expenese) => {
        const res = await fetch('http://localhost:5000/tasks', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(expenses),
        })
        
        // Get data after update
        const data = await res.json()
        
        // Set data after retrieve
        // setExpensesList([...expenses, data])
    }
    // Delete Task
    const deleteExpeneses = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
        });
    };

    return (
            <form onSubmit={onSubmit}>
                <div>
                    <label>Expenses:</label>
                    <input
                        type='text'
                        placeholder='Expenses'
                    />
                </div>

                <div>
                    <label>Description:</label>
                    <input
                        type='text'
                        placeholder='Description'
                    />
                </div>

                <div>
                    <label>Amount:</label>
                    <input
                        type='text'
                        placeholder='Amount'
                    />
                </div>


                <input type='submit' value='Add Expenses'/>


            </form>
    )
}

export default AddExpenses

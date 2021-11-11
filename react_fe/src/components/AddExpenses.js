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

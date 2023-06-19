import React from 'react'


export default function Form (props) {
    const {change, submit, errors} = props
    const {username, email, password, tos} = props.values

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
      }

    const onSubmit = (e) => {
        e.preventDefault()
        submit()
    }

    return (
        <div>
            <h1>User Onboarding</h1>
            <form onSubmit={onSubmit}>
                <label>
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={Onchange}
                    />
                </label>
                <label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={Onchange}
                    />
                </label>
                <label>
                    <input
                        type='password'
                        name='tos'
                        value={password}
                        onChange={Onchange}
                    />
                </label>
            </form>
        </div>
        )
}

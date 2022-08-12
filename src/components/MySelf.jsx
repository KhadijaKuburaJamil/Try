import react from 'react'
function MySelf({ age, name, gender}) {
    return(
        <div>
            <h1>My Self</h1>
            <h1>My name is {name}.
            I am {age} years old. 
            I am {gender} by gender
            </h1>
        </div>
    )
}
export default MySelf;
// Write your Character component here
const Character = (props) => {
    console.log(props)
    const {user} = props
    return (
        <div>
            <h2>{user.name}</h2>
            <h3>{user.birth_year}</h3>
        </div>
    )
}

export default Character;

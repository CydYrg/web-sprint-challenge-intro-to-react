// Write your Character component here
const Character = (props) => {
    return (
        <div>
            <h1>{props.data.name}.</h1>
            <h2>{props.data.birth_year}.</h2>
        </div>
    )
}

export default Character;

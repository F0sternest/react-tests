import { VscBug } from 'react-icons/vsc'

const Posts = () => {
    return (
        <button onClick={() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error))
        }}>
            Traer Datos <VscBug /> 
        </button>
    )
}

export default Posts
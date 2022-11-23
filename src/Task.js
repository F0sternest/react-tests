import './task-styles.css'

const TaskCard = ({ ready }) => {
    return (
        <div className='card'>
            <h1>Mi primer tarea</h1>
            <span className={ready? 'bg-green':'bg-red'}>
                {ready ? 'Tarea Realizada' : 'Tarea pediente'}
            </span>
        </div>
    )
}

export default TaskCard
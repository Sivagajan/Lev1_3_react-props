import Task from './Task'


const ListeItem = (props) =>{
    console.log(props)
    return(
        <div>
            <ul>
                {props.tasks.map((elt, i) =>
                    <Task key={i} icon= {elt.icon}text= {elt.task} img={elt.img} />
                )}
            </ul>
        </div>
    )
}

export default ListeItem
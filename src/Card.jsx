function Card(props){
    
    if (props.titleOrAuthor == 0){
        return(
            <div className = 'cardBox'>
                <p><strong>Title: {props.title}</strong></p>
            </div>
        )
    }
    else{
        return(
            <div className = 'cardBox'>
                <p><strong>Author: {props.author}</strong></p>
            </div>
        )
    }
}

export default Card;
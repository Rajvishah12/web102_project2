function Card(props){

    const fruits = [
        {'Ulysses': 'James Joyce'}, 
        {'The Great Gatsby':'F. Scott Fitzgerald'},
        {'The Catcher And The Rye': 'J.D. Salinger'},
        {'1984': 'George Orwell'},
        {'Moby-Dick': 'Herman Melville'},
        {'The Sound of Fury': 'William Faulkner'},
        {'Don Quixote': 'Miguel de Cervantes'},
        {'Anna Karenina': 'Leo Tolstoy'},
        {'Crime and Punishment':'Fyodor Dostoevsky'},
        {'Pride and Prejudice': 'Jane Austen'}
    ]

    if (props.titleOrAuthor == 0){
        return(
            <div className = 'cardBox'>
                <p><strong>{Object.keys(fruits[props.numCard])[0]}</strong></p>
            </div>
        )
    }
    else{
        return(
            <div className = 'cardBox'>
                <p><strong>{Object.values(fruits[props.numCard])[0]}</strong></p>
            </div>
        )
    }
}

export default Card;
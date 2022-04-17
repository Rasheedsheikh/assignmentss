import styles from "./Card.module.css"

function Card(props){
    // console.log(props)

    const {name,org,qual,gender,imgURL}=props
    return (
        <div className={styles.card}>

            <div class="left">
                <img src= {props.imgURL} alt ={props.name}/>
            </div>
            <div class="right">
<h1> name: {name}</h1>
<h2> Gender:{gender}</h2>
<h2>Qualification:{qual}</h2>
<h2>{org}</h2>
            </div>
        </div>
    )
}
export default Card
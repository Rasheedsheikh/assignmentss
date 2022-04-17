import  styles from'./List.module.css'


const List = (props)=>{
    console.log(styles)
    return (
    <>
   
<h1 className={styles.header} >student list</h1>
    </>
    );
}

export default List
import Card from "./Card"

const data= {
    name:"rasheed",
    qual:"ug",
    org:"Masai",
    gender:"female",
    imgURL:"https://yt3.ggpht.com/ytc/AKedOLSI4XaT1pjTljZbzi6_f7Zmp7MRE-oRaRPZ2UzQGA=s900-c-k-c0x00ffffff-no-rj",
}

function Employee(){
    return (
        <>
<Card {...data}/>
        </>
)
}
export default Employee


const Minutes =({props:{minutes}})=>{
    let values = Math.floor((minutes+5)/5)
    return(<>
    <p>{`${minutes} min read`}</p>
    </>)
}


export default Minutes;
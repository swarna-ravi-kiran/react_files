function List(){
    var information = [ "HTML","CSS","JS","REACT","NODE","JAVA"]
return(
    <div>
        <h2> 
            set the information
        </h2>
        <ol>
            {information.map(function(element,index){
                return <li>{element}</li>
            })}
        </ol>
    </div>
)
}
export default List;
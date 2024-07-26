  




  //client side componentdynamic routing of page(page oru pad ubayogikkugha)
  "use client"
  import { useParams } from "next/navigation";
const Subproduct = () => {
  let par=useParams()  
   
    return ( 
      <div>
          <h1>page number is{par.subproduct}</h1>
          <h6>price is 500</h6>
      </div>
        
     );
}
 
export default Subproduct;
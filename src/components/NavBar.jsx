import { list } from "postcss";


import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


// import PropTypes from "prop-types";
let NavBar=()=>{


    let [toggle,setToggle]=useState(false);

    const routes = [
        {
          id: 1,
          path: "/",
          name: "Home"
        },
        {
          id: 2,
          path: "/about",
          name: "About"
        },
        {
          id: 3,
          path: "/product/:productId",
          name: "Product Details"
        },
        {
          id: 4,
          path: "/user/:userId",
          name: "User Profile"
        },
        {
          id: 5,
          path: "/blog/:postId",
          name: "Blog Post"
        }
      ];
      

     

    return(



        <div className="flex" >
   <div onClick={()=>setToggle(!toggle)} className="text-4xl md:hidden   ">
                {toggle === true ? <IoMdClose></IoMdClose>  : <IoMenu></IoMenu> }
               </div>


               <div >
            <ul  className={`md:flex md:gap-20  ${toggle ?' ' :'hidden'}`}>
           
            {routes.map((output)=>(<li key={output.id}>{output.name}</li>))
            
            }

        </ul>
        </div>


        </div>

    )
}

// NavBar.propTypes={
//      route:PropTypes.object


// }

export default NavBar;
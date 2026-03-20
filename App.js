import React  from "react";
import ReactDOM from "react-dom/client"

// this is jsx-----html or xml like syntax balel trinspiles it to react.createelement

const elem=<span>React Element</span>



const HeadingComponent=()=>(
<div className="container">

    <Title />


    <h2>Namaste react Functional component</h2>
</div>
   
)

const Title=()=>(
    
    
    <h1 id="heading">
    Namaste React from JSX  {elem}
    </h1>

    )

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)

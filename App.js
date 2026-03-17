// const heading=React.createElement('h1',{id:"heading",xyz:"ABC",peppr:"hello buddy"},'hello world from react')
// const root=ReactDOM.createRoot(document.getElementById('root'))
//  root.render(heading)

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h1",{},"I am h1 tag")

    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i am heading child1"),
        React.createElement("h2",{}, "i am child heading2")
    ])
])

console.log(parent)

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
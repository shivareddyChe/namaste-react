const parent = React.createElement(
    "div", {id:"parent"},
    [React.createElement("div", {id:"child"}, [
    React.createElement("h1", {}, "Im an h1 tag"),
    React.createElement("h2", {}, "Im an h2 tag")
]),

React.createElement("div", {id:"child"}, [
    React.createElement("h1", {}, "Im an h1 tag"),
    React.createElement("h2", {}, "Im an h2 tag")
])
]);
    console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

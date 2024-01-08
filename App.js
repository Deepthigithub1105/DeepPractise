{/* <div id="parent">
    <div id="child">
        <h1>This is heading 1</h1>
    </div>
    <div id="child2">
        <h2>This is heading 2</h2>
    </div>
</div> */}

const heading = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"This is heading 1"),React.createElement("h2",{},"This is heading 2")]),
React.createElement("div",{id:"child2"},
React.createElement("h2",{},"This is heading 2"))]
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
import React from "react"

export default function Things() {
    const [isGuitarist, setIsGuitarist] = React.useState(true);

    const things = ["Thing 1", "Thing 2", "Thing 3"];
    const thingElements = things.map(thing => <p key={thing}>{thing}</p>);

    function addThing() {
        things.push("thing " + (things.length + 1));
        console.log(things);
    }

    function toggleIsGuitarist() {
        setIsGuitarist((isGuitarist) => !isGuitarist);
    }

    return (
        <div>
            <button onClick={addThing}>Add Item</button>
            {thingElements}
            <div>Is he a Guitarist? == <blockquote>{isGuitarist ? "Yes" : "No"}</blockquote></div>
            <button onClick={toggleIsGuitarist}>Click to change</button>
        </div>

    );
}
export default function Things() {
    const things = ["Thing 1", "Thing 2"];
    const thingElements = things.map(thing => <p>{thing}</p>);

    function addThing() {
        things.push("thing " + (things.length + 1));
        console.log(things);
    }

    return (
        <div>
            <button onClick={addThing}>Add Item</button>
            {thingElements}
        </div>

    );
}
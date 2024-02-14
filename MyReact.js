export function createElement({ type, props, Children }) {
    const newElement = document.createElement(type);

    // Set attributes based on props
    for (const prop in props) {
        if (props.hasOwnProperty(prop)) {
            newElement.setAttribute(prop, props[prop]);
        }
    }

    // Append children to the new element
    Children.forEach((child) => {
        if (typeof child !== "object") {
            console.log(child);
            newElement.innerHTML = child;
        } else {
            // If the child is an object (potentially another element), recursively call createElement
            const childElement = createElement({
                type: child.type,
                props: child.props,
                Children: child.Children || [],
            });
            newElement.appendChild(childElement);
        }
    });

    return newElement;
}

let state; // Initial state

// Return a closure containing the state value and a setter function
export function useState(initialValue) {
    state = initialValue ?? state;
    // Return a tuple with state and a setter function to update the state
    return [
        state,
        function (newState) {
            return (state = newState);
        },
    ];
}

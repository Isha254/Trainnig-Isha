import React from 'react'; 

// Stateless Functional Component 
const Navbar = props  => {
    console.log('Navbar - Rendered');

    return (

        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand m-2" href="www.google.com">
                Navbar {" "}
                <span className="badge badge-pill bg-secondary">
                    {props.totalCounters}
                </span>
                </a>
        </nav>
    );
}


export default Navbar; 
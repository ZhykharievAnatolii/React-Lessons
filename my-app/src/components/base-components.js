import React from "react";

class Header extends React.Component {
    render() {
        return <div className='grid-item grid-item-1'>This is the header block</div>
    }
}

class MainContainer extends React.Component {
    render() {
        return (<div className='grid-item grid-item-2'>
            <article className='text'>
                To access object properties we can use both dot and square brackets options.
                object.prop1.propOfProp1 or object[“prop1”][“propOfProp1”]
                We can use a variable as a property name while using square brackets (not a text directly).
                const button2 = document.getElementById('but2'),
                div2 = document.getElementById('div1');
                button2.addEventListener('click', function (event) \
                ) document.addEventListener('keyup', function (event) )

            </article>
        </div>)
    }
}

class SideNav extends React.Component {
    render() {
        return (<div className='grid-item grid-item-3'>
            <div className='sidenav'>
                <a href='src/components#'>Link 1</a>
                <a href='src/components#'>Link 2</a>
                <a href='src/components#'>Link 3</a>
                <a href='src/components#'>Link 4</a>
                <a href='src/components#'>Link 5</a>
                <a href='src/components#'>Link 6</a>
            </div>
        </div>)
    }
}

export {Header, SideNav, MainContainer}
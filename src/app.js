class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Let the computer choose for you.</h2>
            </div>
        ); 
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>Press me</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <h2>This is an option component.</h2>
            </div>
        );
    }
}

class AddOptions extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text"></input>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Option />
        <AddOptions />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
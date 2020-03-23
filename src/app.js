class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Indecision App',
            subTitle: 'Let the computer choose for you.',
            options: ['Thing one', 'Thing two', 'Thing five']
        };
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} subTitle={this.state.subTitle}/>
                <Action hasOptions={this.props.options.length > 0}/>
                <Options options={this.state.options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        ); 
    }
}

class Action extends React.Component {
    handlePick() {
        console.log("working");
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    Press me
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor (props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        this.props.options = [];
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option: {this.props.optionText}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
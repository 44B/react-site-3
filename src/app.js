// console.log('Running');

// //template 
// //using an enclosing tag (div) in order for babble to work with 2 adjacent elements
// //for clarity: use parenthesis
const app = { 
    title: 'Indecision App',
    subtitle: 'Write Away',
    options: []
};

const onForSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) 
    {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const removeAllForms  = () => {
    app.options = [];
    if (app.options = [])
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randomNum];
    alert(selectedOption);
    console.log(randomNum);
}

//subtitle only renders if subtitle exists
//conditional statement on options
const render = () => {
    const template = (
        <div>

            <h1>{app.title}</h1>

            {app.subtitle && <p>{app.subtitle}</p>}

            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}> Choose </button>

            <button onClick={removeAllForms}>Remove All</button>

            <p>{app.options.length}</p>

            <ol>
                {
                    app.options.map((option) => <li key={app.option}>{option}</li>)
                }
                <form onSubmit={onForSubmit}>
                    <input type="text" name="option"></input>
                    <button> Add button </button>
                </form>
            </ol>

        </div>
        );   
    ReactDOM.render(template, appRoot);
}
const appRoot = document.getElementById('app');
render();
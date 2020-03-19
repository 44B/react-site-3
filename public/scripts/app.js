'use strict';

// console.log('Running');

// //template 
// //using an enclosing tag (div) in order for babble to work with 2 adjacent elements
// //for clarity: use parenthesis
var app = {
    title: 'Indecision App',
    subtitle: 'Write Away',
    options: []
};

var onForSubmit = function onForSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var removeAllForms = function removeAllForms() {
    app.options = [];
    if (app.options = []) render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var selectedOption = app.options[randomNum];
    alert(selectedOption);
    console.log(randomNum);
};

//subtitle only renders if subtitle exists
//conditional statement on options
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options:' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            ' Choose '
        ),
        React.createElement(
            'button',
            { onClick: removeAllForms },
            'Remove All'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: app.option },
                    option
                );
            }),
            React.createElement(
                'form',
                { onSubmit: onForSubmit },
                React.createElement('input', { type: 'text', name: 'option' }),
                React.createElement(
                    'button',
                    null,
                    ' Add button '
                )
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
var appRoot = document.getElementById('app');
render();

import React from 'react';
import Action from './Action';
import Header from './Header';
import AddOption from './AddOption';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    state = {
        subTitle: 'Let the computer choose for you.',
        options: []
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((options) => optionToRemove !== options)
        }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Please enter value to add item.'
        }
        else if (this.state.options.indexOf(option) > -1){
            return 'This entry already exists.'
        }
        
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    handlePick = () => {
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const selectedOption = this.state.options[randomNum];
            return alert(selectedOption);
        });
    }

    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //Does nothing at all.
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} subTitle={this.state.subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options    
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

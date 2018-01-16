import React from 'react';
import * as Babel from 'babel-standalone';

export default class BabelTransformer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputJSX: '',
            outputJS: '',
            error: ''
        }
        this.transformJSX = this.transformJSX.bind(this);
    }
    transformJSX(event) {
        //console.log(event);
        let code = event.target.value;
        //console.log(code);
        try {
            this.setState({
                outputJS: Babel.transform(code, { presets: ['es2015', 'react'] }).code, error: ''
            });
        }
        catch(error) {
            this.setState({
                error: error.message
            });
        }
    }
    render() {
        return (
            <div>
                <h1>JSX Transformer</h1>
                <div className="container">
                    <textarea id="input" placeholder="Write some JSX here!" onChange={this.transformJSX} defaultValue={this.state.inputJSX}></textarea>
                    <div id="output">{this.state.outputJS}</div>
                </div>
                <footer>{this.state.error}</footer>
            </div>
        )
    }
}
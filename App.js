import React, { Component } from 'react';
import styled from 'styled-components';
import { fromJS } from 'immutable';

const Wrapper = styled.View`
    flex: 1;
    align-self: stretch;
`;

const Item = styled.Text`
    flex: 1;
    align-self: stretch;
    background-color: aquamarine;
    color: black;
    font-size: 25;
`;

const Button = styled.TouchableOpacity`
    flex: 1;
    background-color: blue;
`;

const ButtonLabel = styled.Text``;

const initialState = fromJS({
    items: [
        {
            text: 'Page 1 - Item 0',
            position: 0
        },
        {
            text: 'Page 1 - Item 1',
            position: 1
        },
        {
            text: 'Page 1 - Item 2',
            position: 2
        }
    ]
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: initialState
        };
    }

    deleteItem1 = () => {
        const newState = this.state.appState.deleteIn(['items', 1]);

        // Uncomment the following block to log the problematic state

        // console.log('==================================================');
        // console.log(`
        //     newState
        //     --------------------------------------------------
        //     ${JSON.stringify(newState.toJS())}
        // `);
        // console.log('==================================================');

        this.setState({ appState: newState });
    };

    render() {
        const { appState } = this.state;
        return (
            <Wrapper>
                {appState.get('items').map(item => <Item key={item.get('position')}>{item.get('text')}</Item>)}
                <Button onPress={this.deleteItem1}>
                    <ButtonLabel>Delete item 1</ButtonLabel>
                </Button>
            </Wrapper>
        );
    }
}

export default App;

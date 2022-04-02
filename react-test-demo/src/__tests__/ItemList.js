import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from '../components/ItemList';

test('renders "no items" when the item list is empty', () => {
    // arrange
    const container = document.createElement('div');

    //act
    ReactDOM.render(<ItemList items={[]} />, container);

    //assert
    expect(container.textContent).toMatch('no items');
});

test('renders the items in a list', () => {
    // arrange
    const container = document.createElement('div');

    // act
    ReactDOM.render(<ItemList items={['apple', 'orange', 'pear']} />, container);

    // assert
    expect(container.textContent).toMatch('apple');
    expect(container.textContent).toMatch('orange');
    expect(container.textContent).toMatch('pear');
});

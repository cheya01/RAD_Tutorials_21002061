


const sampleArray = [
  { title: 'Card 1', content: 'This is the content of Card 1' },
  { title: 'Card 2', content: 'This is the content of Card 2' },
  { title: 'Card 3', content: 'This is the content of Card 3' }
];

ReactDOM.render(<CardList cards={sampleArray} />, document.getElementById('root'));

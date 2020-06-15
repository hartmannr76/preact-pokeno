import { h, Component } from 'preact';
import style from './style';

function shuffle(array) {
	let currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

export default class Host extends Component {
	state = {
		time: Date.now(),
		count: -1,
		deck: shuffle(Array(52).fill(false).map((e, i) => ({value: e, place: i}))),
		board: Array(52).fill(),
	};

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		// draw the next card
		const next = this.state.count + 1;
		let deck = [...this.state.deck]; 
		
		// change the value to "seen" as reference for the board
		let card = { ...deck[next], value: true };
		deck[next] = card;

		// determine where on the board the card will be displayed
		let board = [...this.state.board]; 
		board[card.place] = card;

		this.setState({ 
			count: this.state.count + 1,
			deck,
			board,
		 });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	cards = (slice, suit) => slice.map((e, i) => {
		if (e) {
			let number = (e.place%13)+2;

			if (number == 11) {
				number = 'jack';
			} else if (number == 12) {
				number = 'queen';
			} else if (number == 13) {
				number = 'king'
			} else if (number == 14) {
				number = 'ace'
			}
			const path = `/assets/svg-cards/${number}_of_${suit}.svg`;
			return (<img class={style.card} src={path} />);
			
		}

		return (
			<p class={`${style.aligner} ${style.card}`} key={i}>
				<span class={style.alignedItem}>-</span>
			</p>);
	});

	renderRow() {
		const hearts = this.cards(this.state.board.slice(0, 13), 'hearts');
		const spades = this.cards(this.state.board.slice(13, 26), 'spades');
		const diamonds = this.cards(this.state.board.slice(26, 39), 'diamonds');
		const clubs = this.cards(this.state.board.slice(39, 52), 'clubs');

		return <div>
			<div class={style.row}>{hearts}</div>
			<div class={style.row}>{spades}</div>
			<div class={style.row}>{diamonds}</div>
			<div class={style.row}>{clubs}</div>
		</div>;
	}

	render(_, { count }) {
		return (
			<div class={style.profile}>
				<p>
					<button onClick={this.increment}>Draw Card</button>
					{' '}
					Cards drawn: {count+1}.
				</p>
				{this.renderRow()}
			</div>
		);
	}
}

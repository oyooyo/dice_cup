import {
	Button,
	ColumnsRow,
	EmptyIcon,
	NavBar,
	RollDiceIcon,
} from './ui.mjs';
import {
	DrawingSvgNode,
	Svg,
} from './graphics.mjs';
import {
	is_next_impossible_for_all_slots,
} from './state.mjs';

const UrnBallSvg = (({
	urn,
	ball_index,
}) =>
	(((urn !== null) && (ball_index !== null))
		?
			<Svg
				viewBox_width={urn.canvas_width}
				viewBox_height={urn.canvas_height}
				viewBox_left={urn.canvas_left}
				viewBox_top={urn.canvas_top}
			>
				<DrawingSvgNode drawable={urn.balls[ball_index]} />
			</Svg>
	: <EmptyIcon width="auto" height="auto" />
	)
);

const MainPage = (({
	state:slots,
	dispatch,
}) =>
	<div className="page">
		<NavBar current="/main" />
		<div className="container-fluid">
			<ColumnsRow className="my-2">
				{slots.map((slot, slot_index) =>
					<UrnBallSvg urn={slot.urn} ball_index={slot.current} key={slot_index} />
				)}
			</ColumnsRow>
			<Button
				classNames={['btn-lg']}
				onClick={() => {
					dispatch({type:'get_next_for_all_slots'});
				}}
				disabled={is_next_impossible_for_all_slots(slots)}
			>
				<RollDiceIcon scale={2} /> Next
			</Button>
		</div>
	</div>
);

export default MainPage;

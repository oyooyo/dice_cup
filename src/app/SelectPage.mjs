import {
	DrawingsCollageSvg,
} from './graphics.mjs';
import {
	Headline,
	NavBar,
} from './ui.mjs';
import DEFAULT_URNS from './DEFAULT_URNS.mjs';

const UrnSvg = (({
	urn,
}) =>
	<DrawingsCollageSvg
		drawables={urn.balls}
		drawing_width={urn.canvas_width}
		drawing_height={urn.canvas_height}
	/>
);

const UrnList = (({
	urns,
	onClick,
}) =>
	<div className="list-group">
		{urns.map((urn, index) =>
			<button
				type="button"
				className="list-group-item list-group-item-action"
				onClick={(event) => {
					if ((typeof onClick) === 'function') {
						onClick(index);
					}
				}}
				key={index}
			>
				<UrnSvg urn={urn} />
			</button>
		)}
	</div>
);

const SelectPage = (({
	state,
	dispatch,
}) => {
	const available_urns = DEFAULT_URNS;
	return (
		<div className="page">
			<NavBar current="/select" />
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-sm-6">
						<Headline>
							Available <small className="text-muted">(Click to select)</small>
						</Headline>
						<UrnList
							urns={available_urns}
							onClick={(available_urn_index) => {
								dispatch({type:'add_slot', urn:available_urns[available_urn_index]});
							}}
						/>
					</div>
					<div className="col-12 col-sm-6">
						<Headline>
							Selected <small className="text-muted">(Click to unselect)</small>
						</Headline>
						<UrnList
							urns={state.map((slot) => slot.urn)}
							onClick={(slot_index) => {
								dispatch({type:'remove_slot', slot_index:slot_index});
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
});

export default SelectPage;

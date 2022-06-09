import {
	max,
	min,
	ceil,
	floor,
} from './math.mjs';

const PathSvgNode = (({
	d='',
	fill='#000000',
	stroke='none',
	strokeWidth='1px',
}) =>
	<path
		d={d}
		fill={fill}
		stroke={stroke}
		strokeWidth={strokeWidth}
	/>
);

const SHAPE_TYPE_ELEMENTS = {
	'path': PathSvgNode,
};

const REACT_ATTRIBUTE_NAME_MAPPINGS = {
	'stroke-width': 'strokeWidth',
};

const convert_attribute_names_for_react = ((attributes) =>
	Object.fromEntries(
		Object.entries(attributes).map(
			(([attribute_key, attribute_value]) =>
				[
					(REACT_ATTRIBUTE_NAME_MAPPINGS.hasOwnProperty(attribute_key) ? REACT_ATTRIBUTE_NAME_MAPPINGS[attribute_key] : attribute_key),
					attribute_value,
				]
			)
		)
	)
);

const ShapeDrawingSvgNode = (({
	shape_drawable,
	...attributes
}) => {
	const {shape:shape_type_id, ...shape_attributes} = shape_drawable;
	const ShapeTypeElement = SHAPE_TYPE_ELEMENTS[shape_type_id];
	return (
		<ShapeTypeElement {...convert_attribute_names_for_react(shape_attributes)} {...attributes} />
	);
});

const StackedDrawingSvgNode = (({
	drawables_stack,
	...attributes
}) =>
	<g {...attributes}>
		{drawables_stack.map((drawable, drawable_index) =>
			<DrawingSvgNode drawable={drawable} key={drawable_index} />
		)}
	</g>
);

const DrawingSvgNode = (({
	drawable,
	...attributes
}) =>
	(Array.isArray(drawable)
		? <StackedDrawingSvgNode drawables_stack={drawable} {...attributes} />
		: <ShapeDrawingSvgNode shape_drawable={drawable} {...attributes} />
	)
);

const DrawingsCollageSvg = (({
	drawables,
	drawing_width,
	drawing_height,
	border_color='#808080',
	border_color_inner=border_color,
	border_color_outer=border_color,
	border_size=ceil(min(drawing_width, drawing_height) / 32),
	border_size_inner=border_size,
	border_size_inner_x=border_size_inner,
	border_size_inner_y=border_size_inner,
	border_size_outer=border_size,
	border_size_outer_x=border_size_outer,
	border_size_outer_left=border_size_outer_x,
	border_size_outer_right=border_size_outer_x,
	border_size_outer_y=border_size_outer,
	border_size_outer_top=border_size_outer_y,
	border_size_outer_bottom=border_size_outer_y,
	number_of_columns=drawables.length,
	...attributes
}) => {
	const number_of_rows = ceil(drawables.length / number_of_columns);
	const inner_width = ((drawing_width * number_of_columns) + (border_size_inner_x * max((number_of_columns - 1), 0)));
	const inner_height = ((drawing_height * number_of_rows) + (border_size_inner_y * max((number_of_rows - 1), 0)));
	const width = (border_size_outer_left + inner_width + border_size_outer_right);
	const height = (border_size_outer_top + inner_height + border_size_outer_bottom);
	return (
		<Svg
			{...attributes}
			viewBox_width={width}
			viewBox_height={height}
		>
			<path d={`M0,0h${width}v${height}h-${width}z`} fill={border_color_outer} />
			<path d={`M${border_size_outer_left},${border_size_outer_top}h${inner_width}v${inner_height}h-${inner_width}z`} fill={border_color_inner} />
			{drawables.map((drawable, index) =>
				<DrawingSvgNode
					drawable={drawable}
					transform={`translate(${border_size_outer_left + ((drawing_width + border_size_inner_x) * (index % number_of_columns))},${border_size_outer_top + ((drawing_height + border_size_inner_y) * floor(index / number_of_columns))})`}
					key={index}
				/>
			)}
		</Svg>
	);
});

const Svg = (({
	viewBox_size,
	viewBox_width=viewBox_size,
	viewBox_height=viewBox_size,
	viewBox_offset=0,
	viewBox_left=viewBox_offset,
	viewBox_top=viewBox_offset,
	viewBox=`${viewBox_left},${viewBox_top} ${viewBox_width},${viewBox_height}`,
	children,
	...attributes
}) =>
	<svg
		{...attributes}
		xmlns="http://www.w3.org/2000/svg"
		viewBox={viewBox}
	>
		{children}
	</svg>
);

export {
	DrawingSvgNode,
	DrawingsCollageSvg,
	Svg,
};

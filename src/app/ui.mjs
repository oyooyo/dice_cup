import {
	Link,
} from 'react-router-dom';

const NavBarLink = (({
	to,
	current,
	children,
}) =>
	<li className="nav-item">
		{(to === current)
			? <Link to={to} className="nav-link active disabled" aria-current="page">{children}</Link>
			: <Link to={to} className="nav-link">{children}</Link>
		}
	</li>
);

const NavBar = (({
	current,
	children,
}) =>
	<nav className="navbar navbar-expand sticky-top navbar-dark bg-dark">
		<div className="container-fluid">
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_content" aria-controls="navbar_content" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbar_content">
				<ul className="navbar-nav">
					<NavBarLink to="/main" current={current}>
						<MainPageIcon /> Main
					</NavBarLink>
					<NavBarLink to="/select" current={current}>
						<SelectPageIcon /> Select
					</NavBarLink>
				</ul>
			</div>
		</div>
	</nav>
);

const Button = (({
	color='primary',
	classNames=[],
	children,
	...attributes
}) =>
	<button
		type="button"
		className={['btn', `btn-${color}`, 'w-100', ...classNames].join(' ')}
		{...attributes}
	>
		{children}
	</button>
);

const Headline = (({
	size=4,
	background_color='secondary',
	text_color='light',
	border_color='light',
	border_size=3,
	p=1,
	px=p,
	py=p,
	my=2,
	classNames=[],
	children,
	...attributes
}) =>
	<div
		className={[
			`h${size}`,
			`bg-${background_color}`,
			`text-${text_color}`,
			`px-${px}`,
			`py-${py}`,
			'rounded',
			'border',
			`border-${border_color}`,
			`border-${border_size}`,
			`my-${my}`,
			...classNames,
		].join(' ')}
		{...attributes}
	>
		{children}
	</div>
);

const ColumnsRow = (({
	className,
	children,
}) =>
	<div className={`row ${className}`}>
		{children.map((child, child_index) =>
			<div className="col" key={child_index}>
				{child}
			</div>
		)}
	</div>
);

const BootstrapIcon = (({
	icon_id,
	paths,
	scale=1,
	size=`${scale}em`,
	width=size,
	height=size,
	color='currentColor',
}) =>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		fill={color}
		className={`bi bi-${icon_id}`}
		viewBox="0 0 16 16"
	>
		{paths.map((path_d, path_index) =>
			<path
				d={path_d}
				key={path_index}
			/>
		)}
	</svg>
);

const Dice5FillIcon = (({
	...attributes
}) =>
	<BootstrapIcon
		{...attributes}
		icon_id="dice-5-fill"
		paths={[
			'M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
		]}
	/>
);

const RollDiceIcon = Dice5FillIcon;

const MainPageIcon = Dice5FillIcon;

const XLgIcon = (({
	...attributes
}) =>
	<BootstrapIcon
		{...attributes}
		icon_id="x-lg"
		paths={[
			'M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z',
		]}
	/>
);

const EmptyIcon = XLgIcon;

const ListCheckIcon = (({
	...attributes
}) =>
	<BootstrapIcon
		{...attributes}
		icon_id="list-check"
		paths={[
			'M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z',
		]}
	/>
);

const SelectPageIcon = ListCheckIcon;

export {
	Button,
	ColumnsRow,
	EmptyIcon,
	Headline,
	MainPageIcon,
	NavBar,
	RollDiceIcon,
	SelectPageIcon,
};

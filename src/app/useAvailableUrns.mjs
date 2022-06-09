// TODO this file is currently not being used. Remove it or add possibility to add custom urns

import {
	useState,
} from 'react';
import BASE_URL from '../BASE_URL.mjs';

const useStoredValue = ((
	key='default',
	default_value=undefined,
	base=BASE_URL,
	storage=localStorage,
) => {
	const full_key = `${base}|${key}`;
	const [value, set_value] = useState(() => {
		const stored_value_string = storage.getItem(full_key);
		return ((stored_value_string === null)
			? default_value
			: JSON.parse(stored_value_string)
		);
	});
	const set_stored_value = ((new_value) => {
		storage.setItem(full_key, JSON.stringify(new_value));
		set_value(new_value);
	});
	return [value, set_stored_value];
});

const useAvailableUrns = ((
) =>
	useStoredValue(
		'available_urns',
		[],
	)
);

export default useAvailableUrns;

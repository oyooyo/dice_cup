import {
	useReducer,
} from 'react';
import BASE_URL from '../BASE_URL.mjs';
import {
	floor,
	random,
} from './math.mjs';

const ROLL_DICE_AUDIO = (new Audio(`${BASE_URL}/roll_dice_sound.m4a`));

const PLACE_DIE_IN_SHAKER_AUDIO = (new Audio(`${BASE_URL}/add_die_to_dice_cup_sound.m4a`));

const play_audio = ((audio) => {
	audio.play();
});

const get_random_integer = ((
	max,
	min=0,
) =>
	floor((random() * (max - min)) + min)
);

const splice_array_out_of_place = ((
	array,
	...args
) => {
	const new_array = array.slice();
	new_array.splice(...args);
	return new_array;
});

const create_integer_range_array = ((
	stop,
	start=0,
) =>
	Array.from({length:(stop - start)}, ((_, index) => (index + start)))
);

const create_slot = ((
	urn,
) => ({
	urn: urn,
	current: null,
	remaining: create_integer_range_array(urn.balls.length),
}));

const pick_random_current_from_remaining_in_slot = ((
	old_slot,
) => {
	const old_remaining = old_slot.remaining;
	const old_remaining_length = old_remaining.length;
	if (old_remaining_length === 0) {
		return old_slot;
	}
	const old_remaining_index = get_random_integer(old_remaining_length);
	const new_current = old_remaining[old_remaining_index];
	const new_remaining = (old_slot.urn.place_back
		? old_remaining
		: splice_array_out_of_place(old_remaining, old_remaining_index)
	);
	return (((new_remaining !== old_remaining) || (new_current !== old_slot.current))
		? {...old_slot, current: new_current, remaining: new_remaining}
		: old_slot
	);
});

const apply_slot_actions_to_slot = ((
	old_slot,
	...slot_action_functions
) =>
	slot_action_functions.reduce(
		((temporary_slot, current_slot_action_function) =>
			current_slot_action_function(temporary_slot)
		),
		old_slot,
	)
);

const execute_slot_actions_on_slot_with_index = ((
	old_slots,
	slot_index,
	...slot_action_functions
) => {
	const old_slot = old_slots[slot_index];
	const new_slot = apply_slot_actions_to_slot(old_slot, ...slot_action_functions);
	return ((new_slot !== old_slot)
		? splice_array_out_of_place(old_slots, slot_index, 1, new_slot)
		: old_slots
	);
});

const execute_slot_actions_on_all_slots = ((
	old_slots,
	...slot_action_functions
) =>
	old_slots.reduce(
		((temporary_slots, old_slot, slot_index) =>
			execute_slot_actions_on_slot_with_index(temporary_slots, slot_index, ...slot_action_functions)
		),
		old_slots,
	)
);

const state_reducer = ((
	old_slots,
	action,
) => {
	switch (action.type) {
		case 'add_slot':
			play_audio(PLACE_DIE_IN_SHAKER_AUDIO);
			return [...old_slots, create_slot(action.urn)];
		case 'remove_slot':
			return splice_array_out_of_place(old_slots, action.slot_index, 1);
		case 'get_next_for_all_slots':
			play_audio(ROLL_DICE_AUDIO);
			return execute_slot_actions_on_all_slots(old_slots, pick_random_current_from_remaining_in_slot);
		default:
			throw (new Error(`Invalid action type "${action.type}"`));
	}
});

const INITIAL_STATE = [];

const useStateReducer = ((
) =>
	useReducer(state_reducer, INITIAL_STATE)
);

const is_next_impossible_for_slot = ((
	slot,
) =>
	(slot.remaining.length > 0)
);

const is_next_impossible_for_all_slots = ((
	slots,
) => {
	for (const slot of slots) {
		if (is_next_impossible_for_slot(slot)) {
			return false;
		}
	}
	return true;
});

export {
	is_next_impossible_for_all_slots,
	useStateReducer,
};

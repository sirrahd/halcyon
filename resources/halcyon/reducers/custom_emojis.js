import { List as ImmutableList, fromJS } from 'immutable';
import { STORE_HYDRATE } from '../actions/store';
import { CUSTOM_EMOJIS_FETCH_SUCCESS } from '../actions/custom_emojis';
import { search as emojiSearch } from '../features/emoji/emoji_mart_search_light';
import { buildCustomEmojis } from '../features/emoji/emoji';

const initialState = ImmutableList();

export default function custom_emojis(state = initialState, action) {
  switch(action.type) {
  case STORE_HYDRATE:
    emojiSearch('', { custom: buildCustomEmojis(action.state.get('custom_emojis', [])) });
    return action.state.get('custom_emojis');
  case CUSTOM_EMOJIS_FETCH_SUCCESS:
    emojiSearch('', { custom: buildCustomEmojis(fromJS(action.emojis) || ImmutableList()) });
    return action.emojis;
  default:
    return state;
  }
};

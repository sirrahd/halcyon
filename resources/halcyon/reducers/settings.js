import { SETTING_CHANGE } from '../actions/settings';
import { STORE_HYDRATE } from '../actions/store';
import { EMOJI_USE } from '../actions/emojis';
import { Map as ImmutableMap } from 'immutable';

const initialState = ImmutableMap({
  skinTone: 1,

  home: ImmutableMap({
    shows: ImmutableMap({
      reblog: true,
      reply: true,
    }),

    regex: ImmutableMap({
      body: '',
    }),
  }),

  // notifications: ImmutableMap({
  //   alerts: ImmutableMap({
  //     follow: true,
  //     favourite: true,
  //     reblog: true,
  //     mention: true,
  //   }),

  //   shows: ImmutableMap({
  //     follow: true,
  //     favourite: true,
  //     reblog: true,
  //     mention: true,
  //   }),

  //   sounds: ImmutableMap({
  //     follow: true,
  //     favourite: true,
  //     reblog: true,
  //     mention: true,
  //   }),
  // }),

  community: ImmutableMap({
    regex: ImmutableMap({
      body: '',
    }),
  }),

  public: ImmutableMap({
    regex: ImmutableMap({
      body: '',
    }),
  }),


  halcyon: ImmutableMap({
    roundAvatars: false,
    showNavigationLabels: false,
    usernameDisplay: 'remote_only',
  }),
});

const hydrate = (state, settings) => state.mergeDeep(settings);

const updateFrequentEmojis = (state, emoji) => state.update('frequentlyUsedEmojis', ImmutableMap(), map => map.update(emoji.id, 0, count => count + 1)).set('saved', false);

export default function settings(state = initialState, action) {
  switch(action.type) {
  case STORE_HYDRATE:
    return hydrate(state, action.state.get('settings'));
  case SETTING_CHANGE:
    return state.setIn(action.key, action.value);
  case EMOJI_USE:
    return updateFrequentEmojis(state, action.emoji);
  default:
    return state;
  }
};

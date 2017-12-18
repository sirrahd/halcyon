import { SETTING_CHANGE, SETTING_SAVE } from '../actions/settings';
import { STORE_HYDRATE } from '../actions/store';
import { EMOJI_USE } from '../actions/emojis';
import { Map as ImmutableMap } from 'immutable';

const initialState = ImmutableMap({
  saved: true,

  onboarded: false,

  skinTone: 1,

  halcyon: ImmutableMap({
    meta: ImmutableMap({
      unfollowModal: false,
      boostModal: false,
      deleteModal: false,
      autoPlayGif: false,
      reduceMotion: false,
    }),

    compose: ImmutableMap({
      defaultPrivacy: 'public',
      defaultSensitive: false,
      maxLength: 500,
    }),

    roundAvatar: false,
    showNavigationLabels: false,
  }),

  home: ImmutableMap({
    shows: ImmutableMap({
      reblog: true,
      reply: true,
    }),

    regex: ImmutableMap({
      body: '',
    }),
  }),

  notifications: ImmutableMap({
    alerts: ImmutableMap({
      follow: true,
      favourite: true,
      reblog: true,
      mention: true,
    }),

    shows: ImmutableMap({
      follow: true,
      favourite: true,
      reblog: true,
      mention: true,
    }),

    sounds: ImmutableMap({
      follow: true,
      favourite: true,
      reblog: true,
      mention: true,
    }),
  }),

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
});

const hydrate = (state, settings) => state.mergeDeep(settings);

const updateFrequentEmojis = (state, emoji) => state.update('frequentlyUsedEmojis', ImmutableMap(), map => map.update(emoji.id, 0, count => count + 1)).set('saved', false);

export default function settings(state = initialState, action) {
  switch(action.type) {
  case STORE_HYDRATE:
    return hydrate(state, action.state.get('settings'));
  case SETTING_CHANGE:
    return state
      .setIn(action.key, action.value)
      .set('saved', false);
  case EMOJI_USE:
    return updateFrequentEmojis(state, action.emoji);
  case SETTING_SAVE:
    return state.set('saved', true);
  default:
    return state;
  }
};

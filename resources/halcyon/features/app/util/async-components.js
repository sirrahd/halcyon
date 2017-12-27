export function EmojiPicker () {
  return import(/* webpackChunkName: "/features/emoji_picker" */'../../emoji/emoji_picker');
}

export function HomeTimeline () {
  return import(/* webpackChunkName: "/features/home_timeline" */'../../home_timeline');
}

export function PublicTimeline () {
  return import(/* webpackChunkName: "/features/public_timeline" */'../../public_timeline');
}

export function CommunityTimeline () {
  return import(/* webpackChunkName: "/features/community_timeline" */'../../community_timeline');
}

export function HashtagTimeline () {
  return import(/* webpackChunkName: "/features/hashtag_timeline" */'../../hashtag_timeline');
}

export function ListTimeline () {
  return import(/* webpackChunkName: "/features/list_timeline" */'../../list_timeline');
}

export function AccountTimeline () {
  return import(/* webpackChunkName: "/features/account_timeline" */'../../account_timeline');
}

export function AccountFollowers () {
  return import(/* webpackChunkName: "/features/account_followers" */'../../account_followers');
}

export function AccountFollowing () {
  return import(/* webpackChunkName: "/features/account_following" */'../../account_following');
}

export function NotFound () {
  return import(/* webpackChunkName: "/features/not_found" */'../../not_found');
}

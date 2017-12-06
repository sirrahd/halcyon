import initialState from './initial_state';

export default function replaceUrl(url) {
  const { me } = initialState;
  const { domain } = initialState.meta;
  const { protocol, host } = location;

  return url
    .replace(`https://${domain}`, `${protocol}//${host}`)
    .replace(/\/timelines\/home\/?$/,            '/')
    .replace(/\/timelines\/public\/?$/,          '/federated')
    .replace(/\/timelines\/public\/local\/?$/,   '/local')
    .replace(/\/timelines\/tag\/(.+?)\/?/,       '/search/?q=$1')
    .replace(/\/timelines\/list\/(.+?)\/?/,      '/list/$1')
    .replace(/\/notifications\/?/,               '/notifications')
    .replace(/\/favourites\/?/,                  `/${me}/favourites`)
    .replace(/\/statuses\/(.+?)\/?/,             '')
    .replace(/\/statuses\/(.+?)\/favourites\/?/, '')
    .replace(/\/statuses\/(.+?)\/reblogs\/?/,    '')
    .replace(/\/accounts\/(.+?)\/?/,             '')
    .replace(/\/accounts\/(.+?)\/followers\/?/,  '')
    .replace(/\/accounts\/(.+?)\/following\/?/,  '')
    .replace(/\/accounts\/(.+?)\/media\/?/,      '');
}

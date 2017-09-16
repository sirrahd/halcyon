import axios from 'axios';

export default function bootstrap() {
  window.axios = axios;
  const token = document.head.querySelector("meta[name='csrf-token']");
  if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
  } else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
  }
}

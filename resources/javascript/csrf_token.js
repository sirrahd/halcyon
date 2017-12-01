const element = document.getElementById('csrf-token');
const csrfToken = element && JSON.parse(element.textContent);

export default csrfToken;

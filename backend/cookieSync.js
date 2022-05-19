const afterCookie = `;path=/;domain=${process.env.domainBase}`;

export const CookieSync = {
  set(key, value) {
    document.cookie = `${key}=${value}${afterCookie}`
  },
  delete(key) {
    document.cookie = `${key}=null${afterCookie};expires=Thu, 01 Jan 1970 00:00:01 GMT"`
  },
  get(key) {
    key += '='
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if ((c.indexOf(key)) == 0) {
        return c.substring(key.length);
      }
    }
    return null;
  }
}

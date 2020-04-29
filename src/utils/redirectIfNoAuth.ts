import Router from 'next/router';

function redirectIfNoAuth(user?, req?) {
  if (!!user) {
    return;
  } else {
    if (req) {
      // Server side 302
      req.res.writeHead(302, {
        Location: '/'
      });
      req.res.end();
    } else {
      Router.push('/')
    }
  }
}

export default redirectIfNoAuth;
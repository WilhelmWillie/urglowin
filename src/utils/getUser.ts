import fetch from "isomorphic-unfetch";

async function getUser(req?) {
  const host = process.env.URL || 'http://localhost:3000';

  const getUserFromApi = async () => {
    const url = req ? `${host}/api/user` : '/api/user';

    const res = await fetch(url);

    if (res.status !== 200) {
      return null;
    }

    const data = await res.json();
    return data.user;
  }

  const user = req ? req.user : await getUserFromApi();

  return user;
}

export default getUser;
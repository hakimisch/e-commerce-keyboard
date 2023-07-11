import User from '../../../../../models/User';
import db from '../../../../../utils/db';
import { getToken } from 'next-auth/jwt';

const handler = async (req, res) => {
    const user = await getToken({ req });
    if (!user || !user.isAdmin) {
    return res.status(401).send('signin required');
  }

  if (req.method === 'GET') {
    return getHandler(req, res, user);
  } else if (req.method === 'PUT') {
    return putHandler(req, res, user);
  } else if (req.method === 'DELETE') {
    return deleteHandler(req, res, user);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};

const getHandler = async (req, res) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  await db.disconnect();
  res.send(user);
};

const putHandler = async (req, res) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  if (user) {
    user.name = req.body.name;
    user.isAdmin = Boolean(req.body.isAdmin);
    await user.save();
    await db.disconnect();
    res.send({ message: 'User Updated Successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'User Not Found' });
  }
};

const deleteHandler = async (req, res) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  if (user) {
    await user.deleteOne();
    await db.disconnect();
    res.send({ message: 'User Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'User Not Found' });
  }
};

export default handler;
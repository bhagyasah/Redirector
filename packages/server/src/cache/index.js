import LRU from 'lru-cache';

const users = LRU({
  max: 100,
});

export default {
  users,
};
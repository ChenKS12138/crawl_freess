import assert from 'assert'
import Storage from '../utils/storager';

const list = [
  'ssr://MTcyLjEwNS4yMTkuOTA6MTQ2MjA6b3JpZ2luOmFlcy0yNTYtY2ZiOnBsYWluOmFuWjFOakJvUVdwdE9XTXkvP29iZnNwYXJhbT0mcmVtYXJrcz1WR1ZzWlZCc2RYTWdVMlZ5ZG1WeUlEWTAmZ3JvdXA9VkdWc1pWQnNkWE5HY21WbFUxTlM',
  'ssr://MTcyLjEwNS4yMTkuOTA6MTQ2MjQ6b3JpZ2luOmFlcy0yNTYtY2ZiOnBsYWluOmFuWjFOakJvUVdwdE9XTXkvP29iZnNwYXJhbT0mcmVtYXJrcz1WR1ZzWlZCc2RYTWdVMlZ5ZG1WeUlEWTEmZ3JvdXA9VkdWc1pWQnNkWE5HY21WbFUxTlM',
  'ssr://MTcyLjEwNC4xMjMuMjQwOjM0MjA0Om9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRM3AzVGxkRk5UWlFSbFF5Lz9vYmZzcGFyYW09JnJlbWFya3M9VkdWc1pWQnNkWE1nVTJWeWRtVnlJREV4TlEmZ3JvdXA9VkdWc1pWQnNkWE5HY21WbFUxTlM',
];

const storage = new Storage();
storage.append(list);
assert.deepEqual(list, Array.from(storage.allssrSet), " Test value equality of raw data and Storage data");
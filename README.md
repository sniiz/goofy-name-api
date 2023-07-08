# goofy name api

a jokey api that returns some goofy names.

# usage

TODO add public url

### GET

- `/`

  - returns: `["10", "random", "goofy", "names", ...]`

- `/full`
  - returns: `["10 random", "goofy names", ...]` (it's really just two goofy names separated by a space)

### POST

- `/names`

  - body: `{"quantity": number, "plural": boolean}`

  - returns `["quantity", "random", "goofy", "names", ...]` which will be plural if `plural` is true

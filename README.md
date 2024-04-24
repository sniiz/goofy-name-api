# goofy name api

the most self-explanatory api there is. returns goofy names. that's it.

# usage

you can either host this yourself or use https://s1.smhaley.xyz/ as shown in the examples below.

## GET /gn

returns an array of goofy names.

### query parameters (optional)

- `n` - the number of goofy names to return. `1` by default.

- `c` - capitalize the names. `false` by default.

### examples

```bash
curl https://s1.smhaley.xyz/gn   # ["skrunkleus"]
```

```bash
curl https://s1.smhaley.xyz/gn?n=3&c=true   # ["Quibbledeedoo", "Flongleton", "Slobbledoodery"]
```

# contributing

the names are generated from a list of prefixes and suffixes in `dictionary.json`. if you'd like to add more of either, feel free to submit a pull request.

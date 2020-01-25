# DENO - Simple server

Create my first http server with Deno

## Installation

Before all you have to install Deno by executing this command line :

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Then you will need to add 2 lines in your `~/.bashrc`

```
export DENO_INSTALL="/Users/stevenantal/.local"
export PATH="$DENO_INSTALL/bin:$PATH"
```

## Usage

To launch the server, use this command line :

```bash
deno --allow-net --allow-net server.ts
```

3 API are available :

- `'/'` : A simple "Hello World'
- `'/data'`: "Hello World" from a json file
- `'/fetch'`: Result of an API

## Related Links

To learn more about Deno, this way => [DENO](https://deno.land/)

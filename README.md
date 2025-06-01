# React ui lib

Template for react + shadcn (tailwind & radix) ui library

## Local developpement

The library and the projects which use it must be locally placed in a monorepo.
The folder structure should looks like that :

```
parent-folder/
├── packages/
│   ├── react-ui-lib/
├── sites/
│   └── my-super-app/
└── package.json
```

## package.json

The package.json of the monorepo :

```json
{
  "name": "react-ui-lib",
  "private": true,
  "workspaces": {
    "packages": ["packages/*", "sites/*"]
  }
}
```

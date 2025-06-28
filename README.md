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

The package.json of the app :

```json
{
  "dependencies": {
    "react-ui-lib": "*"
  }
}
```

## index.css of apps using the lib

If we want to use custom variables from the lib, we must declare theses variable in the css of the app :

```css
@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  ...;
}
```

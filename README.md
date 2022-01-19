# React Express Docker TypeScript App

#### A fullstack web application wich displayes a list of construction companies and an advanced search feature

## Requirments

- docker 20+
- docker-compose 1.25.0+

## Installation

- clone the projet from the git repository
- Run the following command

```
$ bash ./scripts/deploy.sh
```

- React app should be displayed at

```
$ http://localhost:3000/
```

- the Express server should run at

```
$ http://localhost:4200/
```

## Notes

- If any issues are encoutred with docker you can run both project separately
- inside /backend directory run

```
$ npm run start:prod
```

- inside /frontend directory run

```
$ npm run start
```

-both application should run on the same urls mentioned before

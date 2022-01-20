# React Express Docker TypeScript App

#### A fullstack web application which displays a list of construction companies and provides an advanced search feature

## Requirments

- docker 20+
- docker-compose 1.25.0+

## Installation

- Clone the projet from the git repository
- Run the following command

```
$ bash ./scripts/deploy.sh
```

- React app should be displayed at

```
$ http://localhost:3000/
```

- The Express server should run at

```
$ http://localhost:4200/
```

## Notes

- If any issues are encoutred with docker you can run both project separately
- For backend you should have typescript v4+ and ts-node package installed
- Inside /backend directory run

```
$ npm install
```

- Then

```
$ npm run start:dev
```

- Inside /frontend directory run

```
$ npm install
```

- Then

```
$ npm run start
```

- Both application should run on the same urls mentioned before

## Testing

- To run tests move under /frontend directory

```
$ npm run test
```

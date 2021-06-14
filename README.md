# pstdl.com
This web-application is built with NextJS and ReactJS.

## Install/Setup
To install all dependencies, run `yarn install` (you may need to install yarn on your system).
### Dev
```bash
npm run dev
```
This will run in developer mode with  hot reloading but is very slow as it only compiles what it needs.

### Build
```bash
npm run build
```
This will compile everything into the `.next` directory.

### Start
```bash
npm run start
```
This will start up the server and host the website on `localhost:3000`.

## Updating the Website
In the `/data` directory there are many Typescript files (`*.ts`). Edit the file that corresponds to what you want to
change. If you are changing content on a project or facility, in the `/md` directory you will find a Markdown file 
corresponding to the project/facility you need to edit. The website generates itself completely based off of the
`.ts` and `.md` files.
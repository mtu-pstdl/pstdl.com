# pstdl.com
This web-application is built with [NextJS](https://nextjs.org/) and [ReactJS](https://reactjs.org/) and is
deployed with [Vercel](https://vercel.com/).

## Install/Setup
To install all dependencies, run `yarn install`
* (you may need to install yarn on your system `sudo npm i -g yarn`).
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
This will start up the production level server.

## Updating the Website
In the `/data` directory there are many Typescript files (`*.ts`). Edit the file that corresponds to what you want to
change. If you are changing content on a project or facility, in the `/md` directory you will find a Markdown file 
corresponding to the project/facility you need to edit. The website generates itself completely based off of the
`.ts` and `.md` files.

### Adding a User
For example, to add a new person to the lab. Go to the `data/members.ts` file and add a block like this:
```typescript
export const ejcobb: Member = {
    firstName: "Elijah",
    lastName: "Cobb",
    username: "ejcobb",
	major: MemberMajor.CS,
	type: MemberType.PHD,
	linkedIn: "https://www.linkedin.com/in/elijahjcobb/",
	twitter: "https://twitter.com/elijahjcobb",
	bio: "This is the bio!",
	alumni: true
};
```

At the end of the `data/members.ts` file there is a line where you can add members. Add the new variable created to
this array:
```typescript
export const members: Member[] = [
    ejcobb,
    ...
```
Then you can add their profile picture by adding the file `ejcobb.jpg` to the `public/members` directory.

To add this user to specific projects, add their `Member` variable that you export in `data/members` to a facility or 
project within the `data/projects.ts` or `data/facilities.ts` files respectively.

```typescript
export const hoplite: DetailItem = {
    title: "HOPLITE",
    description: "A description...", 
    link: "hoplite",
    members: [
        ejcobb,
        ...
```

### Adding a Project/Facility
Very similar to the users, add a project/facility either in the `data/projects.ts` or
`data/facilities.ts` file. You can see a reference to the type definition for the item in that file.

Projects and facilities render their pages using markdown. In the `md` directory you can add markdown files.
Name them where the file name is the same as the `link` property on the `DetailItem`. Like users, you can add images
for a project/facility in the `public` directory. Again, make sure to name the file the same as the `link` property.


## Deployment
The entire Web App is deployed with [Vercel](https://vercel.com/). There are multiple domains used to reference
the site. Here is a mapping of the domains and the git branches they reference:

|Domain| Branch   |
|---|----------|
|`dev.pstdl.com`| `dev`    |
|`pstdl.com`| `master` |
|`pstdl.space`| `master`   |
|`huskyworks.space`| `master`   |

For example, **any time you push to `master`**, Vercel will pull the code and deploy the site in the production
environment. Likewise, when pushing to the `dev` branch on Github, the `dev.pstdl.com` site
will be updated automatically.

**ONLY PUSH WHEN YOU ARE DONE!** Make sure to do all development on your local machine and create branches
for the work you are doing, do not use master/dev to save incremental work/changes.
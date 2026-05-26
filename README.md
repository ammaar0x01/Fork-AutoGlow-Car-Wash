# Kleen maSheens

<pre>
- About:    A webapp using react for a car-wash service 
- Started:  2025-05-0d
- Updated:  2026-05-17
- Status:   work-in-progress
- Version:  0.4
- Branch:   frontend-main

- Developers 
    + PrincessUgbobuaku
    + ammaar0x01
</pre>
<hr />


## More info
Welcome to the Mobile Car Wash application repository! This project is designed to provide users with the convenience of having their cars washed at their desired location through a seamless mobile app experience.

This is a web-based car wash management system that allows customers to create accounts, save vehicles, and book car wash services online. The platform also includes employee and manager portals for managing bookings, monitoring operations, and tracking employee performance and productivity.

In this repository, you'll find the source code for the application that powers the mobile car wash service, allowing users to easily schedule, manage, and track their car wash appointments.
<hr />


## Updates 
### Tailwind (Addition), 2025-05-08
> Added tailwindcss dependencies 
```
npm install -D tailwindcss postcss autoprefixer

# Use this version; version 3
npm install -D tailwindcss@3 postcss autoprefixer

# Then 
npx tailwindcss init -p

# Then modify tailwind.config file if necessary
```
<hr />


## Key commands
```
# Start the app
# Open [http://localhost:3000](http://localhost:3000) to view it in your browser
npm start

# Test the app 
npm test

# Build the app 
npm run build 

# Serve the built version of the app
serve -s build 
```

<pre>
# === BACKEND === 
# Used in Fedora 43 to run the mongo service
podman run -d \
  --name mongodb \
  -p 27017:27017 \
  -v mongodb_data:/data/db \
  docker.io/mongo:8

# or 
podman run -d \
  --name mongodb \
  --restart=always \
  -p 27017:27017 \
  -v mongodb_data:/data/db \
  docker.io/mongo:8

# better

# remove broken container
podman stop mongodb
podman rm mongodb

podman run -d \
  --name mongodb \
  --network host \
  -v mongodb_data:/data/db \
  docker.io/mongo:8

# --- seems to work ---
sudo podman rm mongodb

sudo podman run -d \
  --name mongodb \
  --network host \
  docker.io/mongo:7

mongosh

</pre>

<pre>
ONLY FOR GITHUB PAGES
Help to deploy on github pages 

https://www.youtube.com/watch?v=hn1IkJk24ow

- add a 'homepage' key to the package.json file 
  "homepage": "https://ammaar0x01.github.io/Fork_AutoGlow_Car_Wash/",

- run `npm install gh-pages --save-dev`
- add to package.json
 "start": "react-scripts start",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",


- Deploy your app: Run `npm run deploy` in your terminal. 
  This triggers the build and pushes it to a gh-pages branch on GitHub automatically.

- Enable on GitHub: Go to your GitHub repository settings, 
click Pages on the left menu, and ensure the source is set to 
deploy from your specific branch.

</pre>


```
Hide warnings 
"scripts": {
  "start": "NODE_OPTIONS='--no-deprecation' react-scripts start",
  "build": "NODE_OPTIONS='--no-deprecation' react-scripts build"
}


```

<hr />


## Screenshots
<p float="left">
  <img src="./screenshots/Screenshot From 2026-05-11 19-45-41.png" width="48%" />
  <img src="./screenshots/Screenshot From 2026-05-11 19-47-45.png" width="48%" />
</p>
<!-- <img src="./screenshots/Screenshot From 2026-05-11 19-45-41.png" alt="Home page" width="50%">
<img src="./screenshots/Screenshot From 2026-05-11 19-47-45.png" alt="Home page (mobile view)" width="50%"> -->

<img src="./screenshots/Screenshot From 2026-05-14 16-06-20.png" />
<hr />


## Video demo 
<!-- <video src="./demo/demo-desktop.mp4" controls width="640" poster=""> -->
<video src="./demo/output.mp4" controls autoplay width="100%" poster="">

  Your browser does not support the video tag.
</video>
<hr />

## File naming 
<p>
This project consists of various types of files. 
Each file-type is named in a specific way
</p>

<pre>
folders       - kebab case; example 'a-new-folder'
[image files] - kebab case; example a-new-image.png /jpg /ico /webp

.css  - kebab case; example, a-new-file.css
.js   - camel case; example, aNewFile.js
.jsx  - pascal case; example, ANewFile.jsx
</pre>

## Notes
```
Identify and Update Outdated Packages
Most deprecation warnings disappear when you update your project dependencies to versions that natively support your current Node.js runtime.

Check for updates: Run npm outdated to see which packages have newer versions available.

Safe update: Run npm update to update packages within safe semantic version boundaries.

Major upgrade: Run npx npm-check-updates -u followed by npm install to force upgrade all packages to their latest major releases.
```

<hr />

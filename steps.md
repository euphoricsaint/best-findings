
1. **Create Your Vue Application:**

   Follow the guide at [Vue.js Quick Start](https://vuejs.org/guide/quick-start#creating-a-vue-application) to set up your Vue application.

3. **Initialize Git Repository:**

   ```bash
   cd /path/to/your/directory
   git init
   git add .
   git commit -m 'Initial commit'
   ```

4. **Create GitHub Repository:**

   - Create a new repository on GitHub.
   - Get its HTTPS URL.

5. **Set Remote and Push to GitHub:**

   ```bash
   git remote add origin <repository_URL>
   git push -u origin master
   ```

6. **Build Your Vue Application:**

   ```bash
   npm run build
   ```

7. **Add `dist` Directory to Git and Commit:**
   Make sure to update you vite config file with the repo name as base

   ```bash
   git add dist -f
   git commit -m 'Add dist directory'
   ```

8. **Push to GitHub:**

   ```bash
   git push
   ```

9. **Deploy to GitHub Pages:**

   ```bash
   git subtree push --prefix dist origin gh-pages
   ```


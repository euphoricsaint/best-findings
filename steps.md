
1. **Create Your Vue Application:**

   Follow the guide at [Vue.js Quick Start](https://vuejs.org/guide/quick-start#creating-a-vue-application) to set up your Vue application.

2. **Initialize Git Repository:**

   ```bash
   cd /path/to/your/directory
   git init
   git add .
   git commit -m 'Initial commit'
   ```

3. **Create GitHub Repository:**

   - Create a new repository on GitHub.
   - Get its HTTPS URL.

4. **Set Remote and Push to GitHub:**

   ```bash
   git remote add origin <repository_URL>
   git push -u origin master
   ```

5. **Build Your Vue Application:**

   ```bash
   npm run build
   ```

6. **Add `dist` Directory to Git and Commit:**

   ```bash
   git add dist -f
   git commit -m 'Add dist directory'
   ```

7. **Push to GitHub:**

   ```bash
   git push
   ```

8. **Deploy to GitHub Pages:**

   ```bash
   git subtree push --prefix dist origin gh-pages
   ```


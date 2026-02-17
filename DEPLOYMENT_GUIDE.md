# How to Deploy Your Portfolio

Currently, your website is running on **Localhost** (`localhost:3000`). This means:
1. It only exists on your computer.
2. It stops working when you close the terminal or turn off your computer.
3. The name "localhost" is just for testing.

To make it work **all the time** and have a name like **yasminebasti.vercel.app** (or a .com domain), you need to **Deploy** it.

## Recommended Method: Vercel (Easiest & Free)

Vercel is the company that makes Next.js, so it's the perfect place to host your site.

### Step 1: Push your code to GitHub
1. Create a repository on [GitHub.com](https://github.com/new). name it `portfolio`.
2. In your VS Code terminal (stop the server first with `Ctrl+C`), run these commands:
   ```bash
   git init
   git add .
   git commit -m "Ready for deploy"
   git branch -M main
   # Replace URL below with YOUR new GitHub repository URL
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [Vercel.com](https://vercel.com/signup) and sign up (continue with GitHub).
2. Click **"Add New..."** -> **"Project"**.
3. You will see your `portfolio` repository from GitHub. Click **Import**.
4. In the configuration screen:
   - **Framework Preset**: Next.js (should be auto-detected).
   - Click **Deploy**.

### Step 3: Get Your Link
1. Wait about a minute for Vercel to build your site.
2. Once done, you will get a link like `portfolio-tau-seven.vercel.app`.
3. To change this name:
   - Go to **Settings** -> **Domains**.
   - Click **Edit** on your main domain.
   - Change it to `yasminebasti.vercel.app` (if available).

### Step 4: (Optional) Buy a Custom Domain
If you want `yasminebasti.com`:
1. Buy the domain from a provider like GoDaddy, Namecheap, or directly inside Vercel.
2. In Vercel, go to **Settings** -> **Domains** and add your custom domain.

Now your website will run 24/7, even when you turn off your computer!

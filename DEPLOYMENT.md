# Deployment Guide

## Quick Setup Commands

Follow these exact steps to deploy your ROI calculator to GitHub:

### 1. Local Setup

```bash
# Download your project files from Replit
# Copy all files to a new local directory
cd your-local-project-directory

# Replace package.json with the GitHub version
mv package-github.json package.json

# Install dependencies
npm install

# Test the build
npm run build
npm start
```

### 2. GitHub Repository Setup

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Recruiterflow ROI Calculator v1.0.0

- Interactive ROI calculator with real-time calculations
- AI agent recommendations based on user inputs
- Competitor comparison against Bullhorn, JobAdder, spreadsheets
- Success stories with customer testimonials
- Full Recruiterflow brand identity integration
- Mobile-responsive design with dark/light mode
- Ready for WordPress iframe embedding"

# Add GitHub remote (replace 'yourusername' with actual username)
git remote add origin https://github.com/yourusername/recruiterflow-roi-calculator.git

# Create and push to main branch
git branch -M main
git push -u origin main
```

### 3. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `recruiterflow-roi-calculator`
3. Description: "Interactive ROI calculator for recruitment agencies considering Recruiterflow's AI-powered CRM"
4. Set to Public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 4. Deployment Options

#### Option A: Netlify (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

#### Option B: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Option C: GitHub Pages
Add to `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## WordPress Integration

### Basic Iframe Embed
```html
<iframe 
  src="https://your-deployed-url.netlify.app" 
  width="100%" 
  height="1200px" 
  frameborder="0"
  style="border: none; border-radius: 8px;">
</iframe>
```

### Responsive Iframe
```html
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
  <iframe 
    src="https://your-deployed-url.netlify.app"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    frameborder="0">
  </iframe>
</div>
```

## Environment Variables

For production deployment, set these environment variables:

```bash
NODE_ENV=production
DATABASE_URL=your_postgresql_url_here  # Optional
```

## File Structure After Setup

```
recruiterflow-roi-calculator/
├── README.md                 # Comprehensive documentation
├── DEPLOYMENT.md            # This file
├── package.json             # Updated with proper metadata
├── .gitignore              # Excludes dist/, node_modules
├── client/                 # React frontend
├── server/                 # Express backend
├── shared/                 # Shared types
├── dist/                  # Built assets (after npm run build)
└── attached_assets/       # Logo and brand assets
```

## Post-Deployment Checklist

- [ ] Test calculator functionality
- [ ] Verify responsive design on mobile
- [ ] Check iframe embedding in WordPress
- [ ] Test "Calculate Your ROI" scroll functionality
- [ ] Confirm all AI agents display correctly
- [ ] Validate competitor comparison logic
- [ ] Test dark/light mode switching
- [ ] Verify success stories section
- [ ] Check all form inputs and validation

## Maintenance

### Regular Updates
- Monitor form completion rates
- Update competitor comparisons as needed
- Refresh success stories with new testimonials
- Update AI agent descriptions based on product changes

### Analytics Integration
Add tracking code to `client/index.html` for lead generation insights.
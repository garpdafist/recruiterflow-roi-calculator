# Recruiterflow ROI Calculator

A React-based interactive ROI calculator that helps recruitment agencies calculate their potential return on investment with Recruiterflow's AI-powered CRM. Features dynamic calculations, AI agent recommendations, and competitor comparisons.

![Recruiterflow ROI Calculator](https://via.placeholder.com/800x400/007bff/ffffff?text=Recruiterflow+ROI+Calculator)

## ✨ Features

- **Interactive ROI Calculator**: Real-time calculations based on agency metrics
- **AI Agent Recommendations**: Smart suggestions based on current system and size
- **Competitor Comparison**: Dynamic comparisons against Bullhorn, JobAdder, and spreadsheets
- **Success Stories**: Customer testimonials with real metrics
- **Responsive Design**: Mobile-first design with dark/light mode support
- **Brand Integration**: Official Recruiterflow colors, fonts, and messaging

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/recruiterflow-roi-calculator.git
cd recruiterflow-roi-calculator

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

## 📦 Build & Deploy

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Static Hosting (Recommended)

For static hosting (Netlify, Vercel, GitHub Pages):

```bash
# Build static assets
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file for database configuration (optional):

```bash
DATABASE_URL=your_postgresql_url_here
```

### Customization

#### Brand Colors
Update colors in `client/src/index.css`:

```css
:root {
  --primary: 213 94% 68%;     /* #007bff */
  --secondary: 213 94% 32%;   /* #013f85 */
  --accent: 213 94% 52%;      /* #0a98ff */
}
```

#### Calculator Logic
Modify calculations in `client/src/lib/calculations.ts`:

```typescript
// Adjust efficiency gains by system
const efficiencyGains = {
  'Spreadsheet': 0.65,  // 65% improvement
  'JobAdder': 0.35,     // 35% improvement
  'Bullhorn': 0.25,     // 25% improvement
  'Other': 0.45         // 45% improvement
};
```

## 🌐 WordPress Integration

### Method 1: Iframe Embed (Recommended)

Add this HTML to your WordPress page/post:

```html
<iframe 
  src="https://your-domain.com" 
  width="100%" 
  height="1200px" 
  frameborder="0"
  style="border: none; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
  title="Recruiterflow ROI Calculator">
</iframe>

<script>
// Auto-resize iframe based on content
window.addEventListener('message', function(e) {
  if (e.data.type === 'resize') {
    document.querySelector('iframe').style.height = e.data.height + 'px';
  }
});
</script>
```

### Method 2: Direct Integration

For custom WordPress themes, add to your template:

```php
<?php 
// In your WordPress template file
?>
<div id="roi-calculator-container">
  <iframe 
    src="<?php echo esc_url('https://your-roi-calculator-domain.com'); ?>" 
    width="100%" 
    height="1200"
    frameborder="0"
    title="ROI Calculator">
  </iframe>
</div>

<style>
#roi-calculator-container {
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

#roi-calculator-container iframe {
  display: block;
  width: 100%;
  border: none;
}
</style>
```

### Method 3: Shortcode (Advanced)

Create a custom shortcode in your theme's `functions.php`:

```php
function recruiterflow_roi_calculator_shortcode($atts) {
    $atts = shortcode_atts(array(
        'height' => '1200',
        'width' => '100%'
    ), $atts);
    
    return '<iframe src="https://your-roi-calculator-domain.com" 
                    width="' . esc_attr($atts['width']) . '" 
                    height="' . esc_attr($atts['height']) . '" 
                    frameborder="0" 
                    title="Recruiterflow ROI Calculator">
            </iframe>';
}
add_shortcode('roi_calculator', 'recruiterflow_roi_calculator_shortcode');
```

Then use in posts/pages: `[roi_calculator height="1400"]`

## 🎯 Lead Generation Setup

### Tracking Integration

Add Google Analytics or other tracking:

```html
<!-- In client/index.html head section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Form Submissions

The calculator includes "Book Demo" buttons that can be configured to:
- Open calendar booking links (Calendly, Acuity)
- Trigger lead capture forms
- Send data to CRM systems

Modify in `client/src/components/CalculatorForm.tsx`:

```typescript
const bookDemo = () => {
  // Replace with your booking system
  window.open('https://calendly.com/your-calendar', '_blank');
  
  // Optional: Track conversion
  gtag('event', 'book_demo', {
    'event_category': 'lead_generation',
    'value': 1
  });
};
```

## 📊 Analytics & Insights

Track key metrics:
- Calculator completion rates
- Time spent on calculator
- Most common input combinations
- Demo booking conversions

## 🛠 Technical Architecture

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: @react-spring/web for smooth transitions
- **Backend**: Express.js (minimal, mainly for static serving)
- **Database**: PostgreSQL with Drizzle ORM (optional)

## 📝 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── lib/           # Utilities and calculations
│   │   ├── pages/         # Page components
│   │   └── types.ts       # TypeScript definitions
│   └── index.html
├── server/                 # Express backend
├── shared/                 # Shared types and schemas
└── dist/                  # Built assets (auto-generated)
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Recruiterflow Website](https://recruiterflow.com)
- [Documentation](https://docs.recruiterflow.com)
- [Support](mailto:support@recruiterflow.com)

## 🏷 Version

Current version: 1.0.0

Built with ❤️ for recruitment agencies looking to scale with AI.
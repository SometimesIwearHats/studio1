# Studio 1 - Static Website

A professional, responsive static website for Studio 1, a local gym in Town of Mount Royal.

## Project Overview

Studio 1 is a clean, modern website designed to attract members to a local gym. The site emphasizes the gym's convenient location on Canora beside the Town of Mount Royal train station and encourages visitors to come see the gym in person.

**Key Messaging:** Members are encouraged to visit in person to meet with a sales representative and find the right membership plan for their needs. Pricing is discussed in-person only.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Mobile-first responsive design with CSS variables
- **JavaScript** - Component loading, mobile navigation, announcements
- **No frameworks** - Pure HTML, CSS, and JavaScript

## Folder Structure

```
studio1/
├── index.html                 # Home page
├── gallery.html              # Gallery / Virtual tour page
├── equipment.html            # Equipment catalogue page
│
├── components/
│   ├── navbar.html           # Navigation bar (shared component)
│   └── footer.html           # Footer (shared component)
│
├── css/
│   └── styles.css            # All styling (mobile-first approach)
│
├── js/
│   ├── main.js               # Core functionality (component loading, nav toggle)
│   └── announcements.js      # Announcement bar configuration
│
├── assets/
│   ├── logos/                # Logo files (replace with Studio 1 branding)
│   └── images/
│       ├── hero/             # Hero section images
│       ├── gallery/          # Gallery images
│       └── equipment/        # Equipment photos
│
└── README.md                 # This file
```

## Features

### Pages

1. **Home Page (index.html)**
   - Announcement bar
   - Hero section with call-to-action buttons
   - About Studio 1 section
   - Gym features (cards)
   - Membership pitch section
   - Gallery preview
   - Equipment preview
   - Location & hours section

2. **Gallery Page (gallery.html)**
   - Virtual tour organized by categories
   - Entrance, reception, training floor, free weights, machines, cardio, amenities
   - Responsive image grid
   - Call-to-action to visit

3. **Equipment Page (equipment.html)**
   - Equipment catalogue organized by category
   - Cardio equipment, free weights, strength machines, benches & racks, functional training
   - Each equipment has: name, category, description, "best for" label
   - Responsive cards layout

### Shared Components

- **Navbar** - Sticky navigation with mobile toggle
  - Logo/brand
  - Links: Home, Gallery, Equipment, Location
  - Instagram link placeholder
  - Phone number placeholder
  - "Visit Us" button
  
- **Footer** - Appears on all pages
  - Brand info
  - Contact info (phone, email, address)
  - Hours of operation
  - Social links
  - Google Maps directions link
  - Copyright

### Dynamic Loading

JavaScript automatically loads the navbar and footer components from the `components/` folder. This allows you to update navigation and footer across all pages by editing one file.

### Announcement Bar

The announcement bar at the top of each page is controlled by `js/announcements.js`. Update the `ANNOUNCEMENTS` array to change what displays.

Example:
```javascript
const ANNOUNCEMENTS = [
    {
        text: "Holiday Hours: Studio 1 will be closed on select holidays. Please check back for updates.",
        isActive: true,
        type: "info"
    }
];
```

Set `isActive: false` to hide an announcement.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code with Live Server extension (recommended)

### Running Locally

#### Option 1: Using VS Code Live Server (Recommended)

1. Open the `studio1` folder in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The website will open at `http://localhost:5500` (or similar)

#### Option 2: Using Python

If you have Python installed:

```bash
cd /path/to/studio1
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

#### Option 3: Direct File Opening

Simply double-click `index.html` to open it in your browser. 

**Note:** Component loading (navbar/footer) works best with a local server due to CORS restrictions. File protocol may not load components properly.

## Customization Guide

### Updating Announcements

Edit `js/announcements.js`:

```javascript
const ANNOUNCEMENTS = [
    {
        text: "Your announcement text here",
        isActive: true,
        type: "info"  // or "warning", "success"
    }
];
```

### Replacing Placeholder Images

1. **Logos:** Add your Studio 1 logo files to `assets/logos/`
2. **Hero images:** Add to `assets/images/hero/`
3. **Gallery images:** Add to `assets/images/gallery/`
4. **Equipment photos:** Add to `assets/images/equipment/`

Then update the HTML to reference your images:

```html
<img src="assets/logos/studio1-logo.png" alt="Studio 1 Logo">
```

### Updating Contact Information

Replace placeholder contact details in:

1. **Navigation:** `components/navbar.html`
   - Phone number in link: `href="tel:+1234567890"`
   - Instagram link: `href="https://www.instagram.com"`

2. **Footer:** `components/footer.html`
   - Address
   - Phone number and link
   - Email and link
   - Hours of operation
   - Instagram link
   - Google Maps link

3. **Home page location section:** `index.html` (search for "Location & Hours")

### Updating Colors & Branding

All colors are defined as CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #1a1a1a;      /* Dark background */
    --secondary-color: #ff6b35;    /* Orange accent */
    --accent-color: #f7931e;       /* Lighter orange */
    /* ... more variables ... */
}
```

Update these values to match your brand colors. All elements will automatically use the new colors.

### Responsive Design

The website is mobile-first responsive:
- **Mobile:** 480px and below
- **Tablet:** 481px to 768px
- **Desktop:** 769px and above

Test responsiveness by resizing your browser or using device emulation (F12 in most browsers).

## Content to Update

### Essential (Before Launch)

- [ ] Replace all `(123) 456-7890` phone numbers with actual Studio 1 phone number
- [ ] Replace all `info@studio1gym.com` email addresses
- [ ] Update address in multiple places (navbar, footer, location section, maps)
- [ ] Update hours of operation in footer
- [ ] Replace Instagram link (`https://www.instagram.com`) with actual Studio 1 Instagram
- [ ] Update Google Maps link with actual location coordinates
- [ ] Add Studio 1 logo images
- [ ] Update announcement in `js/announcements.js`

### Important (After Launch)

- [ ] Add actual photos of the gym to galleries
- [ ] Replace placeholder images with real equipment photos
- [ ] Add Google Maps embed (replace placeholder div)
- [ ] Consider adding testimonials or member reviews
- [ ] Set up analytics (Google Analytics, Plausible, etc.)

## Mobile Navigation

The navbar includes a hamburger menu for mobile devices. It:
- Toggles when users click the hamburger icon
- Automatically closes when a link is clicked
- Includes keyboard accessibility (`aria-expanded` attribute)
- Smooth transitions and animations

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states visible on all interactive elements
- Color contrast meets WCAG standards
- Alt text placeholders for all images
- Descriptive link text

## Performance Tips

1. **Optimize Images:**
   - Compress images before uploading (use TinyPNG, ImageOptim, etc.)
   - Use modern formats (WebP for better compression)
   - Ensure images are the right size for their display

2. **Browser Caching:**
   - Set cache headers on your server for CSS and JS files
   - This improves repeat visit performance

3. **Minification:**
   - Consider minifying CSS and JavaScript for production
   - Use online tools or build processes

## Browser Compatibility

The site works in all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements (Consider Later)

- Class schedule integration
- Member testimonials section
- Blog/news section
- Online booking for gym tours
- Google Maps embed integration
- Email signup for newsletters
- Photo carousel with auto-rotation
- Trainer profiles section

## File Size & Performance

- CSS: ~25 KB
- JavaScript: ~3 KB (combined)
- HTML pages: 8-15 KB each
- **Total site size without images:** ~50 KB

This is a lightweight site that loads quickly.

## Troubleshooting

### Components Not Loading

If navbar and footer don't appear:
1. Make sure you're running the site through a local server (not opening `index.html` directly)
2. Check browser console (F12) for error messages
3. Verify file paths in `js/main.js` match your folder structure

### Mobile Menu Not Working

1. Clear browser cache
2. Hard refresh page (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser console for JavaScript errors

### Images Not Showing

1. Verify image file paths are correct
2. Check that image files exist in `assets/` folder
3. Ensure image file names match exactly (case-sensitive)

## Git Workflow

After making changes:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

Initial commit suggestion:
```
git commit -m "Initial Studio 1 static website structure"
```

## Support & Maintenance

- Keep image files optimized for web
- Regularly update content and announcements
- Test on multiple devices before publishing changes
- Backup important files regularly

## License

This website is proprietary to Studio 1. All content and design are the property of Studio 1.

---

**Last Updated:** May 11, 2026
**Version:** 1.0

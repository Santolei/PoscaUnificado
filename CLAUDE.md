# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multi-site law firm website project for "Estudio Posca" with two location-specific sites:
- **merlo-san-luis**: Law firm site for Merlo, San Luis
- **villa-dolores**: Law firm site for Villa Dolores, Córdoba

Both sites share the same design template and structure but have location-specific content (phone numbers, addresses, Google Maps, contact emails, etc.).

## Development Environment

This project runs on a local XAMPP server:
- **Server**: Apache with PHP support
- **Root directory**: `C:\xampp\htdocs\PoscaUnificado`
- **Access URLs**:
  - Merlo site: `http://localhost/PoscaUnificado/merlo-san-luis/`
  - Villa Dolores site: `http://localhost/PoscaUnificado/villa-dolores/`

## Architecture

### Directory Structure

Each location directory (`merlo-san-luis/` and `villa-dolores/`) is a complete standalone site with:
- `index.html` - Main HTML file (single-page application)
- `css/` - Stylesheets (Bootstrap, plugins, custom styles)
- `js/` - JavaScript libraries and custom scripts
- `img/` - Images, logos, backgrounds
- `fonts/` - Font files
- `send.php` - Contact form email handler
- `whatsappcontact.php` - WhatsApp redirect handler (mobile/desktop detection)

### Key Technologies

- **Frontend**: HTML5, CSS3, JavaScript (jQuery 3.0.0)
- **CSS Framework**: Bootstrap 4
- **JavaScript Libraries**:
  - jQuery plugins: owl.carousel, magnific-popup, waypoints, scrollIt
  - AOS.js for scroll animations
  - isotope.pkgd for gallery filtering
- **Backend**: PHP (for contact forms)
- **Analytics**: Google Analytics, Google Ads, Facebook Pixel

### Site Structure (Single-Page Application)

Both sites use a single-page layout with scroll navigation:
1. **Header/Hero** (data-scroll-index="0") - Services overview
2. **Nosotros** (data-scroll-index="1") - About section with Mission/Vision
3. **Servicios** (data-scroll-index="3") - Three service cards with modals
4. **Ubicación** - Google Maps embed
5. **Contacto** (data-scroll-index="6") - Contact form and information

## Location-Specific Configuration

When making changes, be aware these values differ between sites:

### Merlo San Luis
- Phone: 2664299739
- Email: contacto@estudioposcamerlosl.com.ar
- Address: Güemes N° 486 (Esquina Los Almendros), local 3, Villa de Merlo
- Google Maps: Embedded iframe for Merlo location

### Villa Dolores
- Phone: 3544301702
- Email: contacto@estudioposcavilladolores.ar
- Address: 25 de mayo N°60, Villa Dolores, Córdoba
- Google Maps: Embedded iframe for Villa Dolores location

## Contact Form System

Contact forms use AJAX submission to avoid page reload:
- Form ID: `#contacto`
- Handler: `send.php` in each site directory
- Anti-bot field: Hidden `email2` field (honeypot technique)
- States: `#campos` (form), `#enviando` (sending), `#enviado` (success), `#error` (failure)
- Validation: Client-side via scripts.js, Server-side via send.php

**Important**: The `send.php` file contains hardcoded email addresses and must be updated if site locations change.

## WhatsApp Integration

The `whatsappcontact.php` file handles device detection:
- Mobile devices → `https://api.whatsapp.com/send?phone=...`
- Desktop devices → `https://web.whatsapp.com/send?phone=...`
- Phone numbers are hardcoded and location-specific

## Common Development Tasks

### Testing the Sites Locally
1. Ensure XAMPP Apache is running
2. Navigate to `http://localhost/PoscaUnificado/merlo-san-luis/` or `http://localhost/PoscaUnificado/villa-dolores/`
3. No build process required - direct file serving

### Making Content Changes
- Edit `index.html` in the respective site directory
- Changes are reflected immediately on page refresh

### Modifying Styles
- Custom styles: Edit `css/style.css` in the respective site directory
- Plugin styles: Located in `css/plugins/` and `css/plugins.css`

### JavaScript Modifications
- Custom scripts: Edit `js/scripts.js`
- Libraries are loaded from `js/` directory (no CDN dependencies)

### Adding/Changing Images
- Place images in `img/` directory of respective site
- Update references in `index.html`
- Consider image formats: .jpg, .webp variants available for some images

### Contact Form Email Destination
- Edit the `$para` variable in `send.php` (currently lines 42-43 in merlo-san-luis version)

## Important Notes

- Both sites are **completely independent** - changes to one do not affect the other
- No shared code between sites (duplicated structure)
- No build tools or package managers (no npm, webpack, etc.)
- No version control detected (not a git repository)
- Scripts load synchronously - maintain load order in HTML
- Google Analytics tracking ID is shared: UA-118038759-4
- Facebook Pixel shared: 1346759352158809
- Sites are in Spanish language (lang="ES")

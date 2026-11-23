# Portfolio Website

A responsive personal portfolio website that showcases my skills, projects, resume and contact details.

**Live demo:** https://preet-singh-dev.github.io/Portfolio-Website/

## About

I am Preet Singh, a Junior Full Stack Developer (PHP, Laravel, React.js, MySQL). I built this website to present my work in one place and make it easy for recruiters and clients to get in touch.

## Features

- Responsive layout that works on mobile and desktop
- Sections for about me, skills, projects and contact
- Downloadable resume
- Contact form with PHP and MySQL backend (works when run locally, see note below)
- Smooth interactions using JavaScript

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap
- **Backend:** PHP
- **Database:** MySQL

## Project Structure

```
Portfolio-Website/
├── images/          # Images used on the website
├── resume/          # Resume file
├── contact.php      # Handles the contact form
├── database.sql     # Database structure for the contact form
├── index.html       # Main page
├── script.js        # JavaScript
└── style.css        # Styling
```

## Run Locally

1. Install [XAMPP](https://www.apachefriends.org/) (or any PHP + MySQL setup).
2. Clone the repository into the `htdocs` folder:
   ```bash
   git clone https://github.com/preet-singh-dev/Portfolio-Website.git
   ```
3. Start **Apache** and **MySQL** from the XAMPP control panel.
4. Open phpMyAdmin and import `database.sql`.
5. If needed, update the database details in `contact.php`.
6. Open `http://localhost/Portfolio-Website/` in your browser.

## Note

The live demo is hosted on GitHub Pages, which does not run PHP. The design and all static sections work online, but the contact form needs a PHP server, so it only works when run locally. To reach me, please use the contact details below.

## Contact

- Email: 08preetsingh@gmail.com
- LinkedIn: https://www.linkedin.com/in/preet-singh-5bb232261
- GitHub: https://github.com/preet-singh-dev

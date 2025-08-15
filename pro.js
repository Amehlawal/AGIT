// Course data
const courses = [
    {
        title: "Full-Stack Web Development",
        description: "Master React, Node.js, and modern web technologies",
        duration: "12 weeks",
        
        rating: 4.9,
        gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)"
    },
    {
        title: "Data Science & AI",
        description: "Learn Python, Machine Learning, and Data Analysis",
        duration: "16 weeks",
        
        rating: 4.8,
        gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)"
    },
    {
        title: "Digital Marketing Mastery",
        description: "SEO, Social Media, and Growth Hacking strategies",
        duration: "8 weeks",
        
        rating: 4.9,
        gradient: "linear-gradient(135deg, #10b981, #14b8a6)"
    },
    {
        title: "UI/UX Design Pro",
        description: "Design thinking, Figma, and user experience principles",
        duration: "10 weeks",
        
        rating: 4.7,
        gradient: "linear-gradient(135deg, #f59e0b, #ef4444)"
    },
    {
        title: "Cloud Computing AWS",
        description: "Master AWS services and cloud architecture",
        duration: "14 weeks",
        
        rating: 4.8,
        gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)"
    },
    {
        title: "Mobile App Development",
        description: "Build iOS and Android apps with React Native",
        duration: "12 weeks",
        students: "1,900+",
        rating: 4.6,
        gradient: "linear-gradient(135deg, #ec4899, #f43f5e)"
    }
];

// Team data
const team = [
   
    {
        name: "Emily Rodriguez",
        role: "UX Design Expert",
        company: "Ex-Apple",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        skills: ["Figma", "Design Systems", "Research"]
    }
];

// Testimonials data
const testimonials = [
    {
        name: "Osinachi",
        role: "Software Engineer at Netflix",
        content: "AGIT Full-Stack course completely changed my career trajectory. The hands-on projects and expert mentorship helped me land my dream job at Netflix!",
        rating: 5,
        image: "./images/students/osinachi.jpg"
    },
   
];

// Clientele data
const clients = [
    {
        name: "Sokoto State Government",
        industry: "Technology",
        logo: "./images/clients/states-sokoto.png",
        satisfaction: "98%"
    }
 
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeAnimations();
    populateCourses();
    populateTeam();
    populateTestimonials();
    populateClients();
    initializeCounters();
    initializeSmoothScrolling();
    initializeContactForm();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.9)';
                header.style.boxShadow = 'none';
            }
        }
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Populate courses
function populateCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    
    if (coursesGrid) {
        courses.forEach(course => {
            const courseCard = createCourseCard(course);
            coursesGrid.appendChild(courseCard);
        });
    }
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card fade-in-up';
    
    card.innerHTML = `
        <div class="course-image" style="background: ${course.gradient}">
            <i class="fas fa-book-open"></i>
        </div>
        <h3 class="course-title">${course.title}</h3>
        <p class="course-description">${course.description}</p>
        <div class="course-meta">
            <span>⏱️ ${course.duration}</span>
        </div>
        <div class="course-rating">
            ${generateStars(course.rating)}
            <span>${course.rating}</span>
        </div>
    `;
    
    return card;
}

// Populate team
function populateTeam() {
    const teamGrid = document.getElementById('teamGrid');
    
    if (teamGrid) {
        team.forEach(member => {
            const teamCard = createTeamCard(member);
            teamGrid.appendChild(teamCard);
        });
    }
}

function createTeamCard(member) {
    const card = document.createElement('div');
    card.className = 'team-card fade-in-up';
    
    card.innerHTML = `
        <div class="team-avatar">
            <img src="${member.image}" alt="${member.name}" />
        </div>
        <h3 class="team-name">${member.name}</h3>
        <p class="team-role">${member.role}</p>
        <span class="team-company">${member.company}</span>
        <div class="team-skills">
            ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    `;
    
    return card;
}

// Populate testimonials
function populateTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    
    if (testimonialsGrid) {
        testimonials.forEach(testimonial => {
            const testimonialCard = createTestimonialCard(testimonial);
            testimonialsGrid.appendChild(testimonialCard);
        });
    }
}

function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card fade-in-up';
    
    card.innerHTML = `
        <div class="testimonial-header">
            <div class="testimonial-avatar">
                <img src="${testimonial.image}" alt="${testimonial.name}" />
            </div>
            <div class="testimonial-info">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.role}</p>
            </div>
        </div>
        <div class="testimonial-rating">
            ${generateStars(testimonial.rating)}
        </div>
        <p class="testimonial-content">"${testimonial.content}"</p>
    `;
    
    return card;
}

// Populate clients function
function populateClients() {
    const clienteleGrid = document.getElementById('clienteleGrid');
    
    if (clienteleGrid) {
        clients.forEach((client, index) => {
            const clientCard = createClientCard(client, index);
            clienteleGrid.appendChild(clientCard);
        });
    }
}

function createClientCard(client, index) {
    const card = document.createElement('div');
    card.className = 'client-card fade-in-up';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Check if logo is an image path or icon class
  const logoContent = `<img src="${client.logo}" 
    alt="Logo for ${client.name} in the ${client.industry} sector" 
    style="width: 60px; height: 40px; object-fit: contain;"/>`;

    card.innerHTML = `
        <div class="client-logo">
            ${logoContent}
        </div>
        <h3 class="client-name">${client.name}</h3>
        <p class="client-industry">${client.industry}</p>
        <div class="client-stats">
            <div class="client-stat">
                <span class="client-stat-number">${client.satisfaction}</span>
                <span class="client-stat-label">Satisfied</span>
            </div>
        </div>
    `;
    
    return card;
}


// function createClientCard(client, index) {
//     const card = document.createElement('div');
//     card.className = 'client-card fade-in-up';
//     card.style.animationDelay = `${index * 0.1}s`;
    
//     card.innerHTML = `
//         <div class="client-logo">
//             <img src="${client.logo}" alt="${client.name} Logo" />
//         </div>
//         <h3 class="client-name">${client.name}</h3>
//         <p class="client-industry">${client.industry}</p>
//         <div class="client-stats">
//             <div class="client-stat">
//                 <span class="client-stat-number">${client.employees}</span>
//                 <span class="client-stat-label">Employees</span>
//             </div>
//             <div class="client-stat">
//                 <span class="client-stat-number">${client.courses}</span>
//                 <span class="client-stat-label">Courses</span>
//             </div>
//             <div class="client-stat">
//                 <span class="client-stat-number">${client.satisfaction}</span>
//                 <span class="client-stat-label">Satisfied</span>
//             </div>
//         </div>
//     `;
    
//     return card;
// }

// Generate star ratings
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star star"></i>';
        } else {
            stars += '<i class="far fa-star star"></i>';
        }
    }
    return stars;
}

// Counter animation
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (target >= 1000) {
            element.textContent = (current / 1000).toFixed(0) + 'K+';
        } else {
            element.textContent = Math.floor(current) + (target === 95 ? '%' : '+');
        }
    }, 16);
}

// Scroll animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in-up class
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                contactForm.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Button click handlers
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn') || e.target.closest('.btn')) {
        const button = e.target.matches('.btn') ? e.target : e.target.closest('.btn');
        
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        
        // Handle different button actions
        if (button.textContent.includes('Enroll Now')) {
            showEnrollmentModal();
        } else if (button.textContent.includes('Get Started') || button.textContent.includes('Start Learning')) {
            scrollToSection('#courses');
        } else if (button.textContent.includes('Watch Demo')) {
            showDemoModal();
        }
    }
});

function showEnrollmentModal() {
    alert('Enrollment feature coming soon! Contact us for early access.');
}

function showDemoModal() {
    alert('Demo video coming soon! Check back later.');
}

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        const speed = scrolled * 0.5;
        heroImage.style.transform = `translateY(${speed}px)`;
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero .badge, .hero-title, .hero-description, .hero-buttons, .hero-stats');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Initialize hero animations
document.addEventListener('DOMContentLoaded', function() {
    const heroElements = document.querySelectorAll('.hero .badge, .hero-title, .hero-description, .hero-buttons, .hero-stats');
    heroElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});
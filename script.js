// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Events Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const eventCards = document.querySelectorAll('.event-card');
const noticeCards = document.querySelectorAll('.notice-card');

// Event filtering
if (filterButtons.length > 0 && eventCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            eventCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Notice filtering
const noticeFilterButtons = document.querySelectorAll('.notice-filter .filter-btn');
if (noticeFilterButtons.length > 0 && noticeCards.length > 0) {
    noticeFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            noticeFilterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            noticeCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Event Detail Page Functionality
function loadEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    
    if (!eventId) return;
    
    // Event data (in a real application, this would come from an API)
    const events = {
        '1': {
            title: 'RoboWar Championship',
            badge: 'Competition',
            date: 'March 15, 2024',
            time: '9:00 AM - 6:00 PM',
            location: 'Main Auditorium',
            participants: '50+ Participants',
            description: 'Battle of the bots! Join our annual robotics combat competition where teams design and build fighting robots. This exciting event brings together the best robotics enthusiasts to showcase their engineering skills and creativity in an intense battle arena.',
            highlights: [
                'Intense robot combat matches',
                'Innovative design awards',
                'Technical workshops',
                'Networking opportunities',
                'Prize distribution ceremony'
            ],
            gallery: [
                'Event Image 1',
                'Event Image 2',
                'Event Image 3',
                'Event Image 4',
                'Event Image 5',
                'Event Image 6'
            ]
        },
        '2': {
            title: 'AI & Machine Learning Workshop',
            badge: 'Workshop',
            date: 'March 22, 2024',
            time: '10:00 AM - 4:00 PM',
            location: 'Computer Lab 1',
            participants: '30 Participants',
            description: 'Learn the fundamentals of artificial intelligence and machine learning with hands-on projects. This comprehensive workshop covers neural networks, deep learning, and practical applications in robotics.',
            highlights: [
                'Hands-on coding sessions',
                'Real-world AI applications',
                'Expert mentorship',
                'Project-based learning',
                'Certification upon completion'
            ],
            gallery: [
                'Workshop Image 1',
                'Workshop Image 2',
                'Workshop Image 3',
                'Workshop Image 4'
            ]
        },
        '3': {
            title: 'Future of Robotics Technology',
            badge: 'Seminar',
            date: 'March 28, 2024',
            time: '2:00 PM - 5:00 PM',
            location: 'Conference Hall',
            participants: '200+ Attendees',
            description: 'Industry experts discuss the latest trends and future prospects in robotics and automation. Learn about emerging technologies, market opportunities, and career paths in robotics.',
            highlights: [
                'Industry expert presentations',
                'Panel discussions',
                'Q&A sessions',
                'Networking opportunities',
                'Career guidance'
            ],
            gallery: [
                'Seminar Image 1',
                'Seminar Image 2',
                'Seminar Image 3'
            ]
        },
        '4': {
            title: 'Innovation Showcase',
            badge: 'Exhibition',
            date: 'April 5, 2024',
            time: '10:00 AM - 6:00 PM',
            location: 'Exhibition Hall',
            participants: '100+ Projects',
            description: 'Display your innovative projects and prototypes to the community and industry professionals. This exhibition provides a platform to showcase creativity and technical expertise.',
            highlights: [
                'Project demonstrations',
                'Industry judging',
                'Public voting',
                'Awards ceremony',
                'Media coverage'
            ],
            gallery: [
                'Exhibition Image 1',
                'Exhibition Image 2',
                'Exhibition Image 3',
                'Exhibition Image 4',
                'Exhibition Image 5'
            ]
        },
        '5': {
            title: 'Drone Building & Programming',
            badge: 'Workshop',
            date: 'April 12, 2024',
            time: '9:00 AM - 5:00 PM',
            location: 'Robotics Lab',
            participants: '25 Participants',
            description: 'Build and program your own drone from scratch. Learn about flight dynamics, autonomous navigation, and safety protocols. Each participant will take home their custom-built drone.',
            highlights: [
                'Complete drone assembly',
                'Flight control programming',
                'Safety training',
                'Test flights',
                'Take home your drone'
            ],
            gallery: [
                'Drone Workshop Image 1',
                'Drone Workshop Image 2',
                'Drone Workshop Image 3'
            ]
        },
        '6': {
            title: 'Robotics Hackathon',
            badge: 'Competition',
            date: 'April 20, 2024',
            time: '48 Hours',
            location: 'Computer Labs',
            participants: '15 Teams',
            description: '48-hour coding marathon to build innovative robotics solutions for real-world problems. Teams will work on challenging problems and present their solutions to industry judges.',
            highlights: [
                '48-hour development sprint',
                'Real-world problem solving',
                'Industry mentorship',
                'Pitch presentations',
                'Cash prizes'
            ],
            gallery: [
                'Hackathon Image 1',
                'Hackathon Image 2',
                'Hackathon Image 3',
                'Hackathon Image 4'
            ]
        }
    };
    
    const event = events[eventId];
    if (!event) return;
    
    // Update page content
    document.getElementById('event-badge').textContent = event.badge;
    document.getElementById('event-title').textContent = event.title;
    document.getElementById('event-date').textContent = event.date;
    document.getElementById('event-time').textContent = event.time;
    document.getElementById('event-location').textContent = event.location;
    document.getElementById('event-participants').textContent = event.participants;
    document.getElementById('event-description').textContent = event.description;
    
    // Update highlights
    const highlightsList = document.getElementById('event-highlights');
    if (highlightsList) {
        highlightsList.innerHTML = '';
        event.highlights.forEach(highlight => {
            const li = document.createElement('li');
            li.textContent = highlight;
            highlightsList.appendChild(li);
        });
    }
    
    // Update gallery
    const gallery = document.getElementById('event-gallery');
    if (gallery) {
        gallery.innerHTML = '';
        event.gallery.forEach((imageName, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <div class="image-placeholder">
                    <i class="fas fa-image"></i>
                    <span>${imageName}</span>
                </div>
            `;
            gallery.appendChild(galleryItem);
        });
    }
}

// Load event details if on event detail page
if (window.location.pathname.includes('event-detail.html')) {
    loadEventDetails();
}

// Team Member Social Links
document.querySelectorAll('.team-social .social-link, .faculty-social .social-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.getAttribute('data-platform');
        const memberName = link.closest('.team-card, .faculty-info').querySelector('h3, h2').textContent;
        
        // In a real application, you would have actual social media links
        alert(`${memberName}'s ${platform} profile will open here.`);
    });
});

// Contact Form Functionality (if you add a form later)
function handleContactForm(event) {
    event.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.achievement-card, .equipment-card, .project-card, .team-card, .notice-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.achievement-card, .equipment-card, .project-card, .team-card, .notice-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 100;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.purpose-stats');
if (statsSection) {
    observer.observe(statsSection);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .fade-in {
        animation: fadeIn 0.5s ease-in;
    }
`;
document.head.appendChild(style);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Image placeholder hover effects
document.querySelectorAll('.image-placeholder').forEach(placeholder => {
    placeholder.addEventListener('mouseenter', () => {
        placeholder.style.borderColor = 'var(--accent-color)';
        placeholder.style.background = 'rgba(255, 51, 102, 0.1)';
    });
    
    placeholder.addEventListener('mouseleave', () => {
        placeholder.style.borderColor = 'var(--primary-color)';
        placeholder.style.background = 'var(--dark-tertiary)';
    });
});

// Button click animations
document.querySelectorAll('.btn, .event-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn, .event-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Techinnovate website loaded successfully!');
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

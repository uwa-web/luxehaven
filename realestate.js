
        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const fullscreenMenu = document.getElementById('fullscreenMenu');

        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            fullscreenMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const menuLinks = document.querySelectorAll('.menu-content a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                fullscreenMenu.classList.remove('active');
            });
        });

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

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Header background on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(26, 26, 46, 0.98)';
            } else {
                header.style.background = 'rgba(26, 26, 46, 0.95)';
            }
        });

        // Property card hover effects
        document.querySelectorAll('.property-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        });

        // Floating contact button animation
        const floatingContact = document.querySelector('.floating-contact');
        let isFloating = false;

        function floatAnimation() {
            if (!isFloating) {
                isFloating = true;
                floatingContact.style.animation = 'float 3s ease-in-out infinite';
            }
        }

        // Add floating animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);

        // Start floating animation after page load
        window.addEventListener('load', function() {
            setTimeout(floatAnimation, 2000);
        });

        // Enhanced property card interactions
        document.querySelectorAll('.property-card').forEach(card => {
            const image = card.querySelector('.property-image');
            
            card.addEventListener('mouseenter', function() {
                image.style.transform = 'scale(1.05)';
                image.style.transition = 'transform 0.5s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                image.style.transform = 'scale(1)';
            });
        });

        // Dynamic gradient animation for hero section
        let gradientAngle = 0;
        function animateHeroGradient() {
            gradientAngle += 0.5;
            const hero = document.querySelector('.hero');
            hero.style.background = `linear-gradient(${gradientAngle}deg, var(--dark-navy) 0%, var(--charcoal) 100%)`;
            requestAnimationFrame(animateHeroGradient);
        }
        animateHeroGradient();

        // Enhanced CTA button interactions
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                button.style.background = `radial-gradient(circle at ${x}px ${y}px, #f4d03f, var(--primary-gold))`;
            });
            
            button.addEventListener('mouseleave', function() {
                button.style.background = 'var(--primary-gold)';
            });
        });

        // Testimonial auto-slider (optional enhancement)
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial');
        
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.opacity = i === index ? '1' : '0.3';
                testimonial.style.transform = i === index ? 'scale(1)' : 'scale(0.95)';
            });
        }

        // Initialize first testimonial
        if (testimonials.length > 1) {
            showTestimonial(0);
            
            // Auto-rotate testimonials every 5 seconds
            setInterval(() => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            }, 5000);
        }

        // Enhanced team member interactions
        document.querySelectorAll('.team-member').forEach(member => {
            member.addEventListener('mouseenter', function() {
                const photo = this.querySelector('.member-photo');
                photo.style.transform = 'scale(1.1) rotate(5deg)';
                photo.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.3)';
            });
            
            member.addEventListener('mouseleave', function() {
                const photo = this.querySelector('.member-photo');
                photo.style.transform = 'scale(1) rotate(0deg)';
                photo.style.boxShadow = 'none';
            });
        });

        // Feature card glow effect
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.2)';
                this.style.border = '1px solid rgba(212, 175, 55, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
                this.style.border = '1px solid var(--glass-border)';
            });
        });

        // Scroll-triggered animations with stagger effect
        const staggerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const children = entry.target.querySelectorAll('.fade-in');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 200);
                    });
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.properties-grid, .features-grid, .team-grid').forEach(grid => {
            staggerObserver.observe(grid);
        });

        // Mobile optimizations
        if (window.innerWidth <= 768) {
            // Reduce animation intensity on mobile
            document.querySelectorAll('.property-card').forEach(card => {
                card.addEventListener('touchstart', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                card.addEventListener('touchend', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        }

        // Performance optimization - throttle scroll events
        let ticking = false;
        function updateOnScroll() {
            const scrolled = window.pageYOffset;
            
            // Header background
            const header = document.querySelector('.header');
            if (scrolled > 100) {
                header.style.background = 'rgba(26, 26, 46, 0.98)';
            } else {
                header.style.background = 'rgba(26, 26, 46, 0.95)';
            }
            
            // Parallax effect
            const parallax = document.querySelector('.hero');
            const speed = scrolled * 0.3;
            parallax.style.transform = `translateY(${speed}px)`;
            
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick);

        // Loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Easter egg - double click logo for special effect
        document.querySelector('.logo').addEventListener('dblclick', function() {
            this.style.animation = 'pulse 0.5s ease';
            document.body.style.background = 'linear-gradient(45deg, var(--primary-gold), var(--dark-navy))';
            
            setTimeout(() => {
                this.style.animation = '';
                document.body.style.background = '';
            }, 2000);
        });

        // Add pulse animation
        const pulseStyle = document.createElement('style');
        pulseStyle.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
        `;
        document.head.appendChild(pulseStyle);

   
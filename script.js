let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    handleNavigation();
    handleActivityButtons();
    updateProgressBar();
    addScrollEffects();
});

// Language Switching
function initLanguageSwitcher() {
    const langSwitch = document.getElementById('langSwitch');
    const langText = document.querySelector('.lang-text');
    
    if (langSwitch) {
        langSwitch.addEventListener('click', function() {
            currentLanguage = currentLanguage === 'en' ? 'ne' : 'en';
            updateLanguage();
            langText.textContent = currentLanguage === 'en' ? 'नेपाली' : 'English';
            document.documentElement.setAttribute('lang', currentLanguage);
            document.body.setAttribute('lang', currentLanguage);
            
            const message = currentLanguage === 'en' 
                ? 'Language switched to English' 
                : 'भाषा नेपालीमा परिवर्तन भयो';
            showNotification(message);
        });
    }
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-ne]');
    
    elements.forEach(element => {
        const newText = element.getAttribute(`data-${currentLanguage}`);
        if (newText) {
            if (element.classList.contains('footer-text')) {
                element.innerHTML = newText;
            } else {
                element.textContent = newText;
            }
        }
    });
}

// Navigation
function handleNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Activity Interactions
function handleActivityButtons() {
    const activityButtons = document.querySelectorAll('.activity-button');
    
    activityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.activity-card');
            const title = card.querySelector('.activity-title').textContent;
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            showNotification(`Opening "${title}"...`);
        });
    });
    
    const challengeButton = document.querySelector('.challenge-button');
    if (challengeButton) {
        challengeButton.addEventListener('click', function() {
            showNotification('Challenge started! 🎯');
            animateProgress();
        });
    }
}

function updateProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        const targetWidth = progressFill.style.width;
        progressFill.style.width = '0%';
        
        setTimeout(() => {
            progressFill.style.width = targetWidth;
        }, 300);
    }
}

function animateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill && progressText) {
        let currentProgress = 60;
        const targetProgress = 75;
        
        const timer = setInterval(() => {
            if (currentProgress >= targetProgress) {
                clearInterval(timer);
            } else {
                currentProgress += 1;
                progressFill.style.width = currentProgress + '%';
                const completeText = currentLanguage === 'en' ? 'Complete' : 'पूरा भयो';
                progressText.textContent = currentProgress + '% ' + completeText;
            }
        }, 30);
    }
}

// Scroll Animations
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const cards = document.querySelectorAll('.stat-card, .activity-card, .achievement-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// Notification Toast
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Counter Animations
function animateStatCounters() {
    const statValues = document.querySelectorAll('.stat-value-large');
    
    statValues.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = Math.ceil(target / 50);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = current;
            }
        }, 20);
    });
}

window.addEventListener('load', function() {
    setTimeout(animateStatCounters, 200);
});

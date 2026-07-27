// Main Application Controller

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Theme Switcher
    initTheme();
    
    // 2. Initialize Hero 5-second Slider
    initSlider();
    
    // 3. Initialize Stats Counter
    initCounters();
    
    // 4. Render Initial Data
    renderPrograms();
    renderStaff('all', '');
    renderDocs('all', '');
    renderNews();
    
    // 5. Setup Event Listeners
    setupEventListeners();
});

/* ==========================================================================
   IMAGE SLIDER CONTROLLER (5 SECONDS TIMER)
   ========================================================================== */
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');
    const sliderContainer = document.querySelector('.slider-container');
    
    if (!slides.length) return;
    
    let currentIndex = 0;
    let slideInterval = null;
    const intervalTime = 5000; // 5 seconds timer
    
    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        
        currentIndex = index;
    }
    
    function nextSlide() {
        showSlide(currentIndex + 1);
    }
    
    function prevSlide() {
        showSlide(currentIndex - 1);
    }
    
    function startTimer() {
        stopTimer();
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    
    function stopTimer() {
        if (slideInterval) clearInterval(slideInterval);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startTimer();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startTimer();
        });
    }
    
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showSlide(idx);
            startTimer();
        });
    });
    
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopTimer);
        sliderContainer.addEventListener('mouseleave', startTimer);
    }
    
    startTimer();
}

/* ==========================================================================
   THEME SWITCHER
   ========================================================================== */
function initTheme() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const savedTheme = localStorage.getItem('school_theme');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        document.body.classList.remove('light-theme');
        if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            localStorage.setItem('school_theme', isLight ? 'light' : 'dark');
            themeBtn.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
        });
    }
}

/* ==========================================================================
   STATS COUNTER ANIMATION
   ========================================================================== */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCount = () => {
            current += step;
            if (current < target) {
                counter.innerText = Math.ceil(current).toLocaleString() + '+';
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target.toLocaleString() + '+';
            }
        };
        updateCount();
    });
}

/* ==========================================================================
   PROGRAMS RENDER
   ========================================================================== */
function renderPrograms() {
    const container = document.getElementById('programsGrid');
    if (!container || !window.schoolData) return;
    
    container.innerHTML = window.schoolData.programs.map(prog => `
        <div class="program-card">
            <div class="program-icon-box" style="background: ${prog.bgGradient}">
                <i class="fa-solid ${prog.icon}"></i>
            </div>
            <h3 class="program-title">${prog.title}</h3>
            <p class="program-desc">${prog.description}</p>
            <div class="program-meta">
                <span><i class="fa-regular fa-clock me-1"></i> រយៈពេល ${prog.duration}</span>
                <span><i class="fa-solid fa-user-graduate me-1"></i> ${prog.students}</span>
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   STAFF DIRECTORY RENDER & FILTER
   ========================================================================== */
let currentStaffDept = 'all';
let currentStaffSearch = '';

function renderStaff(dept = 'all', query = '') {
    const container = document.getElementById('staffGrid');
    if (!container || !window.schoolData) return;
    
    let filtered = window.schoolData.staff;
    
    if (dept !== 'all') {
        filtered = filtered.filter(s => s.dept === dept);
    }
    
    if (query.trim() !== '') {
        const q = query.toLowerCase();
        filtered = filtered.filter(s => 
            s.nameKh.toLowerCase().includes(q) || 
            s.nameEn.toLowerCase().includes(q) ||
            s.role.toLowerCase().includes(q)
        );
    }
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <i class="fa-solid fa-user-slash" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>មិនរកឃើញបុគ្គលិកដែលស្វែងរកឡើយ</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(staff => `
        <div class="staff-card">
            <img src="${staff.avatar}" alt="${staff.nameKh}" class="staff-avatar" loading="lazy">
            <h3 class="staff-name-kh">${staff.nameKh}</h3>
            <div class="staff-name-en">${staff.nameEn}</div>
            <div class="staff-role-badge">${staff.role}</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
                <i class="fa-solid fa-building me-1"></i> ${staff.deptKh}
            </p>
            <div class="staff-contact">
                <button class="btn btn-secondary btn-icon" title="ផ្ញើអ៊ីមែល" onclick="alert('អ៊ីមែល: ${staff.email}')">
                    <i class="fa-solid fa-envelope"></i>
                </button>
                <button class="btn btn-secondary btn-icon" title="ទូរស័ព្ទ" onclick="alert('លេខទូរស័ព្ទ: ${staff.phone}')">
                    <i class="fa-solid fa-phone"></i>
                </button>
                <button class="btn btn-primary" style="padding: 0.4rem 1rem; font-size: 0.85rem;" onclick="openStaffModal('${staff.id}')">
                    ជីវប្រវត្តិ
                </button>
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   LIBRARY DOCUMENTS RENDER & FILTER
   ========================================================================== */
let currentDocCat = 'all';
let currentDocSearch = '';

function renderDocs(cat = 'all', query = '') {
    const container = document.getElementById('docsGrid');
    if (!container || !window.schoolData) return;
    
    let filtered = window.schoolData.libraryDocs;
    
    if (cat !== 'all') {
        filtered = filtered.filter(d => d.category === cat);
    }
    
    if (query.trim() !== '') {
        const q = query.toLowerCase();
        filtered = filtered.filter(d => 
            d.title.toLowerCase().includes(q) || 
            d.author.toLowerCase().includes(q) ||
            d.categoryKh.toLowerCase().includes(q)
        );
    }
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <i class="fa-solid fa-book-open" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>មិនរកឃើញឯកសារដែលស្វែងរកឡើយ</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(doc => `
        <div class="doc-card">
            <div class="doc-cover-container">
                <img src="${doc.cover}" alt="${doc.title}" class="doc-cover" loading="lazy">
                <span class="doc-badge">${doc.categoryKh}</span>
            </div>
            <div class="doc-content">
                <h3 class="doc-title">${doc.title}</h3>
                <div class="doc-author"><i class="fa-solid fa-pen-nib me-1"></i> ${doc.author} (${doc.year})</div>
                <p class="doc-desc">${doc.description}</p>
                <div class="doc-meta">
                    <span><i class="fa-regular fa-file-pdf me-1"></i> ${doc.pages} ទំព័រ (${doc.fileSize})</span>
                    <span><i class="fa-regular fa-eye me-1"></i> ${doc.views}</span>
                </div>
                <div class="doc-actions">
                    <button class="btn btn-primary" style="flex: 1; font-size: 0.85rem;" onclick="openDocModal('${doc.id}')">
                        <i class="fa-solid fa-book-open"></i> អានគំរូ
                    </button>
                    <button class="btn btn-secondary" style="font-size: 0.85rem;" onclick="downloadDoc('${doc.title}')" title="ទាញយក PDF">
                        <i class="fa-solid fa-download"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   NEWS RENDER
   ========================================================================== */
function renderNews() {
    const container = document.getElementById('newsGrid');
    if (!container || !window.schoolData) return;
    
    container.innerHTML = window.schoolData.news.map(item => `
        <div class="news-card">
            <img src="${item.image}" alt="${item.title}" class="news-img" loading="lazy">
            <div class="news-body">
                <div class="news-date"><i class="fa-regular fa-calendar me-1"></i> ${item.date} • ${item.category}</div>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-summary">${item.summary}</p>
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   MODAL HANDLERS
   ========================================================================== */
function openStaffModal(id) {
    const staff = window.schoolData.staff.find(s => s.id === id);
    if (!staff) return;
    
    const modal = document.getElementById('genericModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.innerText = "ជីវប្រវត្តិបុគ្គលិក";
    modalBody.innerHTML = `
        <div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap;">
            <img src="${staff.avatar}" style="width: 110px; height: 110px; border-radius: 50%; object-fit: cover; border: 3px solid var(--accent-primary);">
            <div>
                <h2 style="font-size: 1.4rem; font-weight: 700;">${staff.nameKh}</h2>
                <div style="color: var(--text-muted); font-size: 0.95rem;">${staff.nameEn}</div>
                <div class="staff-role-badge" style="margin-top: 0.5rem;">${staff.role}</div>
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 1rem; margin-bottom: 0.5rem; color: var(--accent-primary);">អំពីបុគ្គលិក / Bio:</h4>
            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${staff.bio}</p>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 1rem; margin-bottom: 0.5rem; color: var(--accent-primary);">កម្រិតវប្បធម៌ / Qualifications:</h4>
            <ul style="padding-left: 1.25rem; color: var(--text-muted); font-size: 0.9rem;">
                ${staff.qualifications.map(q => `<li style="margin-bottom: 0.3rem;">${q}</li>`).join('')}
            </ul>
        </div>
        
        <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div style="font-size: 0.9rem;"><strong>អ៊ីមែល:</strong> ${staff.email}</div>
            <div style="font-size: 0.9rem; margin-top: 0.3rem;"><strong>ទូរស័ព្ទ:</strong> ${staff.phone}</div>
        </div>
    `;
    
    modal.classList.add('active');
}

function openDocModal(id) {
    const doc = window.schoolData.libraryDocs.find(d => d.id === id);
    if (!doc) return;
    
    const modal = document.getElementById('genericModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.innerText = "មើលគំរូឯកសារ - E-Reader";
    modalBody.innerHTML = `
        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem; display: flex; gap: 1.25rem; align-items: center;">
            <img src="${doc.cover}" style="width: 80px; height: 110px; object-fit: cover; border-radius: var(--radius-sm);">
            <div>
                <h3 style="font-size: 1.2rem; font-weight: 700;">${doc.title}</h3>
                <div style="color: var(--accent-primary); font-size: 0.9rem; margin-top: 0.2rem;"><i class="fa-solid fa-pen-nib"></i> អ្នកនិពន្ធ: ${doc.author}</div>
                <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.4rem;">
                    ប្រភេទ: ${doc.categoryKh} | ទំព័រ: ${doc.pages} | ទំហំ: ${doc.fileSize}
                </div>
            </div>
        </div>
        
        <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 0.95rem; line-height: 1.7; min-height: 250px;">
            ${doc.previewContent}
        </div>
        
        <div style="margin-top: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.85rem; color: var(--text-muted);"><i class="fa-solid fa-shield-halved"></i> ឯកសារផ្ទៀងផ្ទាត់ផ្លូវការដោយសាលា</span>
            <button class="btn btn-primary" onclick="downloadDoc('${doc.title}')">
                <i class="fa-solid fa-download"></i> ទាញយកសៀវភៅពេញ (PDF)
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

function downloadDoc(title) {
    alert(`ការទាញយកសៀវភៅ "${title}" បានចាប់ផ្តើមជាផ្លូវការ!`);
}

function closeModal() {
    const modal = document.getElementById('genericModal');
    if (modal) modal.classList.remove('active');
}

/* ==========================================================================
   EVENT LISTENERS SETUP
   ========================================================================== */
function setupEventListeners() {
    // Mobile Nav Drawer Toggle
    const mobileToggle = document.getElementById('mobileNavToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close modal on click close button or backdrop
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalOverlay = document.getElementById('genericModal');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }
    
    // Staff Category Filter Buttons
    const staffTabs = document.querySelectorAll('#staffTabs .tab-btn');
    staffTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            staffTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStaffDept = btn.getAttribute('data-dept');
            renderStaff(currentStaffDept, currentStaffSearch);
        });
    });
    
    // Staff Search Input Listener
    const staffSearchInput = document.getElementById('staffSearchInput');
    if (staffSearchInput) {
        staffSearchInput.addEventListener('input', (e) => {
            currentStaffSearch = e.target.value;
            renderStaff(currentStaffDept, currentStaffSearch);
        });
    }
    
    // Library Category Filter Buttons
    const docTabs = document.querySelectorAll('#docTabs .tab-btn');
    docTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            docTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentDocCat = btn.getAttribute('data-cat');
            renderDocs(currentDocCat, currentDocSearch);
        });
    });
    
    // Library Search Input Listener
    const docSearchInput = document.getElementById('docSearchInput');
    if (docSearchInput) {
        docSearchInput.addEventListener('input', (e) => {
            currentDocSearch = e.target.value;
            renderDocs(currentDocCat, currentDocSearch);
        });
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('សូមអរគុណ! សាររបស់អ្នកត្រូវបានផ្ញើជូនរដ្ឋបាលសាលារួចរាល់ហើយ។ យើងខ្ញុំនឹងទាក់ទងទៅវិញក្នុងពេលឆាប់ៗ។');
            contactForm.reset();
        });
    }
}

// Global functions for inline HTML calls
window.openStaffModal = openStaffModal;
window.openDocModal = openDocModal;
window.downloadDoc = downloadDoc;

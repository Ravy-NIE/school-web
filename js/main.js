// Main Application Controller

document.addEventListener('DOMContentLoaded', () => {
    // 0. Load Saved Admin Uploads
    loadSavedAdminUploads();

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
    
    // 5. Setup Event Listeners & Admin Features
    setupEventListeners();
    initAdminUpload();
    checkAdminNoticeBar();
    initIndexAdminLoginModal();
});

/* ==========================================================================
   IMAGE SLIDER CONTROLLER (5 SECONDS TIMER) & DYNAMIC RENDER
   ========================================================================== */
function renderSlides() {
    const wrapper = document.getElementById('sliderWrapper');
    const dotsContainer = document.getElementById('sliderDots');
    if (!wrapper || !window.schoolData || !window.schoolData.slides) return;
    
    const slidesData = window.schoolData.slides;
    const fallbackSlideImg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'><rect width='100%25' height='100%25' fill='%230f172a'/><text x='50%25' y='50%25' fill='%233b82f6' font-size='32' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif'>វិទ្យាល័យ ឧដុង្គ បច្ចេកវិទ្យា និងវិទ្យាសាស្ត្រ</text></svg>";

    wrapper.innerHTML = slidesData.map((slide, index) => `
        <div class="slide ${index === 0 ? 'active' : ''}">
            <img src="${slide.image}" alt="${slide.title}" loading="lazy" onerror="this.onerror=null; this.src='${fallbackSlideImg}';">
            <div class="slide-caption">
                <span class="slide-badge"><i class="fa-solid ${slide.icon || 'fa-school'}"></i> ${slide.badge}</span>
                <h2>${slide.title}</h2>
                <p>${slide.caption}</p>
            </div>
        </div>
    `).join('');

    if (dotsContainer) {
        dotsContainer.innerHTML = slidesData.map((_, index) => `
            <span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
        `).join('');
    }
}

function initSlider() {
    renderSlides();

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
        
        if (slides[index]) slides[index].classList.add('active');
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
        nextBtn.onclick = () => {
            nextSlide();
            startTimer();
        };
    }
    
    if (prevBtn) {
        prevBtn.onclick = () => {
            prevSlide();
            startTimer();
        };
    }
    
    dots.forEach((dot, idx) => {
        dot.onclick = () => {
            showSlide(idx);
            startTimer();
        };
    });
    
    if (sliderContainer) {
        sliderContainer.onmouseenter = stopTimer;
        sliderContainer.onmouseleave = startTimer;
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
let currentTeacherSubject = 'all';

function renderStaff(dept = 'all', query = '', subject = 'all') {
    const container = document.getElementById('staffGrid');
    if (!container || !window.schoolData) return;
    
    let filtered = window.schoolData.staff;
    
    if (dept !== 'all') {
        filtered = filtered.filter(s => s.dept === dept);
    }
    
    if (dept === 'teaching' && subject !== 'all') {
        filtered = filtered.filter(s => s.role.includes(subject));
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
    
    const fallbackSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24'><rect width='100%25' height='100%25' fill='%231e293b'/><circle cx='12' cy='9' r='4' fill='%233b82f6'/><path d='M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6' stroke='%233b82f6' stroke-width='2' fill='none'/></svg>";
    
    container.innerHTML = filtered.map(staff => `
        <div class="staff-card">
            <img src="${staff.avatar}" alt="${staff.nameKh}" class="staff-avatar" loading="lazy" onerror="this.onerror=null; this.src='${fallbackSvg}';">
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
   NEWS RENDER, FILTER, MODAL & DELETE CONTROLLER
   ========================================================================== */
let currentNewsCat = 'all';
let currentNewsSearch = '';

function deleteNewsItem(id, event) {
    if (event) event.stopPropagation(); // Prevent opening modal when clicking delete button
    
    const item = window.schoolData.news.find(n => n.id === id);
    const title = item ? item.title : 'ព័ត៌មាននេះ';
    
    if (confirm(`តើអ្នកពិតជាចង់លុប "${title}" នេះចេញពីប្រព័ន្ធមែនទេ?`)) {
        // Remove from memory
        window.schoolData.news = window.schoolData.news.filter(n => n.id !== id);

        // Remove from localStorage if saved
        try {
            const saved = JSON.parse(localStorage.getItem('admin_uploaded_news') || '[]');
            const updatedSaved = saved.filter(n => n.id !== id);
            localStorage.setItem('admin_uploaded_news', JSON.stringify(updatedSaved));

            // Also add to admin_deleted_news list so default items are hidden
            const deleted = JSON.parse(localStorage.getItem('admin_deleted_news') || '[]');
            if (!deleted.includes(id)) {
                deleted.push(id);
                localStorage.setItem('admin_deleted_news', JSON.stringify(deleted));
            }
        } catch (e) {
            console.error("Error updating localStorage after deleting news:", e);
        }

        // Re-render news grid
        renderNews(currentNewsCat, currentNewsSearch);

        // Show Toast Notification
        showToast(`បានលុបព័ត៌មាន "${title}" ដោយជោគជ័យ!`, 'info');
    }
}

function renderNews(cat = 'all', query = '') {
    const container = document.getElementById('newsGrid');
    if (!container || !window.schoolData) return;
    
    let filtered = window.schoolData.news;
    
    if (cat !== 'all') {
        filtered = filtered.filter(n => n.category === cat);
    }
    
    if (query.trim() !== '') {
        const q = query.toLowerCase();
        filtered = filtered.filter(n => 
            n.title.toLowerCase().includes(q) || 
            n.summary.toLowerCase().includes(q) ||
            n.category.toLowerCase().includes(q)
        );
    }
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <i class="fa-solid fa-newspaper" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>មិនរកឃើញព័ត៌មាន ឬសកម្មភាពដែលស្វែងរកឡើយ</p>
            </div>
        `;
        return;
    }
    
    const isAdmin = sessionStorage.getItem('admin_authenticated') === 'true' || localStorage.getItem('admin_authenticated') === 'true';

    container.innerHTML = filtered.map(item => `
        <div class="news-card" onclick="openNewsModal('${item.id}')" style="cursor: pointer;">
            <div style="position: relative; overflow: hidden; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
                <img src="${item.image}" alt="${item.title}" class="news-img" loading="lazy" onerror="handleImageError(this, 'news')">
                <span style="position: absolute; top: 1rem; left: 1rem; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.15); color: #38bdf8; font-size: 0.78rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: var(--radius-full); box-shadow: 0 4px 10px rgba(0,0,0,0.25);">
                    ${item.category}
                </span>
                ${isAdmin ? `
                <!-- ADMIN ACTION BUTTONS: EDIT & DELETE (SHOWN ONLY TO LOGGED IN ADMIN) -->
                <div style="position: absolute; top: 0.85rem; right: 0.85rem; display: flex; gap: 0.4rem; z-index: 10;">
                    <button type="button" class="news-edit-btn" onclick="openEditNewsModal('${item.id}', event)" title="កែសម្រួលព័ត៌មាននេះ (Admin)" style="background: rgba(59, 130, 246, 0.9); color: white; border: none; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(4px); transition: var(--transition); box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);">
                        <i class="fa-solid fa-pen-to-square" style="font-size: 0.85rem;"></i>
                    </button>
                    <button type="button" class="news-delete-btn" onclick="deleteNewsItem('${item.id}', event)" title="លុបព័ត៌មាននេះ (Admin)" style="background: rgba(239, 68, 68, 0.88); color: white; border: none; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(4px); transition: var(--transition); box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);">
                        <i class="fa-solid fa-trash-can" style="font-size: 0.85rem;"></i>
                    </button>
                </div>
                ` : ''}
            </div>
            <div class="news-body">
                <div class="news-date" style="display: flex; justify-content: space-between; align-items: center;">
                    <span><i class="fa-regular fa-calendar me-1"></i> ${item.date}</span>
                    <span><i class="fa-regular fa-user me-1"></i> ${item.author || 'សាលា'}</span>
                </div>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-summary">${item.summary}</p>
                <div style="margin-top: 1rem; display: flex; align-items: center; justify-content: space-between; font-size: 0.85rem; color: var(--accent-primary); font-weight: 600; padding-top: 0.8rem; border-top: 1px solid var(--border-color);">
                    <span>អានព័ត៌មានលម្អិត <i class="fa-solid fa-arrow-right me-1"></i></span>
                    <span style="color: var(--text-muted); font-weight: normal; font-size: 0.78rem;"><i class="fa-regular fa-eye me-1"></i> ${item.views || 120}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function openNewsModal(id) {
    const item = window.schoolData.news.find(n => n.id === id);
    if (!item) return;
    
    const modal = document.getElementById('genericModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const isAdmin = sessionStorage.getItem('admin_authenticated') === 'true' || localStorage.getItem('admin_authenticated') === 'true';
    
    modalTitle.innerText = "ព័ត៌មាន និងសកម្មភាពសាលា";
    modalBody.innerHTML = `
        <div style="margin-bottom: 1.25rem;">
            <div style="display: flex; gap: 0.6rem; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap;">
                <span style="background: var(--accent-primary); color: white; font-size: 0.8rem; font-weight: 600; padding: 0.2rem 0.75rem; border-radius: var(--radius-full);">
                    ${item.category}
                </span>
                <span style="color: var(--text-muted); font-size: 0.85rem;"><i class="fa-regular fa-calendar me-1"></i> ${item.date}</span>
                <span style="color: var(--text-muted); font-size: 0.85rem;">• <i class="fa-regular fa-user me-1"></i> ${item.author || 'គណៈគ្រប់គ្រងសាលា'}</span>
            </div>
            <h2 style="font-size: 1.35rem; font-weight: 700; line-height: 1.4; margin-bottom: 1rem;">${item.title}</h2>
        </div>
        
        <img src="${item.image}" alt="${item.title}" style="width: 100%; max-height: 320px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.25rem; border: 1px solid var(--border-color);" onerror="handleImageError(this, 'news')">
        
        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
            ${item.content || `<p>${item.summary}</p>`}
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--border-color); flex-wrap: wrap; gap: 0.75rem;">
            <div>
                ${isAdmin ? `
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button type="button" class="btn" onclick="openEditNewsModal('${item.id}'); closeModal();" style="padding: 0.45rem 1rem; font-size: 0.85rem; background: rgba(59, 130, 246, 0.15); color: #3b82f6; border: 1px solid rgba(59, 130, 246, 0.3); border-radius: var(--radius-md); cursor: pointer;">
                        <i class="fa-solid fa-pen-to-square me-1"></i> កែសម្រួលព័ត៌មាន (Admin)
                    </button>
                    <button type="button" class="btn" onclick="deleteNewsItem('${item.id}'); closeModal();" style="padding: 0.45rem 1rem; font-size: 0.85rem; background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--radius-md); cursor: pointer;">
                        <i class="fa-solid fa-trash-can me-1"></i> លុបព័ត៌មាន (Admin)
                    </button>
                </div>
                ` : ''}
            </div>
            <button class="btn btn-secondary" onclick="alert('ការចែករំលែកដំណឹងបានជោគជ័យ!')" style="font-size: 0.85rem;">
                <i class="fa-solid fa-share-nodes me-1"></i> ចែករំលែក (Share)
            </button>
        </div>
    `;
    
    modal.classList.add('active');
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
    
    // Staff Category Filter Buttons & Dropdown logic
    const staffTabs = document.querySelectorAll('#staffTabs .tab-btn');
    const teacherDropdown = document.getElementById('teacherDropdown');
    const teacherTabBtn = document.getElementById('teacherTabBtn');
    const teacherTabLabel = document.getElementById('teacherTabLabel');
    const dropdownItems = document.querySelectorAll('#teacherDropdownMenu .dropdown-item');

    staffTabs.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const dept = btn.getAttribute('data-dept');
            
            // Toggle dropdown if clicking teacher tab button
            if (btn === teacherTabBtn) {
                e.stopPropagation();
                if (teacherDropdown) teacherDropdown.classList.toggle('open');
            } else {
                if (teacherDropdown) teacherDropdown.classList.remove('open');
            }

            staffTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStaffDept = dept;
            renderStaff(currentStaffDept, currentStaffSearch, currentTeacherSubject);
        });
    });

    // Teacher Subject Dropdown Item Selection
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            currentTeacherSubject = item.getAttribute('data-subject');
            const rawText = item.textContent.trim();
            const cleanText = rawText.replace(/\s*\(\d+នាក់\)/, '');
            
            if (teacherTabLabel) {
                teacherTabLabel.textContent = currentTeacherSubject === 'all' ? 'គ្រូបង្រៀន' : `គ្រូ: ${cleanText}`;
            }

            // Highlight teacher tab
            staffTabs.forEach(b => b.classList.remove('active'));
            if (teacherTabBtn) teacherTabBtn.classList.add('active');
            
            currentStaffDept = 'teaching';
            if (teacherDropdown) teacherDropdown.classList.remove('open');
            
            renderStaff(currentStaffDept, currentStaffSearch, currentTeacherSubject);
        });
    });

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
        if (teacherDropdown && !teacherDropdown.contains(e.target)) {
            teacherDropdown.classList.remove('open');
        }
    });
    
    // Staff Search Input Listener
    const staffSearchInput = document.getElementById('staffSearchInput');
    if (staffSearchInput) {
        staffSearchInput.addEventListener('input', (e) => {
            currentStaffSearch = e.target.value;
            renderStaff(currentStaffDept, currentStaffSearch, currentTeacherSubject);
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
    
    // News Category Filter Buttons
    const newsTabs = document.querySelectorAll('#newsTabs .tab-btn');
    newsTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            newsTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentNewsCat = btn.getAttribute('data-newscat');
            renderNews(currentNewsCat, currentNewsSearch);
        });
    });

    // News Search Input Listener
    const newsSearchInput = document.getElementById('newsSearchInput');
    if (newsSearchInput) {
        newsSearchInput.addEventListener('input', (e) => {
            currentNewsSearch = e.target.value;
            renderNews(currentNewsCat, currentNewsSearch);
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

function handleImageError(imgElem, type = 'news') {
    if (!imgElem) return;
    imgElem.onerror = null; // avoid infinite loop

    const titleText = type === 'hero' ? 'វិទ្យាល័យ ឧដុង្គ' : (type === 'staff' ? 'រូបភាពបុគ្គលិក' : (type === 'doc' ? 'សៀវភៅបណ្ណាល័យ' : 'ព័ត៌មាន និងសកម្មភាពសាលា'));
    
    // Rich SVG graphic placeholder with school & camera design
    const svgData = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='bgG' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231e293b'/%3E%3Cstop offset='50%25' stop-color='%230f172a'/%3E%3Cstop offset='100%25' stop-color='%23172554'/%3E%3C/linearGradient%3E%3ClinearGradient id='accentG' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%233b82f6'/%3E%3Cstop offset='100%25' stop-color='%2306b6d4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bgG)'/%3E%3Ccircle cx='400' cy='165' r='58' fill='url(%23accentG)' opacity='0.22'/%3E%3Ccircle cx='400' cy='165' r='42' fill='none' stroke='url(%23accentG)' stroke-width='2.5' opacity='0.7'/%3E%3Cpath d='M375 160 h50 v28 h-50 z M388 150 h24 v10 h-24 z' fill='%2338bdf8'/%3E%3Ccircle cx='400' cy='174' r='8' fill='%23ffffff'/%3E%3Ctext x='400' y='270' font-family='sans-serif' font-size='22' font-weight='bold' fill='%23f1f5f9' text-anchor='middle'%3E${encodeURIComponent(titleText)}%3C/text%3E%3Ctext x='400' y='302' font-family='sans-serif' font-size='13' fill='%2394a3b8' text-anchor='middle'%3EOudong High School - Technology %26 Science%3C/text%3E%3C/svg%3E`;

    imgElem.src = svgData;
}

function openEditNewsModal(id, event) {
    if (event) event.stopPropagation(); // Prevent opening view modal
    
    const item = window.schoolData.news.find(n => n.id === id);
    if (!item) return;

    const modal = document.getElementById('adminEditNewsModal');
    if (!modal) return;

    document.getElementById('editNewsId').value = item.id;
    document.getElementById('editNewsTitle').value = item.title;
    document.getElementById('editNewsCategory').value = item.category;
    document.getElementById('editNewsAuthor').value = item.author || 'គណៈគ្រប់គ្រងសាលា';
    document.getElementById('editNewsDate').value = item.date;
    document.getElementById('editNewsSummary').value = item.summary;
    document.getElementById('editNewsImgUrl').value = '';
    document.getElementById('editNewsImgFile').value = '';
    document.getElementById('editNewsPreviewImg').src = item.image;

    modal.classList.add('active');
}

function closeEditNewsModal() {
    const modal = document.getElementById('adminEditNewsModal');
    if (modal) modal.classList.remove('active');
}

// Global functions for inline HTML calls
window.handleImageError = handleImageError;
window.openStaffModal = openStaffModal;
window.openDocModal = openDocModal;
window.openNewsModal = openNewsModal;
window.openEditNewsModal = openEditNewsModal;
window.closeEditNewsModal = closeEditNewsModal;
window.deleteNewsItem = deleteNewsItem;
window.downloadDoc = downloadDoc;

/* ==========================================================================
   ADMIN UPLOAD CONTROLLER (LIBRARY DOCUMENTS & NEWS ANNOUNCEMENTS)
   ========================================================================== */
function loadSavedAdminUploads() {
    if (!window.schoolData) return;

    // Filter out deleted news
    try {
        const deletedNewsIds = JSON.parse(localStorage.getItem('admin_deleted_news') || '[]');
        if (Array.isArray(deletedNewsIds) && deletedNewsIds.length > 0) {
            window.schoolData.news = window.schoolData.news.filter(n => !deletedNewsIds.includes(n.id));
        }
    } catch (e) {
        console.error("Error applying deleted news filter:", e);
    }

    // Filter out deleted docs
    try {
        const deletedDocIds = JSON.parse(localStorage.getItem('admin_deleted_docs') || '[]');
        if (Array.isArray(deletedDocIds) && deletedDocIds.length > 0) {
            window.schoolData.libraryDocs = window.schoolData.libraryDocs.filter(d => !deletedDocIds.includes(d.id));
        }
    } catch (e) {
        console.error("Error applying deleted docs filter:", e);
    }

    // Load saved documents
    try {
        const savedDocs = JSON.parse(localStorage.getItem('admin_uploaded_docs') || '[]');
        if (Array.isArray(savedDocs) && savedDocs.length > 0) {
            const existingIds = new Set(window.schoolData.libraryDocs.map(d => d.id));
            const newDocs = savedDocs.filter(d => !existingIds.has(d.id));
            window.schoolData.libraryDocs.unshift(...newDocs);
        }
    } catch (e) {
        console.error("Error loading saved admin docs:", e);
    }

    // Load saved news
    try {
        const savedNews = JSON.parse(localStorage.getItem('admin_uploaded_news') || '[]');
        if (Array.isArray(savedNews) && savedNews.length > 0) {
            const existingIds = new Set(window.schoolData.news.map(n => n.id));
            const newNews = savedNews.filter(n => !existingIds.has(n.id));
            window.schoolData.news.unshift(...newNews);
        }
    } catch (e) {
        console.error("Error loading saved admin news:", e);
    }

    // Apply saved edited news overrides
    try {
        const editedNewsMap = JSON.parse(localStorage.getItem('admin_edited_news') || '{}');
        window.schoolData.news = window.schoolData.news.map(n => {
            if (editedNewsMap[n.id]) {
                return { ...n, ...editedNewsMap[n.id] };
            }
            return n;
        });
    } catch (e) {
        console.error("Error applying edited news overrides:", e);
    }

    // Load custom hero image
    try {
        const customHero = localStorage.getItem('custom_hero_image');
        if (customHero) {
            const heroImg = document.getElementById('heroVisualImg');
            if (heroImg) heroImg.src = customHero;
        }
    } catch (e) {
        console.error("Error loading custom hero image:", e);
    }
}

function checkAdminNoticeBar() {
    const isAdmin = sessionStorage.getItem('admin_authenticated') === 'true' || localStorage.getItem('admin_authenticated') === 'true';
    const navBtn = document.getElementById('navAdminLoginBtn');
    
    if (isAdmin) {
        if (navBtn) {
            navBtn.classList.add('logged-in');
            navBtn.innerHTML = `<i class="fa-solid fa-user-shield"></i>`;
            navBtn.title = "ទៅកាន់ប្រព័ន្ធគ្រប់គ្រងសាលារៀន (Admin Dashboard)";
        }

        const bar = document.createElement('div');
        bar.style.cssText = "background: linear-gradient(90deg, #1e3a8a, #2563eb); color: white; padding: 0.5rem 1rem; text-align: center; font-size: 0.82rem; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 1rem; z-index: 9999; border-bottom: 1px solid rgba(255,255,255,0.2);";
        bar.innerHTML = `
            <span><i class="fa-solid fa-shield-halved me-1"></i> អ្នកកំពុងស្ថិតក្នុងសិទ្ធិ Admin (Role: Administrator) - ប៊ូតុងកែសម្រួល & លុប ត្រូវបានបង្ហាញ</span>
            <a href="admin.html" style="background: white; color: #1d4ed8; padding: 0.2rem 0.65rem; border-radius: 4px; text-decoration: none; font-size: 0.78rem; font-weight: 700;">ទៅកាន់ Admin Dashboard</a>
        `;
        document.body.insertBefore(bar, document.body.firstChild);
    }
}

function initIndexAdminLoginModal() {
    const navBtn = document.getElementById('navAdminLoginBtn');
    const modal = document.getElementById('indexAdminLoginModal');
    const form = document.getElementById('indexAdminLoginForm');
    const errorBox = document.getElementById('indexAdminLoginError');
    const passInput = document.getElementById('popupAdminPassword');
    const userInput = document.getElementById('popupAdminUsername');
    const togglePassBtn = document.getElementById('toggleIndexAdminPasswordBtn');
    const togglePassIcon = document.getElementById('toggleIndexAdminPasswordIcon');

    // Password Visibility Toggle
    if (togglePassBtn && passInput && togglePassIcon) {
        togglePassBtn.addEventListener('click', () => {
            const isPass = passInput.getAttribute('type') === 'password';
            passInput.setAttribute('type', isPass ? 'text' : 'password');
            togglePassIcon.className = isPass ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
        });
    }

    if (navBtn) {
        navBtn.addEventListener('click', (e) => {
            const isAdmin = sessionStorage.getItem('admin_authenticated') === 'true' || localStorage.getItem('admin_authenticated') === 'true';
            if (isAdmin) {
                // Already authenticated, navigate directly to admin dashboard
                window.location.href = 'admin.html';
                return;
            }

            e.preventDefault();
            if (modal) {
                if (errorBox) errorBox.style.display = 'none';
                if (passInput) {
                    passInput.value = '';
                    passInput.setAttribute('type', 'password');
                    passInput.style.borderColor = '';
                }
                if (togglePassIcon) togglePassIcon.className = 'fa-solid fa-eye';
                if (userInput) {
                    userInput.value = '';
                    userInput.style.borderColor = '';
                }
                modal.classList.add('active');
            }
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeIndexAdminLoginModal();
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = userInput ? userInput.value.trim() : '';
            const password = passInput ? passInput.value.trim() : '';

            // Check admin credentials (admin / admin123)
            if ((username === 'admin' || username === '') && (password === 'admin123' || password === 'admin')) {
                // Correct Password -> Authenticate as Admin
                sessionStorage.setItem('admin_authenticated', 'true');
                localStorage.setItem('admin_authenticated', 'true');

                if (errorBox) errorBox.style.display = 'none';
                closeIndexAdminLoginModal();
                showToast('បានផ្ទៀងផ្ទាត់សិទ្ធិ Admin ដោយជោគជ័យ!', 'success');

                // Redirect to Admin Portal
                setTimeout(() => {
                    window.location.href = 'admin.html';
                }, 400);
            } else {
                // INCORRECT PASSWORD -> BLOCK ACCESS COMPLETELY (ហាមអ្នកផ្សេងចូល)
                if (errorBox) {
                    errorBox.style.display = 'block';
                    errorBox.innerHTML = `<i class="fa-solid fa-triangle-exclamation me-1" style="font-size: 1rem;"></i> <span><strong>បដិសេធការចូលប្រព័ន្ធ!</strong> ពាក្យសម្ងាត់ ឬឈ្មោះមិនត្រឹមត្រូវឡើយ។ ហាមអ្នកផ្សេងចូលប្រើប្រាស់!</span>`;
                }
                if (passInput) {
                    passInput.style.borderColor = '#ef4444';
                    passInput.focus();
                }
            }
        });
    }
}

function closeIndexAdminLoginModal() {
    const modal = document.getElementById('indexAdminLoginModal');
    if (modal) modal.classList.remove('active');
}

window.closeIndexAdminLoginModal = closeIndexAdminLoginModal;

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}" style="color: ${type === 'success' ? '#10b981' : '#3b82f6'}; font-size: 1.2rem;"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function initAdminUpload() {
    const adminNavBtn = document.getElementById('adminUploadNavBtn');
    const adminModal = document.getElementById('adminUploadModal');
    const adminCloseBtn = document.getElementById('adminModalCloseBtn');
    const tabDocBtn = document.getElementById('tabDocBtn');
    const tabNewsBtn = document.getElementById('tabNewsBtn');
    const docForm = document.getElementById('adminUploadDocForm');
    const newsForm = document.getElementById('adminUploadNewsForm');

    // Open Admin Modal
    if (adminNavBtn && adminModal) {
        adminNavBtn.addEventListener('click', () => {
            adminModal.classList.add('active');
        });
    }

    // Close Admin Modal
    if (adminCloseBtn && adminModal) {
        adminCloseBtn.addEventListener('click', () => {
            adminModal.classList.remove('active');
        });
        adminModal.addEventListener('click', (e) => {
            if (e.target === adminModal) adminModal.classList.remove('active');
        });
    }

    const tabHeroImgBtn = document.getElementById('tabHeroImgBtn');
    const heroForm = document.getElementById('adminChangeHeroForm');
    const quickChangeHeroBtn = document.getElementById('quickChangeHeroBtn');

    // Quick Hero Change Button Click
    if (quickChangeHeroBtn && adminModal && tabHeroImgBtn) {
        quickChangeHeroBtn.addEventListener('click', () => {
            adminModal.classList.add('active');
            tabHeroImgBtn.click();
        });
    }

    // 3-Tab Switcher
    if (tabDocBtn && tabNewsBtn && tabHeroImgBtn && docForm && newsForm && heroForm) {
        tabDocBtn.addEventListener('click', () => {
            tabDocBtn.classList.add('active');
            tabNewsBtn.classList.remove('active');
            tabHeroImgBtn.classList.remove('active');
            docForm.style.display = 'block';
            newsForm.style.display = 'none';
            heroForm.style.display = 'none';
        });

        tabNewsBtn.addEventListener('click', () => {
            tabNewsBtn.classList.add('active');
            tabDocBtn.classList.remove('active');
            tabHeroImgBtn.classList.remove('active');
            newsForm.style.display = 'block';
            docForm.style.display = 'none';
            heroForm.style.display = 'none';
        });

        tabHeroImgBtn.addEventListener('click', () => {
            tabHeroImgBtn.classList.add('active');
            tabDocBtn.classList.remove('active');
            tabNewsBtn.classList.remove('active');
            heroForm.style.display = 'block';
            docForm.style.display = 'none';
            newsForm.style.display = 'none';
        });
    }

    // Handle Upload Document Form Submit
    if (docForm) {
        docForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('adminDocTitle').value.trim();
            const category = document.getElementById('adminDocCategory').value;
            const author = document.getElementById('adminDocAuthor').value.trim();
            const year = document.getElementById('adminDocYear').value.trim() || '2026';
            const pages = document.getElementById('adminDocPages').value || 180;
            const fileSize = document.getElementById('adminDocSize').value.trim() || '15 MB';
            const coverUrlInput = document.getElementById('adminDocCoverUrl').value.trim();
            const coverFile = document.getElementById('adminDocCoverFile').files[0];
            const desc = document.getElementById('adminDocDesc').value.trim();

            const categoryKhMap = {
                technology: "បច្ចេកវិទ្យា",
                science: "វិទ្យាសាស្ត្រ",
                history: "ប្រវត្តិវិទ្យា",
                language: "ភាសាបរទេស",
                economics: "សេដ្ឋកិច្ច"
            };

            const defaultCovers = {
                technology: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400",
                science: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400",
                history: "https://images.unsplash.com/photo-1608488454765-b471456a68d0?auto=format&fit=crop&q=80&w=400",
                language: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=400",
                economics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
            };

            function processSaveDoc(coverImageSrc) {
                const newDoc = {
                    id: 'doc-' + Date.now(),
                    title: title,
                    category: category,
                    categoryKh: categoryKhMap[category] || category,
                    author: author,
                    year: year,
                    fileSize: fileSize,
                    pages: parseInt(pages) || 150,
                    type: "PDF",
                    views: 1,
                    downloads: 0,
                    cover: coverImageSrc,
                    description: desc,
                    previewContent: `
                        <h3>${title}</h3>
                        <p>${desc}</p>
                        <div style="background: rgba(56, 189, 248, 0.08); padding: 15px; border-left: 4px solid #3b82f6; margin: 12px 0; border-radius: 4px;">
                            <strong>អ្នកនិពន្ធ / គ្រូបង្រៀន:</strong> ${author} <br>
                            <strong>ឆ្នាំបោះពុម្ព:</strong> ${year} | <strong>ប្រភេទ:</strong> ${categoryKhMap[category] || category}
                        </div>
                    `
                };

                window.schoolData.libraryDocs.unshift(newDoc);

                try {
                    const saved = JSON.parse(localStorage.getItem('admin_uploaded_docs') || '[]');
                    saved.unshift(newDoc);
                    localStorage.setItem('admin_uploaded_docs', JSON.stringify(saved));
                } catch (err) {
                    console.error("Failed to save doc to localStorage:", err);
                }

                renderDocs('all', '');
                docForm.reset();
                if (adminModal) adminModal.classList.remove('active');
                showToast(`បាន Upload ឯកសារ "${title}" ដោយជោគជ័យ!`);
                
                const libElem = document.getElementById('library');
                if (libElem) libElem.scrollIntoView({ behavior: 'smooth' });
            }

            if (coverFile) {
                const reader = new FileReader();
                reader.onload = function (evt) {
                    processSaveDoc(evt.target.result);
                };
                reader.readAsDataURL(coverFile);
            } else {
                const finalCover = coverUrlInput || defaultCovers[category] || defaultCovers.technology;
                processSaveDoc(finalCover);
            }
        });
    }

    // Handle Upload News Form Submit
    if (newsForm) {
        newsForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('adminNewsTitle').value.trim();
            const category = document.getElementById('adminNewsCategory').value;
            const date = document.getElementById('adminNewsDate').value.trim() || '២៨ កក្កដា ២០២៦';
            const imgUrlInput = document.getElementById('adminNewsImgUrl').value.trim();
            const imgFile = document.getElementById('adminNewsImgFile').files[0];
            const summary = document.getElementById('adminNewsSummary').value.trim();

            const defaultNewsImages = [
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600"
            ];

            function processSaveNews(bannerImageSrc) {
                const newNews = {
                    id: 'news-' + Date.now(),
                    title: title,
                    date: date,
                    category: category,
                    image: bannerImageSrc,
                    summary: summary
                };

                window.schoolData.news.unshift(newNews);

                try {
                    const saved = JSON.parse(localStorage.getItem('admin_uploaded_news') || '[]');
                    saved.unshift(newNews);
                    localStorage.setItem('admin_uploaded_news', JSON.stringify(saved));
                } catch (err) {
                    console.error("Failed to save news to localStorage:", err);
                }

                renderNews();
                newsForm.reset();
                if (adminModal) adminModal.classList.remove('active');
                showToast(`បាន ចុះផ្សាយព័ត៌មាន "${title}" ដោយជោគជ័យ!`);

                const newsElem = document.getElementById('news');
                if (newsElem) newsElem.scrollIntoView({ behavior: 'smooth' });
            }

            if (imgFile) {
                const reader = new FileReader();
                reader.onload = function (evt) {
                    processSaveNews(evt.target.result);
                };
                reader.readAsDataURL(imgFile);
            } else {
                const finalImg = imgUrlInput || defaultNewsImages[Math.floor(Math.random() * defaultNewsImages.length)];
                processSaveNews(finalImg);
            }
        });
    }

    // Handle Hero Image Change Form Submit & Live Preview
    const heroImgFile = document.getElementById('adminHeroImgFile');
    const heroImgUrl = document.getElementById('adminHeroImgUrl');
    const heroPreviewImg = document.getElementById('heroPreviewImg');

    if (heroImgFile && heroPreviewImg) {
        heroImgFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (evt) => {
                    heroPreviewImg.src = evt.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (heroImgUrl && heroPreviewImg) {
        heroImgUrl.addEventListener('input', (e) => {
            if (e.target.value.trim()) {
                heroPreviewImg.src = e.target.value.trim();
            }
        });
    }

    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const file = heroImgFile ? heroImgFile.files[0] : null;
            const urlVal = heroImgUrl ? heroImgUrl.value.trim() : '';

            function updateHeroSrc(src) {
                const heroImg = document.getElementById('heroVisualImg');
                if (heroImg) heroImg.src = src;

                try {
                    localStorage.setItem('custom_hero_image', src);
                } catch (err) {
                    console.error("Failed to save custom hero image to localStorage:", err);
                }

                heroForm.reset();
                if (adminModal) adminModal.classList.remove('active');
                showToast("បានផ្លាស់ប្តូររូបភាព Hero ដោយជោគជ័យ! (Anti-Distortion Applied)", "success");
            }

            if (file) {
                const reader = new FileReader();
                reader.onload = (evt) => {
                    updateHeroSrc(evt.target.result);
                };
                reader.readAsDataURL(file);
            } else if (urlVal) {
                updateHeroSrc(urlVal);
            } else {
                alert("សូមជ្រើសរើសហ្វាល់រូបភាព ឬបញ្ចូល URL រូបភាពជាមុនសិន!");
            }
        });
    }

    // Admin Edit News Modal Listeners
    const editModal = document.getElementById('adminEditNewsModal');
    const editCloseBtn = document.getElementById('editNewsModalCloseBtn');
    const editCancelBtn = document.getElementById('editNewsCancelBtn');
    const editForm = document.getElementById('adminEditNewsForm');
    const editImgFile = document.getElementById('editNewsImgFile');
    const editImgUrl = document.getElementById('editNewsImgUrl');
    const editPreviewImg = document.getElementById('editNewsPreviewImg');

    if (editCloseBtn) editCloseBtn.addEventListener('click', closeEditNewsModal);
    if (editCancelBtn) editCancelBtn.addEventListener('click', closeEditNewsModal);
    if (editModal) {
        editModal.addEventListener('click', (e) => {
            if (e.target === editModal) closeEditNewsModal();
        });
    }

    if (editImgFile && editPreviewImg) {
        editImgFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (evt) => {
                    editPreviewImg.src = evt.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (editImgUrl && editPreviewImg) {
        editImgUrl.addEventListener('input', (e) => {
            if (e.target.value.trim()) {
                editPreviewImg.src = e.target.value.trim();
            }
        });
    }

    if (editForm) {
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const id = document.getElementById('editNewsId').value;
            const title = document.getElementById('editNewsTitle').value.trim();
            const category = document.getElementById('editNewsCategory').value;
            const author = document.getElementById('editNewsAuthor').value.trim();
            const date = document.getElementById('editNewsDate').value.trim();
            const summary = document.getElementById('editNewsSummary').value.trim();
            const file = editImgFile ? editImgFile.files[0] : null;
            const urlVal = editImgUrl ? editImgUrl.value.trim() : '';

            const item = window.schoolData.news.find(n => n.id === id);
            if (!item) return;

            function applyNewsUpdate(newImgSrc) {
                item.title = title;
                item.category = category;
                item.author = author;
                item.date = date;
                item.summary = summary;
                if (newImgSrc) item.image = newImgSrc;

                // Save override to localStorage
                try {
                    const editedMap = JSON.parse(localStorage.getItem('admin_edited_news') || '{}');
                    editedMap[id] = {
                        title: item.title,
                        category: item.category,
                        author: item.author,
                        date: item.date,
                        summary: item.summary,
                        image: item.image
                    };
                    localStorage.setItem('admin_edited_news', JSON.stringify(editedMap));

                    // Also update admin_uploaded_news if present
                    const savedNews = JSON.parse(localStorage.getItem('admin_uploaded_news') || '[]');
                    const idx = savedNews.findIndex(n => n.id === id);
                    if (idx !== -1) {
                        savedNews[idx] = { ...savedNews[idx], ...editedMap[id] };
                        localStorage.setItem('admin_uploaded_news', JSON.stringify(savedNews));
                    }
                } catch (err) {
                    console.error("Failed to save edited news to localStorage:", err);
                }

                renderNews(currentNewsCat, currentNewsSearch);
                closeEditNewsModal();
                showToast(`បានកែសម្រួលព័ត៌មាន "${title}" ដោយជោគជ័យ! (Anti-Distortion Preserved)`, "success");
            }

            if (file) {
                const reader = new FileReader();
                reader.onload = (evt) => {
                    applyNewsUpdate(evt.target.result);
                };
                reader.readAsDataURL(file);
            } else if (urlVal) {
                applyNewsUpdate(urlVal);
            } else {
                applyNewsUpdate(null);
            }
        });
    }
}

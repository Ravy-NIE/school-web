/* ==========================================================================
   ADMIN DASHBOARD CONTROLLER (js/admin.js)
   Oudong High School Website - Admin Portal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initAuth();
    initStats();
    initHeroTab();
    initNewsTab();
    initDocsTab();
});

/* 1. Theme Management */
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

/* 2. Authentication Management */
function initAuth() {
    const overlay = document.getElementById('adminAuthOverlay');
    const form = document.getElementById('adminLoginForm');

    // Check if already authenticated in this session
    if (sessionStorage.getItem('admin_authenticated') === 'true') {
        if (overlay) overlay.style.display = 'none';
    } else {
        if (overlay) overlay.style.display = 'flex';
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const pass = document.getElementById('adminPassword').value.trim();
            if (pass === 'admin123' || pass === 'admin') {
                sessionStorage.setItem('admin_authenticated', 'true');
                if (overlay) {
                    overlay.style.opacity = '0';
                    setTimeout(() => overlay.style.display = 'none', 300);
                }
                showToast('ចូលប្រើប្រាស់ប្រព័ន្ធ Admin ដោយជោគជ័យ!', 'success');
            } else {
                alert('ពាក្យសម្ងាត់មិនត្រឹមត្រូវឡើយ! (ពាក្យសម្ងាត់គំរូដំបូង: admin123)');
            }
        });
    }
}

function quickAdminUnlock() {
    sessionStorage.setItem('admin_authenticated', 'true');
    const overlay = document.getElementById('adminAuthOverlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.display = 'none', 300);
    }
    showToast('បានរំលងចូលប្រើប្រាស់ប្រព័ន្ធ Admin (Quick Access Demo)', 'success');
}

function adminSignOut() {
    if (confirm('តើអ្នកពិតជាចង់ចាកចេញពីប្រព័ន្ធ Admin មែនទេ?')) {
        sessionStorage.removeItem('admin_authenticated');
        window.location.reload();
    }
}

/* 3. Tab Switching */
function switchAdminTab(tabName, btnElement) {
    const tabs = document.querySelectorAll('.admin-nav-tab');
    tabs.forEach(t => t.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    const panels = document.querySelectorAll('.admin-tab-panel');
    panels.forEach(p => p.style.display = 'none');

    const targetPanel = document.getElementById(`panel-${tabName}`);
    if (targetPanel) targetPanel.style.display = 'block';
}

/* 4. Helper: Toast Notification */
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

/* 5. Statistics Overview Update */
function initStats() {
    const allNews = getCombinedNews();
    const allDocs = getCombinedDocs();
    const customHero = localStorage.getItem('custom_hero_image');

    const newsStat = document.getElementById('statNewsCount');
    const docsStat = document.getElementById('statDocsCount');
    const heroStat = document.getElementById('statHeroStatus');

    if (newsStat) newsStat.textContent = allNews.length;
    if (docsStat) docsStat.textContent = allDocs.length;
    if (heroStat) heroStat.textContent = customHero ? 'រូបភាព Custom' : 'រូបភាព Default';
}

/* 6. Combined Data Helper Functions */
function getCombinedNews() {
    if (!window.schoolData) return [];
    
    let newsList = [...window.schoolData.news];

    // Filter out deleted
    const deletedNewsIds = JSON.parse(localStorage.getItem('admin_deleted_news') || '[]');
    newsList = newsList.filter(n => !deletedNewsIds.includes(n.id));

    // Include uploaded
    const uploaded = JSON.parse(localStorage.getItem('admin_uploaded_news') || '[]');
    uploaded.forEach(u => {
        if (!newsList.some(n => n.id === u.id)) {
            newsList.unshift(u);
        }
    });

    // Apply edited overrides
    const editedMap = JSON.parse(localStorage.getItem('admin_edited_news') || '{}');
    newsList = newsList.map(n => {
        if (editedMap[n.id]) {
            return { ...n, ...editedMap[n.id] };
        }
        return n;
    });

    return newsList;
}

function getCombinedDocs() {
    if (!window.schoolData) return [];

    let docsList = [...window.schoolData.libraryDocs];

    // Filter out deleted
    const deletedDocIds = JSON.parse(localStorage.getItem('admin_deleted_docs') || '[]');
    docsList = docsList.filter(d => !deletedDocIds.includes(d.id));

    // Include uploaded
    const uploaded = JSON.parse(localStorage.getItem('admin_uploaded_docs') || '[]');
    uploaded.forEach(u => {
        if (!docsList.some(d => d.id === u.id)) {
            docsList.unshift(u);
        }
    });

    return docsList;
}

/* 7. Hero Image Tab Controller */
function initHeroTab() {
    const form = document.getElementById('adminHeroForm');
    const fileInput = document.getElementById('adminHeroFile');
    const urlInput = document.getElementById('adminHeroUrl');
    const preview = document.getElementById('adminHeroPreview');

    const customHero = localStorage.getItem('custom_hero_image');
    if (customHero && preview) preview.src = customHero;

    if (fileInput && preview) {
        fileInput.addEventListener('change', () => {
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => preview.src = e.target.result;
                reader.readAsDataURL(file);
            }
        });
    }

    if (urlInput && preview) {
        urlInput.addEventListener('input', () => {
            if (urlInput.value.trim()) preview.src = urlInput.value.trim();
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const file = fileInput.files[0];
            const urlVal = urlInput.value.trim();

            const applyHeroSrc = (src) => {
                localStorage.setItem('custom_hero_image', src);
                preview.src = src;
                initStats();
                showToast('បានផ្លាស់ប្តូររូបភាព Hero Banner ដោយជោគជ័យ!', 'success');
            };

            if (file) {
                const reader = new FileReader();
                reader.onload = (ev) => applyHeroSrc(ev.target.result);
                reader.readAsDataURL(file);
            } else if (urlVal) {
                applyHeroSrc(urlVal);
            } else {
                alert('សូមជ្រើសរើសរូបភាព ឬបញ្ចូល Web URL រូបភាព!');
            }
        });
    }
}

function resetHeroImage() {
    if (confirm('តើអ្នកពិតជាចង់កំណត់រូបភាព Hero Banner មកដើមវិញមែនទេ?')) {
        localStorage.removeItem('custom_hero_image');
        const preview = document.getElementById('adminHeroPreview');
        if (preview) preview.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800";
        initStats();
        showToast('បានកំណត់រូបភាព Hero ដើមវិញដោយជោគជ័យ!', 'info');
    }
}

/* 8. News Management Tab Controller */
function initNewsTab() {
    renderAdminNewsTable();

    const addForm = document.getElementById('adminAddNewsForm');
    if (addForm) {
        addForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('newsTitle').value.trim();
            const category = document.getElementById('newsCategory').value;
            const date = document.getElementById('newsDate').value.trim() || '២៨ កក្កដា ២០២៦';
            const imgFile = document.getElementById('newsImgFile').files[0];
            const imgUrl = document.getElementById('newsImgUrl').value.trim();
            const summary = document.getElementById('newsSummary').value.trim();

            const defaultImg = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800";

            const saveNews = (finalImg) => {
                const newNews = {
                    id: 'news-admin-' + Date.now(),
                    title: title,
                    category: category,
                    date: date,
                    author: 'គណៈគ្រប់គ្រងសាលា (Admin)',
                    image: finalImg,
                    summary: summary
                };

                const savedList = JSON.parse(localStorage.getItem('admin_uploaded_news') || '[]');
                savedList.unshift(newNews);
                localStorage.setItem('admin_uploaded_news', JSON.stringify(savedList));

                addForm.reset();
                renderAdminNewsTable();
                initStats();
                showToast(`បានចុះផ្សាយព័ត៌មាន "${title}" ដោយជោគជ័យ!`, 'success');
            };

            if (imgFile) {
                const reader = new FileReader();
                reader.onload = (ev) => saveNews(ev.target.result);
                reader.readAsDataURL(imgFile);
            } else {
                saveNews(imgUrl || defaultImg);
            }
        });
    }

    // Live Image Preview for Edit Modal
    const editImgFile = document.getElementById('editNewsImgFile');
    const editImgUrl = document.getElementById('editNewsImgUrl');
    const editPreviewImg = document.getElementById('editNewsPreviewImg');

    if (editImgFile && editPreviewImg) {
        editImgFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (evt) => editPreviewImg.src = evt.target.result;
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

    // Edit News Form Submission
    const editForm = document.getElementById('adminEditNewsForm');
    if (editForm) {
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('editNewsId').value;
            const title = document.getElementById('editNewsTitle').value.trim();
            const category = document.getElementById('editNewsCategory').value;
            const author = document.getElementById('editNewsAuthor').value.trim() || 'គណៈគ្រប់គ្រងសាលា';
            const date = document.getElementById('editNewsDate').value.trim();
            const imgFile = document.getElementById('editNewsImgFile').files[0];
            const imgUrl = document.getElementById('editNewsImgUrl').value.trim();
            const summary = document.getElementById('editNewsSummary').value.trim();

            const saveEdited = (finalImg) => {
                const editedMap = JSON.parse(localStorage.getItem('admin_edited_news') || '{}');
                const overrideObj = { title, category, author, date, summary };
                if (finalImg) overrideObj.image = finalImg;

                editedMap[id] = { ...(editedMap[id] || {}), ...overrideObj };
                localStorage.setItem('admin_edited_news', JSON.stringify(editedMap));

                closeEditNewsModal();
                renderAdminNewsTable();
                showToast('បានកែសម្រួលព័ត៌មានដោយជោគជ័យ!', 'success');
            };

            if (imgFile) {
                const reader = new FileReader();
                reader.onload = (ev) => saveEdited(ev.target.result);
                reader.readAsDataURL(imgFile);
            } else {
                saveEdited(imgUrl || null);
            }
        });
    }
}

function renderAdminNewsTable(query = '') {
    const tbody = document.getElementById('adminNewsTableBody');
    if (!tbody) return;

    let newsList = getCombinedNews();
    if (query) {
        const q = query.toLowerCase();
        newsList = newsList.filter(n => n.title.toLowerCase().includes(q) || n.category.toLowerCase().includes(q));
    }

    if (newsList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">មិនមានព័ត៌មាន ឬការប្រកាសឡើយ</td></tr>`;
        return;
    }

    tbody.innerHTML = newsList.map(n => `
        <tr>
            <td>
                <img src="${n.image}" class="table-thumb" onerror="this.src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400'">
            </td>
            <td>
                <div style="font-weight: 600; color: var(--text-main); font-size: 0.92rem;">${n.title}</div>
                <div style="font-size: 0.78rem; color: var(--text-muted);">${n.author || 'គណៈគ្រប់គ្រងសាលា'}</div>
            </td>
            <td><span class="badge" style="background: rgba(59, 130, 246, 0.12); color: #3b82f6; padding: 0.25rem 0.6rem; border-radius: 4px; font-size: 0.78rem;">${n.category}</span></td>
            <td style="font-size: 0.82rem; color: var(--text-muted);">${n.date}</td>
            <td style="text-align: right;">
                <button class="btn-action btn-edit" onclick="openEditNewsModal('${n.id}')">
                    <i class="fa-solid fa-pen-to-square"></i> កែសម្រួល
                </button>
                <button class="btn-action btn-delete" onclick="adminDeleteNews('${n.id}')">
                    <i class="fa-solid fa-trash"></i> លុប
                </button>
            </td>
        </tr>
    `).join('');
}

function filterAdminNews() {
    const input = document.getElementById('newsSearchInput');
    renderAdminNewsTable(input ? input.value : '');
}

function adminDeleteNews(id) {
    const newsList = getCombinedNews();
    const item = newsList.find(n => n.id === id);
    const title = item ? item.title : 'ព័ត៌មាននេះ';

    if (confirm(`តើអ្នកពិតជាចង់លុបព័ត៌មាន "${title}" នេះចេញពីវេបសាយមែនទេ?`)) {
        // Remove from uploaded if present
        const uploaded = JSON.parse(localStorage.getItem('admin_uploaded_news') || '[]');
        const filteredUploaded = uploaded.filter(u => u.id !== id);
        localStorage.setItem('admin_uploaded_news', JSON.stringify(filteredUploaded));

        // Add to deleted list so default items hide
        const deleted = JSON.parse(localStorage.getItem('admin_deleted_news') || '[]');
        if (!deleted.includes(id)) {
            deleted.push(id);
            localStorage.setItem('admin_deleted_news', JSON.stringify(deleted));
        }

        renderAdminNewsTable();
        initStats();
        showToast(`បានលុបព័ត៌មាន "${title}" ដោយជោគជ័យ!`, 'info');
    }
}

function openEditNewsModal(id) {
    const newsList = getCombinedNews();
    const item = newsList.find(n => n.id === id);
    if (!item) return;

    document.getElementById('editNewsId').value = item.id;
    document.getElementById('editNewsTitle').value = item.title;
    document.getElementById('editNewsCategory').value = item.category || 'ការប្រកាស';
    document.getElementById('editNewsAuthor').value = item.author || '';
    document.getElementById('editNewsDate').value = item.date || '';
    document.getElementById('editNewsSummary').value = item.summary || '';
    document.getElementById('editNewsPreviewImg').src = item.image;

    const modal = document.getElementById('adminEditNewsModal');
    if (modal) modal.classList.add('active');
}

function closeEditNewsModal() {
    const modal = document.getElementById('adminEditNewsModal');
    if (modal) modal.classList.remove('active');
}

/* 9. Digital Library Management Controller */
function initDocsTab() {
    renderAdminDocsTable();

    const addForm = document.getElementById('adminAddDocForm');
    if (addForm) {
        addForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('docTitle').value.trim();
            const category = document.getElementById('docCategory').value;
            const author = document.getElementById('docAuthor').value.trim();
            const year = document.getElementById('docYear').value.trim() || '2026';
            const pages = document.getElementById('docPages').value || 180;
            const coverFile = document.getElementById('docCoverFile').files[0];
            const coverUrl = document.getElementById('docCoverUrl').value.trim();
            const desc = document.getElementById('docDesc').value.trim();

            const defaultCover = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400";

            const saveDoc = (finalCover) => {
                const newDoc = {
                    id: 'doc-admin-' + Date.now(),
                    title: title,
                    category: category,
                    author: author,
                    year: year,
                    pages: parseInt(pages, 10),
                    fileSize: '15 MB',
                    coverImage: finalCover,
                    pdfUrl: '#',
                    description: desc
                };

                const savedList = JSON.parse(localStorage.getItem('admin_uploaded_docs') || '[]');
                savedList.unshift(newDoc);
                localStorage.setItem('admin_uploaded_docs', JSON.stringify(savedList));

                addForm.reset();
                renderAdminDocsTable();
                initStats();
                showToast(`បាន Upload សៀវភៅ/ឯកសារ "${title}" ដោយជោគជ័យ!`, 'success');
            };

            if (coverFile) {
                const reader = new FileReader();
                reader.onload = (ev) => saveDoc(ev.target.result);
                reader.readAsDataURL(coverFile);
            } else {
                saveDoc(coverUrl || defaultCover);
            }
        });
    }
}

function renderAdminDocsTable(query = '') {
    const tbody = document.getElementById('adminDocsTableBody');
    if (!tbody) return;

    let docsList = getCombinedDocs();
    if (query) {
        const q = query.toLowerCase();
        docsList = docsList.filter(d => d.title.toLowerCase().includes(q) || d.author.toLowerCase().includes(q));
    }

    if (docsList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">មិនមានសៀវភៅ ឬឯកសារឡើយ</td></tr>`;
        return;
    }

    tbody.innerHTML = docsList.map(d => `
        <tr>
            <td>
                <img src="${d.coverImage}" class="table-thumb" style="width: 38px; height: 48px;" onerror="this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400'">
            </td>
            <td>
                <div style="font-weight: 600; color: var(--text-main); font-size: 0.92rem;">${d.title}</div>
                <div style="font-size: 0.78rem; color: var(--text-muted);">${d.year || '2026'} • ${d.pages || 180} ទំព័រ</div>
            </td>
            <td><span class="badge" style="background: rgba(16, 185, 129, 0.12); color: #10b981; padding: 0.25rem 0.6rem; border-radius: 4px; font-size: 0.78rem;">${d.category}</span></td>
            <td style="font-size: 0.85rem; color: var(--text-muted);">${d.author}</td>
            <td style="text-align: right;">
                <button class="btn-action btn-delete" onclick="adminDeleteDoc('${d.id}')">
                    <i class="fa-solid fa-trash"></i> លុប
                </button>
            </td>
        </tr>
    `).join('');
}

function filterAdminDocs() {
    const input = document.getElementById('docSearchInput');
    renderAdminDocsTable(input ? input.value : '');
}

function adminDeleteDoc(id) {
    const docsList = getCombinedDocs();
    const item = docsList.find(d => d.id === id);
    const title = item ? item.title : 'សៀវភៅនេះ';

    if (confirm(`តើអ្នកពិតជាចង់លុបសៀវភៅ/ឯកសារ "${title}" នេះចេញពីបណ្ណាល័យមែនទេ?`)) {
        // Remove from uploaded
        const uploaded = JSON.parse(localStorage.getItem('admin_uploaded_docs') || '[]');
        const filteredUploaded = uploaded.filter(u => u.id !== id);
        localStorage.setItem('admin_uploaded_docs', JSON.stringify(filteredUploaded));

        // Add to deleted list
        const deleted = JSON.parse(localStorage.getItem('admin_deleted_docs') || '[]');
        if (!deleted.includes(id)) {
            deleted.push(id);
            localStorage.setItem('admin_deleted_docs', JSON.stringify(deleted));
        }

        renderAdminDocsTable();
        initStats();
        showToast(`បានលុបឯកសារ "${title}" ដោយជោគជ័យ!`, 'info');
    }
}

/* 10. Factory Reset All System Data */
function factoryResetAdminData() {
    if (confirm('តើអ្នកពិតជាចង់កំណត់ Reset ទិន្នន័យវេបសាយទាំងអស់មកដើមវិញមែនទេ? រាល់ព័ត៌មានដែលបានបន្ថែមនឹងត្រូវបាត់បង់!')) {
        localStorage.removeItem('admin_uploaded_news');
        localStorage.removeItem('admin_edited_news');
        localStorage.removeItem('admin_deleted_news');
        localStorage.removeItem('admin_uploaded_docs');
        localStorage.removeItem('admin_deleted_docs');
        localStorage.removeItem('custom_hero_image');

        window.location.reload();
    }
}

// Make functions globally available
window.switchAdminTab = switchAdminTab;
window.quickAdminUnlock = quickAdminUnlock;
window.adminSignOut = adminSignOut;
window.resetHeroImage = resetHeroImage;
window.filterAdminNews = filterAdminNews;
window.adminDeleteNews = adminDeleteNews;
window.openEditNewsModal = openEditNewsModal;
window.closeEditNewsModal = closeEditNewsModal;
window.filterAdminDocs = filterAdminDocs;
window.adminDeleteDoc = adminDeleteDoc;
window.factoryResetAdminData = factoryResetAdminData;

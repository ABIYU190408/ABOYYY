function loadsidebarCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../assets/css/sidebar.css';
    document.head.appendChild(link);
}

export function loadsidebar() {
    loadsidebarCSS();

    document.getElementById('sidebar').innerHTML = `
    <aside class="sidebar" aria-label="Sidebar">
        <div class="brand">
            <div class="logo"><img src="../assets/img/Logo-Kemendukbangga.png" alt="logo"></div>   
        </div>
        
        <nav class="menu" role="navigation">
            <a href="../index.html">
                <span>📊</span>
                <p>PEMUKTAHIRAN PK</p>
            </a>
            
            <a href="../radalgram_2025.html">
                <span>👥</span>
            <p> RADALGRAM 2025 </p>
            </a>

            <a href="../pekan_edukasi_aceh.html">
                <span>📝</span>
            <p> PEKAN EDUKASI ACEH </p>
            </a>
        </nav>
    </aside>`;
}
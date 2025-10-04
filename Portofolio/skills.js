// Data skill dengan deskripsi
const skillData = {
    'mtcna-card': {
        title: 'MikroTik Certified Network Associate (MTCNA)',
        description: `
            <ul>
                <li>Basic Configuration (Gateway, IP Address, Service dan Port Management Gateway, Bridge, Upgrade dan Downgrade, Disable, Enable, dan Add Package, Management User dan Group)</li>
                <li>Backup (.backup) VS Export (.rsc) & Restore VS import</li>
                <li>Router identity & Mikrotik Misc</li>
                <li>DHCP Server & leases</li>
                <li>Creating bridges/loopback</li>
                <li>Wireless (AP Bridge & Station Bridge)</li>
                <li>Security Profile (Authentication and Encryption)</li>
                <li>Virtual Access Point (Membuat 2 VAP)</li>
                <li>Virtual Akses Point + Router gateway (Repeater)</li>
                <li>Tunnel (EoIP, PPTP, L2TP, PPPoE)</li>
                <li>Routing Static</li>
                <li>Simple Queue</li>
                <li>Firewall Filter Input, Output, dan Forward</li>
                <li>Destination NAT action (dst-nat & redirect)</li>
                <li>Hotspot Login Methods HTTP CHAP/PAP</li>
                <li>Bypass Hotspot Walled garden</li>
                <li>Bypass Hotspot IP binding (regular, bypass, blocked)</li>
            </ul>
        `
    },
    'linux-card': {
    title: 'Debian Linux',
    description: `
        <ul>
            <li>Basic Configuration (system management, Networking, dan hostname)</li>
            <li>SSH (Secure Remote Access dan User Authentication dengan password & key-based)</li>
            <li>Apache Web Server</li>
            <li>Nginx</li>
            <li>Virtual host</li>
            <li>DHCP (Konsep, Konfigurasi, Fixed Address)</li>
            <li>DNS Server (Konsep, Forwarding, Zone File, Reverse)</li>
            <li>MySQL</li>
            <li>Web Mail Server</li>
            <li>WordPress</li>
            <li>Webmin</li>
            <li>Cacti</li>
        </ul>
    `
},
    'cisco-card': {
    title: 'Cisco Packet Tracer',
    description: `
        <ul>
            <li>Basic Configuration Cisco (User Mode, Privilege Mode, Global Configure Mode, Cisco Enhanced Editing Command, Disable IP Domain Lookup, Set Time, Hostname, View Running Config, Viewing, Saving, and Deleting Configurations, Password Configurations)</li>
            <li>Switching Management (Switch Vlan, Vlan Trunking, Dynamic Trunking Protocol, Trunk MLS, Security Port Switch, Spanning Tree Protocol Switch, Enable Telnet Switch, Enable SSH Switch)</li>
            <li>Routing Management (Inter Vlan Routing, DHCP Server Router, DHCP Server Switch MLS, DHCP Relay, Routing Static, Routing Switch MLS, Routing Dynamic EIGRP, Routing Dynamic RIPv2)</li>
        </ul>
    `
},
    'html-css-card': {
        title: 'HTML & CSS',
        description: 'Basic HTML and CSS'
    }
};

// Ambil elemen modal
const modal = document.getElementById('skillModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = document.querySelector('.close');

// Tambahkan event listener ke setiap skill card
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
        const cardId = card.id;
        if (skillData[cardId]) {
            modalTitle.textContent = skillData[cardId].title;
            modalDescription.innerHTML = skillData[cardId].description; // ✅ INI YANG DIUBAH!
            modal.style.display = 'block';
        }
    });
});

// Tutup modal saat klik X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Tutup modal saat klik di luar kotak
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
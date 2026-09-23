const header=document.querySelector('[data-header]');let previousY=window.scrollY;
window.addEventListener('scroll',()=>{const y=window.scrollY;header.classList.toggle('compact',y>70&&y>previousY);previousY=y},{passive:true});

const menuButton=document.querySelector('.menu-button');const mobileMenu=document.querySelector('.mobile-menu');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));mobileMenu.classList.toggle('open',!open)});
mobileMenu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));

const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -45px'});
document.querySelectorAll('.reveal,.reveal-down,.image-reveal').forEach(el=>revealObserver.observe(el));

const sections=[...document.querySelectorAll('main section[id]')];const navLinks=[...document.querySelectorAll('.nav-capsule a')];
const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`))}})},{rootMargin:'-35% 0px -55%'});sections.forEach(section=>navObserver.observe(section));

document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(item=>item.classList.toggle('active',item===button));document.querySelectorAll('.project').forEach(project=>{const show=filter==='all'||project.dataset.category===filter;project.classList.toggle('hidden',!show)})}));

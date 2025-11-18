//particle effects
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// --- DOTS ---
let dotsArray = [];
for (let i = 0; i < 100; i++) {
    dotsArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`
    });
}

function dots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dotsArray.forEach(dot => {
        dot.x += dot.dx;
        dot.y += dot.dy;

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
    });
    requestAnimationFrame(dots);
}

// --- SWIRLS ---
let swirlAngle = 0;
function swirls() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < 50; i++) {
        const radius = i * 5;
        const angle = swirlAngle + i * 0.3;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, angle, angle + Math.PI);
        ctx.strokeStyle = `rgba(${50 + i * 4}, ${100 + i * 3}, 255, 0.5)`;
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    swirlAngle += 0.02;
    requestAnimationFrame(swirls);
}

// --- METABALLS ---
let metaballsArray = [
    { x: 150, y: 150, r: 50, dx: 2, dy: 1.5 },
    { x: 250, y: 200, r: 40, dx: -1.5, dy: 2 },
    { x: 200, y: 300, r: 60, dx: 1, dy: -1.2 }
];

function metaballs() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    metaballsArray.forEach(ball => {
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Bounce off edges
        if (ball.x - ball.r < 0 || ball.x + ball.r > canvas.width) ball.dx *= -1;
        if (ball.y - ball.r < 0 || ball.y + ball.r > canvas.height) ball.dy *= -1;

        const gradient = ctx.createRadialGradient(ball.x, ball.y, 0, ball.x, ball.y, ball.r);
        gradient.addColorStop(0, 'rgba(255,100,150,0.7)');
        gradient.addColorStop(1, 'rgba(255,100,150,0)');
        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(metaballs);
}

// --- Usage ---
//dots();       // animated dots
//swirls();  // animated swirls
//metaballs(); // animated metaballs


//theme colors

const colors = [
    { id: "Creator's Pick", primary: '#ff4b5c', secondary: '#56cfe1', background1: '#f0f0f0', background2: '#d0d0d0', ui: '#000' },
    { id: "Simple Dark", primary: '#ff4b5c', secondary: '#56cfe1', background1: '#242424', background2: '#242424', ui: '#fff' },
    { id: 'Christmas', primary: '#ff0000', secondary: '#00ff00', background1: '#fff5f5', background2: '#f0fff0', ui: '#000' },
    { id: 'Halloween', primary: '#ff8000', secondary: '#000000', background1: '#fff3e0', background2: '#ffe0b3', ui: '#000' },
    { id: 'Dr Pepper', primary: '#8b0000', secondary: '#ff4500', background1: '#f8e0e0', background2: '#f0c0c0', ui: '#000' },
    { id: 'Sprite', primary: '#a0ff00', secondary: '#00ffff', background1: '#e0fff0', background2: '#d0f0e0', ui: '#000' },
    { id: 'Beach Blue', primary: '#00bfff', secondary: '#ffd700', background1: '#e0f7ff', background2: '#c0e0ff', ui: '#000' },
    { id: 'Dark Blue', primary: '#00008b', secondary: '#add8e6', background1: '#e6e6fa', background2: '#d0d0ff', ui: '#000' },
    { id: 'Mint', primary: '#98ff98', secondary: '#00ff7f', background1: '#f0fff0', background2: '#d0ffd0', ui: '#000' },
    { id: '3 am latte', primary: '#cfa67a', secondary: '#805533', background1: '#fff8f0', background2: '#f0e0d0', ui: '#000' },
    { id: 'eyesore', primary: '#ff00ff', secondary: '#00ffff', background1: '#ffff00', background2: '#ff0000', ui: '#000' }
];


//change theme
export function setTheme(themeId) {
    const theme = colors.find(t => t.id === themeId);
    if (!theme) return;

    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--secondary', theme.secondary);
    document.documentElement.style.setProperty('--background1', theme.background1);
    document.documentElement.style.setProperty('--background2', theme.background2);
    document.documentElement.style.setProperty('--ui-color', theme.ui);
    document.documentElement.style.setProperty('--invert-icon', theme.ui === '#000' ? 0 : 1);


    const canvas = document.getElementById('backgroundCanvas');
    if (canvas) {
        canvas.style.backgroundImage = `linear-gradient(to right, ${theme.background1}, ${theme.background2})`;
    }
}
const gif = document.getElementById('gif');
const question = document.getElementById('question');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const sound1 = document.getElementById('bg-music1');
const sound2 = document.getElementById('bg-music2');
const sound3 = document.getElementById('bg-music3');
const sound4 = document.getElementById('bg-music4');

const content = [
  { gif: 'https://i.pinimg.com/originals/7a/ef/73/7aef734a86dce4dc206976d4f0586f2c.gif', message: 'Bà chắc chứ? 😢' },
  { gif: 'https://i.pinimg.com/originals/c8/07/e2/c807e26d8aed392f172f0bf441f60626.gif', message: 'Thử nghĩ lại nha 🥺' },
  { gif: 'https://i.pinimg.com/originals/0d/ac/7e/0dac7e14010362ff081e2167be218341.gif', message: 'Đừng mà, cho tui cơ hội đi 💔' },
  { gif: 'https://i.pinimg.com/originals/88/e7/86/88e786492cc527584feee199936813dd.gif', message: 'Thiệt luôn đó hả? 😭' }
];

let clickCount = 0;

noBtn.addEventListener('click', () => {
  const index = clickCount % content.length;
  gif.src = content[index].gif;
  question.textContent = content[index].message;
  clickCount++;

  // Âm thanh khi bấm No
  if (clickCount <= 3) sound1.play();
  else if (clickCount <= 6) sound2.play();
  else sound3.play();

  // Hiệu ứng rung nút
  noBtn.classList.add('shake');
  setTimeout(() => noBtn.classList.remove('shake'), 600);
});

yesBtn.addEventListener('click', () => {
  question.textContent = 'Tớ biết mà! Tớ cũng thích cậu nhiều lắm ❤️';
  gif.src = 'https://i.pinimg.com/originals/7e/f6/9c/7ef69cd0a6b0b78526c8ce983b3296fc.gif';
  
  noBtn.style.display = 'none';
  yesBtn.style.display = 'none';
  
  // Phát nhạc
  sound4.currentTime = 103.5;
  sound4.play().catch(e => console.log("Lỗi nhạc:", e));

  // Chạy hiệu ứng bay
  setInterval(createHeart, 300);
  setInterval(createNYPhoto, 500);
});

function createHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.className = 'emoji-effect';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 20 + 'px';
  heart.style.position = 'fixed';
  heart.style.bottom = '-50px';
  heart.style.animation = `flyUp ${Math.random() * 2 + 3}s linear forwards`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

function createNYPhoto() {
  
  const photos = ['./ny.png', './em.png', './ai.png', './anh.png']; 

  photos.forEach(path => {
    const img = document.createElement('img');
    img.src = path; 
    img.className = 'ny-fly-effect';
    img.style.left = Math.random() * 100 + 'vw';
    img.style.position = 'fixed';
    img.style.bottom = '-100px';
    
    
    const size = Math.random() * 50 + 70; 
    img.style.width = size + 'px';
    img.style.height = size + 'px';
    img.style.borderRadius = '50%';
    img.style.objectFit = 'cover';
    img.style.animation = `flyUp ${Math.random() * 2 + 4}s linear forwards`;
    
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 6000);
  });




  
  const size = Math.random() * 50 + 70; 
  img.style.width = size + 'px';
  img.style.height = size + 'px';
  img.style.borderRadius = '50%';
  img.style.objectFit = 'cover';
  img.style.animation = `flyUp ${Math.random() * 2 + 4}s linear forwards`;
  
  document.body.appendChild(img);
  setTimeout(() => img.remove(), 6000);
}
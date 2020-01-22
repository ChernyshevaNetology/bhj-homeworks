function setNext(n) {
    const ads = [...document.querySelectorAll(n)];
    const length = ads.length - 1;
    let i = 0;

    return () => {
        ads[i].classList.remove('rotator__case_active');
        i === length ? i = 0 : i++;
        ads[i].classList.add('rotator__case_active');
    }
}

// Первый ротатор
const rotator = setNext('.rotator .rotator__case');
const interval = setInterval(rotator, 1000);

// Второй ротатор
const rotator2 = setNext('.rotator2 .rotator__case');
const interval2 = setInterval(rotator2, 1500);

// третий ротатор
const rotator3 = setNext('.rotator3 .rotator__case');
const interval3 = setInterval(rotator3, 2000);

// четвертый ротатор
const rotator4 = setNext('.rotator4 .rotator__case');
const interval4 = setInterval(rotator4, 300);

// пятый ротатор
const rotator5 = setNext('.rotator5 .rotator__case');
const interval5 = setInterval(rotator5, 500);
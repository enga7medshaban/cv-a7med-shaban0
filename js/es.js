// نص التحية واسم المستخدم
let greetingText = "Hi, I'm ";
let nameText = "Ahmed Shaban Hassan";
let index = 0;

// دالة لكتابة نص التحية
function typeGreeting() {
    if (index < greetingText.length) {
        document.querySelector('.greeting').innerHTML += greetingText.charAt(index);
        index++;
        setTimeout(typeGreeting, 100);
    } else {
        typeName(); // استدعاء دالة كتابة الاسم بعد الانتهاء من التحية
    }
}

// دالة لكتابة اسم المستخدم
function typeName() {
    let nameIndex = 0;
    function typeNext() {
        if (nameIndex < nameText.length) {
            document.querySelector('.name').innerHTML += nameText.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeNext, 100);
        }
    }
    typeNext();
}

// دالة تعبئة شريط التقدم
function fillProgressBar(selector, targetValue) {
    let progressBar = document.querySelector(selector);
    let currentValue = 0;

    let interval = setInterval(() => {
        if (currentValue >= targetValue) {
            clearInterval(interval); // إيقاف العد عند الوصول إلى القيمة المستهدفة
        } else {
            currentValue++;
            progressBar.style.width = currentValue + '%';
            progressBar.setAttribute('aria-valuenow', currentValue);
            progressBar.textContent = currentValue + '%';
        }
    }, 50); // يتم تحديث شريط التقدم كل 50 مللي ثانية
}

// دالة لتبديل المظهر
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-theme");

    // تغيير الأيقونات حسب الوضع
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");

    if (isDarkMode) {
        body.style.backgroundColor = "black"; // لون الخلفية الأسود
        body.style.color = "white"; // لون النص الأبيض
        sunIcon.style.display = "none"; // إخفاء أيقونة الشمس
        moonIcon.style.display = "block"; // إظهار أيقونة القمر
    } else {
        body.style.backgroundColor = "white"; // لون الخلفية الأبيض
        body.style.color = "black"; // لون النص الأسود
        sunIcon.style.display = "block"; // إظهار أيقونة الشمس
        moonIcon.style.display = "none"; // إخفاء أيقونة القمر
    }
}

// عند تحميل الصفحة
window.onload = function() {
    typeGreeting(); // استدعاء دالة التحية عند تحميل الصفحة
    fillProgressBar('.progress-bar-english', 70); // الإنجليزية 70%
    fillProgressBar('.progress-bar-arabic', 100); // العربية 100%
}

// إضافة حدث للنقر على الأيقونة لتغيير المظهر
document.getElementById("toggleTheme").addEventListener("click", function(e) {
    e.preventDefault(); // منع الرابط من الانتقال
    toggleTheme(); // استدعاء دالة تغيير المظهر
});
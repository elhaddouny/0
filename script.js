
// بيانات الأسئلة لكل نوع إدمان
const addictionQuestions = {
    phone: [
        {
            question: "كم ساعة تقضي يومياً في استخدام الهاتف؟",
            options: [
                { text: "أقل من ساعتين", value: 0 },
                { text: "2-4 ساعات", value: 1 },
                { text: "4-6 ساعات", value: 2 },
                { text: "6-8 ساعات", value: 3 },
                { text: "أكثر من 8 ساعات", value: 4 }
            ]
        },
        {
            question: "هل تشعر بالقلق عندما لا يكون هاتفك معك؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تتفقد هاتفك فور استيقاظك من النوم؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل يؤثر استخدام الهاتف على نومك؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تشعر بالحاجة لزيادة وقت استخدام الهاتف للشعور بالرضا؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل يؤثر استخدام الهاتف على علاقاتك الاجتماعية؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تشعر بالذنب بسبب الوقت الذي تقضيه على الهاتف؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        }
    ],
    porn: [
        {
            question: "كم مرة تشاهد المحتوى الإباحي أسبوعياً؟",
            options: [
                { text: "لا أشاهد", value: 0 },
                { text: "مرة واحدة أو أقل", value: 1 },
                { text: "2-3 مرات", value: 2 },
                { text: "4-6 مرات", value: 3 },
                { text: "يومياً أو أكثر", value: 4 }
            ]
        },
        {
            question: "هل تشعر بالحاجة لمشاهدة محتوى أكثر إثارة مع الوقت؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تؤثر مشاهدة هذا المحتوى على علاقاتك العاطفية؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تشعر بالذنب أو الخجل بعد المشاهدة؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تجد صعوبة في التوقف عن المشاهدة؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تؤثر هذه العادة على إنتاجيتك في العمل أو الدراسة؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تشاهد هذا المحتوى كوسيلة للهروب من المشاكل؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        }
    ],
    smoking: [
        {
            question: "كم سيجارة تدخن يومياً؟",
            options: [
                { text: "لا أدخن", value: 0 },
                { text: "1-5 سجائر", value: 1 },
                { text: "6-10 سجائر", value: 2 },
                { text: "11-20 سيجارة", value: 3 },
                { text: "أكثر من 20 سيجارة", value: 4 }
            ]
        },
        {
            question: "متى تدخن أول سيجارة بعد الاستيقاظ؟",
            options: [
                { text: "لا أدخن", value: 0 },
                { text: "بعد ساعة أو أكثر", value: 1 },
                { text: "خلال 31-60 دقيقة", value: 2 },
                { text: "خلال 6-30 دقيقة", value: 3 },
                { text: "خلال 5 دقائق", value: 4 }
            ]
        },
        {
            question: "هل تجد صعوبة في عدم التدخين في الأماكن الممنوعة؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تدخن أكثر في الساعات الأولى من اليوم؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تدخن حتى عندما تكون مريضاً؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تشعر بالقلق عند نفاد السجائر؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل حاولت الإقلاع عن التدخين من قبل؟",
            options: [
                { text: "لا أدخن", value: 0 },
                { text: "لم أحاول", value: 1 },
                { text: "مرة واحدة", value: 2 },
                { text: "عدة مرات", value: 3 },
                { text: "مرات كثيرة وفشلت", value: 4 }
            ]
        }
    ],
    social: [
        {
            question: "كم ساعة تقضي يومياً على وسائل التواصل الاجتماعي؟",
            options: [
                { text: "أقل من ساعة", value: 0 },
                { text: "1-2 ساعة", value: 1 },
                { text: "2-4 ساعات", value: 2 },
                { text: "4-6 ساعات", value: 3 },
                { text: "أكثر من 6 ساعات", value: 4 }
            ]
        },
        {
            question: "هل تتفقد وسائل التواصل فور استيقاظك؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تشعر بالقلق عندما لا تحصل على إعجابات أو تعليقات؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تقارن نفسك بالآخرين على وسائل التواصل؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تؤثر وسائل التواصل على نومك؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تشعر بالحاجة لنشر كل ما تفعله؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        },
        {
            question: "هل تؤثر وسائل التواصل على علاقاتك الحقيقية؟",
            options: [
                { text: "لا أبداً", value: 0 },
                { text: "نادراً", value: 1 },
                { text: "أحياناً", value: 2 },
                { text: "غالباً", value: 3 },
                { text: "دائماً", value: 4 }
            ]
        }
    ]
};

// بيانات التحليل والخطط العلاجية
const analysisData = {
    normal: {
        title: "لا وجود للإدمان (طبيعي)",
        analysis: "تظهر النتائج أن سلوكك طبيعي وصحي. أنت تتحكم في استخدامك ولا تظهر علامات الإدمان. استمر في هذا النهج المتوازن.",
        plan: [
            "حافظ على الروتين الصحي الحالي",
            "كن واعياً لأي تغييرات في سلوكك",
            "شارك تجربتك مع الآخرين لمساعدتهم"
        ],
        resource: "💡 اقرأ: 'Digital Minimalism' لكال نيوبورت"
    },
    mild: {
        title: "بداية تعلق",
        analysis: "تظهر بعض علامات التعلق المبكر. هذا وقت مثالي للتدخل الوقائي قبل أن يتطور السلوك إلى إدمان حقيقي. الوعي هو الخطوة الأولى للتغيير.",
        plan: [
            "ضع حدود زمنية واضحة للاستخدام",
            "أنشئ أنشطة بديلة ممتعة",
            "مارس تقنيات الاسترخاء والتأمل"
        ],
        resource: "💡 جرب تطبيق: 'Forest' لإدارة الوقت"
    },
    severe: {
        title: "سلوك إدماني متقدم",
        analysis: "تظهر النتائج وجود سلوك إدماني يحتاج لتدخل جدي. هذا السلوك قد يؤثر على جوانب مهمة من حياتك. لا تتردد في طلب المساعدة المهنية.",
        plan: [
            "اطلب المساعدة من مختص نفسي",
            "أزل المحفزات من بيئتك تدريجياً",
            "انضم لمجموعة دعم أو ابحث عن شريك للمساءلة"
        ],
        resource: "💡 اقرأ: 'Atomic Habits' لجيمس كلير"
    }
};

// المتغيرات العامة
let currentQuestions = [];
let currentAddictionType = '';

// عناصر DOM
const addictionTypeSelect = document.getElementById('addictionType');
const questionsSection = document.getElementById('questions-section');
const calculateBtn = document.getElementById('calculate-btn');
const resultSection = document.getElementById('result-section');

// إضافة مستمع للأحداث
addictionTypeSelect.addEventListener('change', loadQuestions);
calculateBtn.addEventListener('click', calculateResult);

// تحميل الأسئلة بناءً على نوع الإدمان المختار
function loadQuestions() {
    currentAddictionType = addictionTypeSelect.value;
    currentQuestions = addictionQuestions[currentAddictionType];
    
    questionsSection.innerHTML = '';
    resultSection.style.display = 'none';
    
    currentQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.style.animationDelay = `${index * 0.1}s`;
        
        questionDiv.innerHTML = `
            <h3>${q.question}</h3>
            <div class="question-options">
                ${q.options.map((option, optionIndex) => `
                    <div class="option">
                        <input type="radio" id="q${index}_o${optionIndex}" name="question_${index}" value="${option.value}">
                        <label for="q${index}_o${optionIndex}">${option.text}</label>
                    </div>
                `).join('')}
            </div>
        `;
        
        questionsSection.appendChild(questionDiv);
    });
    
    calculateBtn.style.display = 'block';
}

// حساب النتيجة وعرض التحليل
function calculateResult() {
    let totalScore = 0;
    let answeredQuestions = 0;
    
    currentQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question_${index}"]:checked`);
        if (selectedOption) {
            totalScore += parseInt(selectedOption.value);
            answeredQuestions++;
        }
    });
    
    if (answeredQuestions < currentQuestions.length) {
        alert('يرجى الإجابة على جميع الأسئلة');
        return;
    }
    
    const maxPossibleScore = currentQuestions.length * 4;
    const percentage = Math.round((totalScore / maxPossibleScore) * 100);
    
    let category;
    if (percentage <= 29) {
        category = 'normal';
    } else if (percentage <= 59) {
        category = 'mild';
    } else {
        category = 'severe';
    }
    
    displayResult(percentage, category);
}

// عرض النتيجة والتحليل
function displayResult(percentage, category) {
    const data = analysisData[category];
    
    resultSection.innerHTML = `
        <div class="result-percentage">${percentage}%</div>
        <div class="result-category ${category}">${data.title}</div>
        
        <div class="result-analysis">
            <h4>📝 التحليل النفسي:</h4>
            <p>${data.analysis}</p>
        </div>
        
        <div class="result-plan">
            <h4>🔧 خطتك العلاجية:</h4>
            <ol>
                ${data.plan.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
        
        <div class="result-resource">
            ${data.resource}
        </div>
    `;
    
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// تحميل الأسئلة الافتراضية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    loadQuestions();
});


// Global Variables
let currentAddictionType = '';
let currentQuestionIndex = 0;
let userAnswers = [];
let questions = [];
let totalScore = 0;

// Assessment Data
const assessmentData = {
    phone: {
        title: 'تقييم إدمان الهاتف الذكي',
        icon: 'fas fa-mobile-alt',
        questions: [
            {
                text: 'كم ساعة تقضي يومياً في استخدام الهاتف الذكي؟',
                options: [
                    { text: 'أقل من ساعتين', score: 1 },
                    { text: 'من 2-4 ساعات', score: 2 },
                    { text: 'من 4-6 ساعات', score: 3 },
                    { text: 'من 6-8 ساعات', score: 4 },
                    { text: 'أكثر من 8 ساعات', score: 5 }
                ]
            },
            {
                text: 'هل تشعر بالقلق أو التوتر عندما لا يكون هاتفك معك؟',
                options: [
                    { text: 'لا أشعر بأي قلق', score: 1 },
                    { text: 'قلق طفيف', score: 2 },
                    { text: 'قلق متوسط', score: 3 },
                    { text: 'قلق شديد', score: 4 },
                    { text: 'قلق مفرط وذعر', score: 5 }
                ]
            },
            {
                text: 'كم مرة تتفقد هاتفك في الساعة الواحدة؟',
                options: [
                    { text: 'مرة أو مرتين', score: 1 },
                    { text: '3-5 مرات', score: 2 },
                    { text: '6-10 مرات', score: 3 },
                    { text: '11-20 مرة', score: 4 },
                    { text: 'أكثر من 20 مرة', score: 5 }
                ]
            },
            {
                text: 'هل يؤثر استخدام الهاتف على نومك؟',
                options: [
                    { text: 'لا يؤثر إطلاقاً', score: 1 },
                    { text: 'يؤثر قليلاً', score: 2 },
                    { text: 'يؤثر أحياناً', score: 3 },
                    { text: 'يؤثر كثيراً', score: 4 },
                    { text: 'يمنعني من النوم', score: 5 }
                ]
            },
            {
                text: 'هل تستخدم الهاتف أثناء تناول الطعام؟',
                options: [
                    { text: 'لا أبداً', score: 1 },
                    { text: 'نادراً', score: 2 },
                    { text: 'أحياناً', score: 3 },
                    { text: 'غالباً', score: 4 },
                    { text: 'دائماً', score: 5 }
                ]
            },
            {
                text: 'هل يؤثر استخدام الهاتف على علاقاتك الاجتماعية؟',
                options: [
                    { text: 'لا يؤثر', score: 1 },
                    { text: 'يؤثر قليلاً', score: 2 },
                    { text: 'يؤثر أحياناً', score: 3 },
                    { text: 'يؤثر كثيراً', score: 4 },
                    { text: 'يدمر علاقاتي', score: 5 }
                ]
            },
            {
                text: 'هل تشعر بالحاجة لاستخدام الهاتف حتى لو لم تتلق إشعارات؟',
                options: [
                    { text: 'لا أشعر بذلك', score: 1 },
                    { text: 'نادراً', score: 2 },
                    { text: 'أحياناً', score: 3 },
                    { text: 'غالباً', score: 4 },
                    { text: 'دائماً', score: 5 }
                ]
            },
            {
                text: 'هل تستخدم الهاتف في الحمام؟',
                options: [
                    { text: 'لا أبداً', score: 1 },
                    { text: 'نادراً', score: 2 },
                    { text: 'أحياناً', score: 3 },
                    { text: 'غالباً', score: 4 },
                    { text: 'دائماً', score: 5 }
                ]
            },
            {
                text: 'هل تشعر بالملل أو الفراغ عندما لا تستخدم الهاتف؟',
                options: [
                    { text: 'لا أشعر بذلك', score: 1 },
                    { text: 'قليلاً', score: 2 },
                    { text: 'أحياناً', score: 3 },
                    { text: 'كثيراً', score: 4 },
                    { text: 'دائماً', score: 5 }
                ]
            },
            {
                text: 'هل تستخدم الهاتف أثناء القيادة أو المشي؟',
                options: [
                    { text: 'لا أبداً', score: 1 },
                    { text: 'نادراً', score: 2 },
                    { text: 'أحياناً', score: 3 },
                    { text: 'غالباً', score: 4 },
                    { text: 'دائماً', score: 5 }
                ]
            },
            {
                text: 'هل تشعر بالغضب أو الانزعاج عندما ينقطع الإنترنت؟',
                options: [
                    { text: 'لا أتأثر', score: 1 },
                    { text: 'انزعاج طفيف', score: 2 },
                    { text: 'انزعاج متوسط', score: 3 },
                    { text: 'انزعاج شديد', score: 4 },
                    { text: 'غضب شديد', score: 5 }
                ]
            },
            {
                text: 'هل تؤجل المهام المهمة بسبب استخدام الهاتف؟',
                options: [
                    { text: 'لا أبداً', score: 1 },
                    { text: 'نادراً', score: 2 },
                    { text: 'أحياناً', score: 3 },
                    { text: 'غالباً', score: 4 },
                    { text: 'دائماً', score: 5 }
                ]
            },
            {
                text: 'هل تستيقظ ليلاً لتفقد الهاتف؟',
                options: [
                    { text: 'لا أبداً', score: 1 },
                    { text: 'نادراً', score: 2 },
                    { text: 'أحياناً', score: 3 },
                    { text: 'غالباً', score: 4 },
                    { text: 'كل ليلة', score: 5 }
                ]
            },
            {
                text: 'هل تشعر بأعراض جسدية (صداع، ألم في الرقبة) من كثرة استخدام الهاتف؟',
                options: [
                    { text: 'لا أشعر بأعراض', score: 1 },
                    { text: 'أعراض طفيفة', score: 2 },
                    { text: 'أعراض متوسطة', score: 3 },
                    { text: 'أعراض شديدة', score: 4 },
                    { text: 'أعراض مؤلمة جداً', score: 5 }
                ]
            },
            {
                text: 'هل حاولت تقليل استخدام الهاتف ولم تنجح؟',
                options: [
                    { text: 'لم أحاول', score: 1 },
                    { text: 'حاولت ونجحت', score: 2 },
                    { text: 'حاولت وفشلت مرة', score: 3 },
                    { text: 'حاولت وفشلت عدة مرات', score: 4 },
                    { text: 'حاولت كثيراً ولم أنجح', score: 5 }
                ]
            }
        ],
        maxScore: 75
    },
    porn: {
        title: 'تقييم إدمان المحتوى الإباحي',
        icon: 'fas fa-eye-slash',
        questions: [
            {
                text: 'كم مرة تشاهد المحتوى الإباحي في الأسبوع؟',
                options: [
                    { text: 'لا أشاهد', score: 0 },
                    { text: 'مرة واحدة أو أقل', score: 1 },
                    { text: '2-3 مرات', score: 3 },
                    { text: '4-6 مرات', score: 4 },
                    { text: 'يومياً أو أكثر', score: 6 }
                ]
            },
            {
                text: 'كم من الوقت تقضي في المشاهدة في كل مرة؟',
                options: [
                    { text: 'لا أشاهد', score: 0 },
                    { text: 'أقل من 15 دقيقة', score: 1 },
                    { text: '15-30 دقيقة', score: 2 },
                    { text: '30-60 دقيقة', score: 4 },
                    { text: 'أكثر من ساعة', score: 6 }
                ]
            },
            {
                text: 'هل تشعر بالذنب أو الخجل بعد المشاهدة؟',
                options: [
                    { text: 'لا أشعر بذلك', score: 1 },
                    { text: 'أحياناً', score: 2 },
                    { text: 'غالباً', score: 4 },
                    { text: 'دائماً', score: 5 },
                    { text: 'شعور مدمر', score: 6 }
                ]
            },
            {
                text: 'هل يؤثر هذا السلوك على علاقاتك العاطفية؟',
                options: [
                    { text: 'لا يؤثر', score: 1 },
                    { text: 'يؤثر قليلاً', score: 2 },
                    { text: 'يؤثر أحياناً', score: 4 },
                    { text: 'يؤثر كثيراً', score: 5 },
                    { text: 'يدمر علاقاتي', score: 6 }
                ]
            },
            {
                text: 'هل تحتاج لمحتوى أكثر إثارة مع الوقت؟',
                options: [
                    { text: 'لا', score: 1 },
                    { text: 'أحياناً', score: 2 },
                    { text: 'غالباً', score: 4 },
                    { text: 'دائماً', score: 5 },
                    { text: 'أبحث عن محتوى متطرف', score: 6 }
                ]
            },
            {
                text: 'هل تشاهد المحتوى في أوقات غير مناسبة (العمل، الدراسة)؟',
                options: [
                    { text: 'لا أبداً', score: 1 },
                    { text: 'نادراً', score: 2 },
                    { text: 'أحياناً', score: 4 },
                    { text: 'غالباً', score: 5 },
                    { text: 'دائماً', score: 6 }
                ]
            },
            {
                text: 'هل حاولت التوقف ولم تستطع؟',
                options: [
                    { text: 'لم أحاول', score: 1 },
                    { text: 'حاولت ونجحت', score: 1 },
                    { text: 'حاولت وفشلت مرة', score: 3 },
                    { text: 'حاولت وفشلت عدة مرات', score: 5 },
                    { text: 'حاولت كثيراً ولم أنجح', score: 6 }
                ]
            },
            {
                text: 'هل تشعر بالقلق أو التوتر عندما لا تستطيع المشاهدة؟',
                options: [
                    { text: 'لا أشعر بذلك', score: 1 },
                    { text: 'قلق طفيف', score: 2 },
                    { text: 'قلق متوسط', score: 4 },
                    { text: 'قلق شديد', score: 5 },
                    { text: 'قلق مفرط', score: 6 }
                ]
            },
            {
                text: 'هل يؤثر هذا السلوك على أداءك في العمل أو الدراسة؟',
                options: [
                    { text: 'لا يؤثر', score: 1 },
                    { text: 'يؤثر قليلاً', score: 2 },
                    { text: 'يؤثر أحياناً', score: 4 },
                    { text: 'يؤثر كثيراً', score: 5 },
                    { text: 'يدمر أدائي', score: 6 }
                ]
            },
            {
                text: 'هل تكذب على الآخرين حول هذا السلوك؟',
                options: [
                    { text: 'لا أكذب', score: 1 },
                    { text: 'أحياناً', score: 2 },
                    { text: 'غالباً', score: 4 },
                    { text: 'دائماً', score: 5 },
                    { text: 'أخفي الأمر تماماً', score: 6 }
                ]
            },
            {
                text: 'هل تشعر بأن هذا السلوك يسيطر على حياتك؟',
                options: [
                    { text: 'لا أشعر بذلك', score: 1 },
                    { text: 'أحياناً', score: 2 },
                    { text: 'غالباً', score: 4 },
                    { text: 'دائماً', score: 5 },
                    { text: 'يسيطر تماماً', score: 6 }
                ]
            },
            {
                text: 'هل تفضل المحتوى الإباحي على العلاقات الحقيقية؟',
                options: [
                    { text: 'لا أبداً', score: 1 },
                    { text: 'نادراً', score: 2 },
                    { text: 'أحياناً', score: 4 },
                    { text: 'غالباً', score: 5 },
                    { text: 'دائماً', score: 6 }
                ]
            }
        ],
        maxScore: 72
    },
    smoking: {
        title: 'تقييم إدمان التدخين (مقياس فاجرستروم)',
        icon: 'fas fa-smoking-ban',
        questions: [
            {
                text: 'كم سيجارة تدخن يومياً؟',
                options: [
                    { text: 'لا أدخن', score: 0 },
                    { text: '1-10 سجائر', score: 1 },
                    { text: '11-20 سيجارة', score: 2 },
                    { text: '21-30 سيجارة', score: 3 },
                    { text: 'أكثر من 30 سيجارة', score: 4 }
                ]
            },
            {
                text: 'متى تدخن أول سيجارة بعد الاستيقاظ؟',
                options: [
                    { text: 'لا أدخن', score: 0 },
                    { text: 'بعد ساعة أو أكثر', score: 1 },
                    { text: 'خلال 31-60 دقيقة', score: 2 },
                    { text: 'خلال 6-30 دقيقة', score: 3 },
                    { text: 'خلال 5 دقائق', score: 4 }
                ]
            },
            {
                text: 'هل تجد صعوبة في عدم التدخين في الأماكن المحظورة؟',
                options: [
                    { text: 'لا أدخن', score: 0 },
                    { text: 'لا توجد صعوبة', score: 1 },
                    { text: 'صعوبة قليلة', score: 2 },
                    { text: 'صعوبة كبيرة', score: 3 },
                    { text: 'صعوبة شديدة جداً', score: 4 }
                ]
            },
            {
                text: 'أي سيجارة تكره التخلي عنها أكثر؟',
                options: [
                    { text: 'لا أدخن', score: 0 },
                    { text: 'أي سيجارة أخرى', score: 1 },
                    { text: 'سيجارة المساء', score: 2 },
                    { text: 'سيجارة بعد الطعام', score: 3 },
                    { text: 'أول سيجارة في الصباح', score: 4 }
                ]
            },
            {
                text: 'هل تدخن أكثر في الساعات الأولى من الاستيقاظ؟',
                options: [
                    { text: 'لا أدخن', score: 0 },
                    { text: 'لا', score: 1 },
                    { text: 'قليلاً أكثر', score: 2 },
                    { text: 'أكثر بوضوح', score: 3 },
                    { text: 'أكثر بكثير', score: 4 }
                ]
            },
            {
                text: 'هل تدخن حتى لو كنت مريضاً في الفراش؟',
                options: [
                    { text: 'لا أدخن', score: 0 },
                    { text: 'لا أبداً', score: 1 },
                    { text: 'نادراً', score: 2 },
                    { text: 'أحياناً', score: 3 },
                    { text: 'دائماً', score: 4 }
                ]
            },
            {
                text: 'هل تشعر بالقلق أو التوتر عندما لا تستطيع التدخين؟',
                options: [
                    { text: 'لا أشعر بذلك', score: 1 },
                    { text: 'قلق طفيف', score: 2 },
                    { text: 'قلق متوسط', score: 3 },
                    { text: 'قلق شديد', score: 4 },
                    { text: 'قلق مفرط', score: 5 }
                ]
            },
            {
                text: 'هل حاولت الإقلاع عن التدخين من قبل؟',
                options: [
                    { text: 'لم أحاول', score: 1 },
                    { text: 'حاولت ونجحت', score: 1 },
                    { text: 'حاولت وفشلت مرة', score: 2 },
                    { text: 'حاولت وفشلت عدة مرات', score: 4 },
                    { text: 'حاولت كثيراً ولم أنجح', score: 5 }
                ]
            },
            {
                text: 'هل تشعر بأعراض انسحاب عند عدم التدخين؟',
                options: [
                    { text: 'لا أشعر بأعراض', score: 1 },
                    { text: 'أعراض طفيفة', score: 2 },
                    { text: 'أعراض متوسطة', score: 3 },
                    { text: 'أعراض شديدة', score: 4 },
                    { text: 'أعراض لا تحتمل', score: 5 }
                ]
            },
            {
                text: 'هل يؤثر التدخين على صحتك وتستمر رغم ذلك؟',
                options: [
                    { text: 'لا يؤثر على صحتي', score: 1 },
                    { text: 'يؤثر قليلاً ولكن أستطيع التوقف', score: 2 },
                    { text: 'يؤثر ولكن أجد صعوبة في التوقف', score: 3 },
                    { text: 'يؤثر كثيراً ولا أستطيع التوقف', score: 4 },
                    { text: 'يدمر صحتي ولا أستطيع التوقف', score: 5 }
                ]
            }
        ],
        maxScore: 60
    }
};

// Treatment Plans
const treatmentPlans = {
    phone: {
        low: {
            title: 'مستوى منخفض - إدارة وقائية',
            steps: [
                {
                    title: 'تنظيم وقت الاستخدام',
                    description: 'حدد أوقات معينة لاستخدام الهاتف وتجنب استخدامه قبل النوم بساعة'
                },
                {
                    title: 'تطبيقات المراقبة',
                    description: 'استخدم تطبيقات مثل Screen Time أو Digital Wellbeing لمراقبة استخدامك'
                },
                {
                    title: 'أنشطة بديلة',
                    description: 'اشغل وقتك بأنشطة أخرى مثل القراءة أو الرياضة أو الهوايات'
                }
            ],
            recommendations: [
                'ضع الهاتف في غرفة أخرى أثناء النوم',
                'استخدم منبه عادي بدلاً من الهاتف',
                'خصص أوقات خالية من التكنولوجيا يومياً'
            ]
        },
        medium: {
            title: 'مستوى متوسط - تدخل سلوكي',
            steps: [
                {
                    title: 'العلاج السلوكي المعرفي',
                    description: 'تعلم تقنيات CBT لتغيير الأفكار والسلوكيات المرتبطة بالهاتف'
                },
                {
                    title: 'تقنيات الاسترخاء',
                    description: 'مارس تقنيات التنفس العميق والتأمل لتقليل القلق'
                },
                {
                    title: 'إعادة هيكلة البيئة',
                    description: 'غير ترتيب التطبيقات وأزل الإشعارات غير الضرورية'
                },
                {
                    title: 'الدعم الاجتماعي',
                    description: 'اطلب المساعدة من الأصدقاء والعائلة لمراقبة استخدامك'
                }
            ],
            recommendations: [
                'انضم لمجموعات دعم رقمية',
                'استخدم تطبيقات حجب المواقع',
                'مارس الرياضة بانتظام لتقليل التوتر',
                'احتفظ بمذكرة لتسجيل مشاعرك وأفكارك'
            ]
        },
        high: {
            title: 'مستوى عالي - علاج متخصص',
            steps: [
                {
                    title: 'استشارة طبية متخصصة',
                    description: 'راجع طبيب نفسي متخصص في إدمان التكنولوجيا'
                },
                {
                    title: 'برنامج إعادة تأهيل',
                    description: 'التحق ببرنامج علاجي متخصص لإدمان الهواتف الذكية'
                },
                {
                    title: 'العلاج الجماعي',
                    description: 'شارك في جلسات علاج جماعي مع أشخاص يواجهون نفس المشكلة'
                },
                {
                    title: 'خطة طوارئ',
                    description: 'ضع خطة واضحة للتعامل مع الرغبة الشديدة في استخدام الهاتف'
                }
            ],
            recommendations: [
                'فكر في استخدام هاتف أساسي مؤقتاً',
                'احصل على دعم من معالج نفسي',
                'انضم لبرامج إعادة التأهيل الرقمي',
                'استخدم أدوية مضادة للقلق إذا وصفها الطبيب'
            ]
        }
    },
    porn: {
        low: {
            title: 'مستوى منخفض - وقاية وتوعية',
            steps: [
                {
                    title: 'التوعية بالمخاطر',
                    description: 'تعلم عن التأثيرات السلبية للمحتوى الإباحي على الدماغ والعلاقات'
                },
                {
                    title: 'فلاتر الحماية',
                    description: 'استخدم برامج حجب المحتوى الإباحي على جميع أجهزتك'
                },
                {
                    title: 'أنشطة بديلة',
                    description: 'اشغل وقت فراغك بأنشطة إيجابية ومفيدة'
                }
            ],
            recommendations: [
                'مارس الرياضة بانتظام',
                'اقرأ كتب تطوير الذات',
                'تواصل مع الأصدقاء والعائلة',
                'تعلم مهارات جديدة'
            ]
        },
        medium: {
            title: 'مستوى متوسط - تدخل علاجي',
            steps: [
                {
                    title: 'العلاج السلوكي المعرفي',
                    description: 'تعلم تقنيات CBT لتغيير الأفكار والسلوكيات الإدمانية'
                },
                {
                    title: 'تقنيات إدارة الرغبة',
                    description: 'تعلم كيفية التعامل مع الرغبة الشديدة والمحفزات'
                },
                {
                    title: 'بناء عادات صحية',
                    description: 'طور روتين يومي صحي يتضمن النوم الجيد والتغذية السليمة'
                },
                {
                    title: 'الدعم النفسي',
                    description: 'احصل على دعم من مجموعات المساعدة الذاتية'
                }
            ],
            recommendations: [
                'انضم لمجموعات دعم مثل SAA أو SLAA',
                'احتفظ بمذكرة يومية لتتبع تقدمك',
                'مارس التأمل والاسترخاء',
                'تجنب المحفزات والمواقف الخطيرة'
            ]
        },
        high: {
            title: 'مستوى عالي - علاج متخصص فوري',
            steps: [
                {
                    title: 'استشارة طبية عاجلة',
                    description: 'راجع طبيب نفسي متخصص في الإدمان الجنسي فوراً'
                },
                {
                    title: 'برنامج إعادة تأهيل',
                    description: 'التحق ببرنامج علاجي مكثف للإدمان الجنسي'
                },
                {
                    title: 'العلاج الدوائي',
                    description: 'قد تحتاج لأدوية مضادة للاكتئاب أو مثبطات الرغبة'
                },
                {
                    title: 'علاج الصدمات',
                    description: 'عالج أي صدمات نفسية قد تكون سبباً في الإدمان'
                }
            ],
            recommendations: [
                'احصل على دعم من معالج متخصص',
                'فكر في الإقامة في مركز علاجي',
                'أشرك شريك حياتك في العلاج إذا أمكن',
                'تجنب الإنترنت إلا للضرورة القصوى'
            ]
        }
    },
    smoking: {
        low: {
            title: 'مستوى منخفض - إقلاع تدريجي',
            steps: [
                {
                    title: 'التقليل التدريجي',
                    description: 'قلل عدد السجائر تدريجياً بمعدل 1-2 سيجارة أسبوعياً'
                },
                {
                    title: 'تحديد المحفزات',
                    description: 'حدد المواقف التي تدفعك للتدخين وتجنبها'
                },
                {
                    title: 'بدائل صحية',
                    description: 'استخدم بدائل مثل العلكة أو المسواك عند الرغبة في التدخين'
                }
            ],
            recommendations: [
                'اشرب الماء بكثرة',
                'مارس الرياضة الخفيفة',
                'تناول وجبات صحية منتظمة',
                'احصل على دعم من الأصدقاء والعائلة'
            ]
        },
        medium: {
            title: 'مستوى متوسط - علاج طبي مساعد',
            steps: [
                {
                    title: 'استشارة طبية',
                    description: 'راجع طبيب للحصول على خطة إقلاع مناسبة'
                },
                {
                    title: 'العلاج ببدائل النيكوتين',
                    description: 'استخدم لصقات أو علكة النيكوتين تحت إشراف طبي'
                },
                {
                    title: 'العلاج السلوكي',
                    description: 'تعلم تقنيات التعامل مع الرغبة والتوتر'
                },
                {
                    title: 'مجموعات الدعم',
                    description: 'انضم لمجموعات دعم الإقلاع عن التدخين'
                }
            ],
            recommendations: [
                'حدد تاريخ للإقلاع والتزم به',
                'تجنب الأماكن التي تذكرك بالتدخين',
                'مارس تقنيات الاسترخاء',
                'احتفل بإنجازاتك الصغيرة'
            ]
        },
        high: {
            title: 'مستوى عالي - علاج طبي مكثف',
            steps: [
                {
                    title: 'استشارة طبية فورية',
                    description: 'راجع طبيب متخصص في علاج إدمان النيكوتين'
                },
                {
                    title: 'العلاج الدوائي',
                    description: 'قد تحتاج لأدوية مثل Varenicline أو Bupropion'
                },
                {
                    title: 'برنامج إقلاع مكثف',
                    description: 'التحق ببرنامج علاجي مكثف للإقلاع عن التدخين'
                },
                {
                    title: 'متابعة طبية دورية',
                    description: 'احصل على متابعة طبية منتظمة لمراقبة التقدم'
                }
            ],
            recommendations: [
                'فكر في الإقامة في مركز علاجي',
                'احصل على دعم نفسي متخصص',
                'استخدم تطبيقات مساعدة للإقلاع',
                'تجنب المدخنين والأماكن المرتبطة بالتدخين'
            ]
        }
    }
};

// Navigation Functions
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    if (sectionId === 'home') {
        document.querySelector('.nav-link[href="#home"]').classList.add('active');
    } else if (sectionId === 'about') {
        document.querySelector('.nav-link[href="#about"]').classList.add('active');
    }
}

function showHome() {
    showSection('home');
}

function showAddictionTypes() {
    showSection('addiction-types');
}

function showAbout() {
    showSection('about');
}

// Assessment Functions
function startAssessment(addictionType) {
    currentAddictionType = addictionType;
    currentQuestionIndex = 0;
    userAnswers = [];
    totalScore = 0;
    questions = assessmentData[addictionType].questions;
    
    // Update assessment title
    document.getElementById('assessment-title').textContent = assessmentData[addictionType].title;
    
    // Show assessment section
    showSection('assessment');
    
    // Load first question
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const totalQuestions = questions.length;
    
    // Update progress
    const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = progressPercent + '%';
    document.getElementById('progress-text').textContent = `${currentQuestionIndex + 1} / ${totalQuestions}`;
    
    // Update question text
    document.getElementById('question-text').textContent = question.text;
    
    // Create options
    const optionsContainer = document.getElementById('question-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option.text;
        optionBtn.onclick = () => selectOption(index, optionBtn);
        optionsContainer.appendChild(optionBtn);
    });
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = true;
    document.getElementById('finish-btn').style.display = 'none';
    
    // Add fade-in animation
    document.getElementById('question-card').classList.add('fade-in');
    setTimeout(() => {
        document.getElementById('question-card').classList.remove('fade-in');
    }, 600);
}

function selectOption(optionIndex, buttonElement) {
    // Remove previous selection
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked button
    buttonElement.classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestionIndex] = {
        questionIndex: currentQuestionIndex,
        optionIndex: optionIndex,
        score: questions[currentQuestionIndex].options[optionIndex].score
    };
    
    // Enable next button or show finish button
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('finish-btn').style.display = 'inline-flex';
        document.getElementById('next-btn').style.display = 'none';
    } else {
        document.getElementById('next-btn').disabled = false;
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        
        // Restore previous answer if exists
        if (userAnswers[currentQuestionIndex]) {
            const optionIndex = userAnswers[currentQuestionIndex].optionIndex;
            const optionButtons = document.querySelectorAll('.option-btn');
            optionButtons[optionIndex].classList.add('selected');
            
            // Enable appropriate buttons
            if (currentQuestionIndex === questions.length - 1) {
                document.getElementById('finish-btn').style.display = 'inline-flex';
                document.getElementById('next-btn').style.display = 'none';
            } else {
                document.getElementById('next-btn').disabled = false;
                document.getElementById('finish-btn').style.display = 'none';
                document.getElementById('next-btn').style.display = 'inline-flex';
            }
        }
    }
}

function finishAssessment() {
    // Calculate total score
    totalScore = userAnswers.reduce((sum, answer) => sum + answer.score, 0);
    
    // Show results
    showResults();
}

function showResults() {
    const maxScore = assessmentData[currentAddictionType].maxScore;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    // Determine addiction level
    let level, levelClass, levelText;
    if (percentage <= 33) {
        level = 'low';
        levelClass = 'level-low';
        levelText = 'مستوى منخفض';
    } else if (percentage <= 66) {
        level = 'medium';
        levelClass = 'level-medium';
        levelText = 'مستوى متوسط';
    } else {
        level = 'high';
        levelClass = 'level-high';
        levelText = 'مستوى عالي';
    }
    
    // Update results display
    document.getElementById('result-icon').className = assessmentData[currentAddictionType].icon;
    document.getElementById('addiction-type-result').textContent = assessmentData[currentAddictionType].title;
    document.getElementById('score-percentage').textContent = percentage + '%';
    
    const resultLevel = document.getElementById('result-level');
    resultLevel.textContent = levelText;
    resultLevel.className = `result-level ${levelClass}`;
    
    // Update description based on level
    const descriptions = {
        low: 'نتائجك تشير إلى مستوى منخفض من الإدمان. لديك سيطرة جيدة على سلوكك، ولكن من المهم الحفاظ على الوعي والوقاية.',
        medium: 'نتائجك تشير إلى مستوى متوسط من الإدمان. يُنصح بالتدخل السلوكي واتباع خطة علاجية منظمة.',
        high: 'نتائجك تشير إلى مستوى عالي من الإدمان. يُنصح بشدة بطلب المساعدة المهنية المتخصصة فوراً.'
    };
    
    document.getElementById('result-description').textContent = descriptions[level];
    
    // Create score chart
    createScoreChart(percentage);
    
    // Load treatment plan
    loadTreatmentPlan(level);
    
    // Show results section
    showSection('results');
}

function createScoreChart(percentage) {
    const canvas = document.getElementById('scoreChart');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Chart settings
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    const lineWidth = 15;
    
    // Background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    
    // Progress circle
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (2 * Math.PI * percentage / 100);
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    
    // Color based on percentage
    let color;
    if (percentage <= 33) {
        color = '#27ae60';
    } else if (percentage <= 66) {
        color = '#f39c12';
    } else {
        color = '#e74c3c';
    }
    
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();
}

function loadTreatmentPlan(level) {
    const plan = treatmentPlans[currentAddictionType][level];
    
    // Update treatment plan
    const treatmentContent = document.getElementById('treatment-content');
    treatmentContent.innerHTML = `
        <h4 style="color: #2c5aa0; margin-bottom: 1rem;">${plan.title}</h4>
        ${plan.steps.map(step => `
            <div class="treatment-step">
                <h4>${step.title}</h4>
                <p>${step.description}</p>
            </div>
        `).join('')}
    `;
    
    // Update recommendations
    const recommendationsContent = document.getElementById('recommendations-content');
    recommendationsContent.innerHTML = `
        <ul style="list-style: none; padding: 0;">
            ${plan.recommendations.map(rec => `
                <li style="margin-bottom: 0.5rem; padding: 0.5rem; background: #f8f9fa; border-radius: 5px; border-right: 3px solid #27ae60;">
                    <i class="fas fa-check" style="color: #27ae60; margin-left: 10px;"></i>
                    ${rec}
                </li>
            `).join('')}
        </ul>
    `;
}

function printResults() {
    window.print();
}

function startNewAssessment() {
    showAddictionTypes();
}

// Navigation event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            if (target === 'home') {
                showHome();
            } else if (target === 'about') {
                showAbout();
            }
        });
    });
    
    // Initialize with home section
    showHome();
    
    // Add smooth scrolling and animations
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Utility Functions
function saveResults() {
    const results = {
        addictionType: currentAddictionType,
        score: totalScore,
        percentage: Math.round((totalScore / assessmentData[currentAddictionType].maxScore) * 100),
        date: new Date().toISOString(),
        answers: userAnswers
    };
    
    localStorage.setItem('addictionAssessmentResults', JSON.stringify(results));
}

function loadPreviousResults() {
    const saved = localStorage.getItem('addictionAssessmentResults');
    if (saved) {
        return JSON.parse(saved);
    }
    return null;
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    document.querySelectorAll('.addiction-card, .stat-item, .about-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log(`
🧠 مرحباً بك في مركز التقييم العلمي للإدمان! 🧠
📊 تقييم علمي دقيق ومخصص لكل نوع إدمان 📊
🏥 خطط علاجية مبنية على أحدث الأبحاث العلمية 🏥

الموقع يدعم تقييم:
📱 إدمان الهاتف الذكي
🚫 إدمان المحتوى الإباحي  
🚬 إدمان التدخين

تم التطوير باستخدام:
✨ HTML5 & CSS3
✨ JavaScript ES6+
✨ Chart.js للرسوم البيانية
✨ تصميم متجاوب ومتاح

ابدأ تقييمك الآن للحصول على خطة علاجية مخصصة! 🎯
`);


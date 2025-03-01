document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const popupTitle = document.getElementById('popup-title');
    const popupLinks = document.getElementById('popup-links');

    // بيانات المحاضرات
    const lectures = {
        basics: {
            title: "أساسيات الذكاء الاصطناعي",
            links: [
                { text: "اساسيات الجزء الأول", url: "course/basce/b.html" },
                { text: "اساسيات الجزء الثاني", url: "course/basce/b1.html" }
            ]
        },
        "graph-theory": {
            title: "الرسوم البيانية وخوارزمياتها",
            links: [
                { text: "اساسيات الرسوم البيانيه", url: "course/garph/garph.html" },
                { text: "شرح خوارزمية BFS", url: "course/garph/bfs.html" },
                { text: "شرح خوارزمية DFS", url: "course/garph/dfs.html" },
                { text: "شرح خوارزمية A*", url: "course/garph/A.html" },
                { text: "شرح خوارزمية ديكسترا", url: "course/garph/Dijkstra's.html" }
            ]
        },
        "machine-learning": {
            title: "التعلم الآلي",
            links: [
                { text: "التعلم الآلي الجزء الأول", url: "course/Machine Learning/Machine Learning.html" },
                { text: "التعلم الآلي الجزء الثاني العملي", url: "course/Machine Learning/scikit-learn_Machine Learning.html" }
            ]
        },
        classification: {
            title: "خوارزميات التصنيف",
            links: [
                { text: "الانحدار اللوجستي", url: "course/classification/Logistic Regression.html" },
                { text: "مثال عملي", url: "course/classification/NLTK.html" }
            ]
        },
        optimization: {
            title: "التحسين",
            links: [
                { text: "معدل التعلم", url: "course/optimization/Learning Rate.html" },
                { text: "مثال تطبيقي", url: "course/optimization/TensorFlow.html" }
            ]
        },
        "deep-learning": {
            title: "التعلم العميق",
            links: [
                { text: "مقدمة في الشبكة العصبية", url: "course/deep/ANN.html" },
                { text: "تطبيق عملي", url: "course/deep/Keras.html" }
            ]
        },
        nlp: {
            title: "معالجة اللغة الطبيعية",
            links: [
                { text: "مقدمة عن اللغة الطبيعية", url: "course/NLP/NLP.html" },
                { text: "تطبيق عملي", url: "course/NLP/NLTK14.html" }
            ]
        }
    };

    // فتح النافذة المنبثقة عند النقر على رابط
    document.querySelectorAll('#course-index a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const contentKey = this.getAttribute('data-content');
            const lecture = lectures[contentKey];
            popupTitle.textContent = lecture.title;
            popupLinks.innerHTML = lecture.links.map(link => `
                <li><a href="${link.url}" target="_blank">${link.text}</a></li>
            `).join('');
            popup.style.display = 'flex';
        });
    });

    // إغلاق النافذة المنبثقة
    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // إغلاق النافذة عند النقر خارجها
    window.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
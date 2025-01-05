const commentReviewsFunc = function () {
    const commentStarsDOM = document.querySelectorAll(".yorumlar-form-rating .star");
    commentStarsDOM.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            commentStarsDOM.forEach((star) => star.classList.remove("active"));
            item.classList.add("active");
        });
    });
};

const addNewCommentFunc = () => {
    let comments = [];    
    const commentTextDOM = document.getElementById("comment-text");
    const commentNameDOM = document.getElementById("comment-name");
    const commentBtnDOM = document.querySelector(".form-gonder input");
    const commentListDOM = document.querySelector(".yorumlar-list");
    let commentText = "";
    let commentName = "";

    // Yorum metni dinleyici
    commentTextDOM.addEventListener("input", function (e) {
        commentText = e.target.value;
    });

    // Kullanıcı adı dinleyici
    commentNameDOM.addEventListener("input", function (e) {
        commentName = e.target.value;
    });

    // Yorum ekleme işlemi
    function addComment(e) {
        e.preventDefault();

        // Eğer alanlar boşsa uyarı ver
        if (commentText.trim() === "" || commentName.trim() === "") {
            alert("Lütfen hem kullanıcı adını hem de yorumu doldurun.");
            return;
        }

        // Yeni yorumu listeye ekle
        comments.push({ text: commentText, author: commentName });

        // Yorumları güncelle
        let result = "";
        comments.forEach((item) => {
            result += `
            <li class="yorumlar-oge">
                <div class="yorumlar-avatar">
                    <img src="images/avatars/avatar2.jpg" alt="">
                </div>
                <div class="yorumlar-text">
                    <ul class="yorumlar-star">
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-half"></i></li>
                    </ul>
                    <div class="yorumlar-meta">
                        <strong>${item.author}</strong>
                        <span>-</span>
                        <time>10 Mayıs 2024</time>
                    </div>
                    <div class="yorumlar-desc">
                        <p>${item.text}</p>
                    </div>
                </div>
            </li>
            `;
        });
        commentListDOM.innerHTML = result;

        // Form alanlarını temizle
        commentTextDOM.value = "";
        commentNameDOM.value = "";
        commentText = "";
        commentName = "";
    }

    // Yorum gönderme butonuna tıklama olayı
    commentBtnDOM.addEventListener("click", addComment);
};

function commentsFunc() {
    commentReviewsFunc();
    addNewCommentFunc();
}

export default commentsFunc();

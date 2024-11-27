// CHUYỂN ĐẾN CÁC ELEMENTS TIẾP THEO BẰNG CÁCH NHẤN PHÍM "Enter" (LOGIN)
const inputs = document.querySelectorAll("#login input"); // CHỌN TẤT CẢ INPUT TRONG FORM

inputs.forEach((input, index) => {
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // CHẶN VIỆC MẶC ĐỊNH GỬI BIỂU MẪU

            // CHUYỂN ĐẾN INPUT TIẾP THEO NẾU CÓ
            const nextInput = inputs[index + 1];
            if (nextInput) {
                nextInput.focus();
            } else {
                // CHUYỂN ĐẾN NÚT "I'M BACK!" NẾU KHÔNG CÒN INPUT
                document.querySelector("#login button").focus();
            }
        }
    });
});

// HIỂN THỊ MẬT KHẨU
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('input-password');
    const toggleEye = document.getElementById('toggleEye');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleEye.textContent = '-_-'; // KHÔNG HIỂN THỊ
    } else {
        passwordInput.type = 'password';
        toggleEye.textContent = 'o-o'; // HIỂN THỊ
    }
}

// ĐẢM BẢO INPUT PHẢI CÓ GIÁ TRỊ TRƯỚC KHI SUBMIT (LOGIN)
function submitAndRedirect(event) { // CHẶN VIỆC MẶC ĐỊNH GỬI BIỂU MẪU
    event.preventDefault();

    const form = document.getElementById('login');

    // KIỂM TRA XEM FORM CÓ GIÁ TRỊ INPUT CHƯA
    if (form.checkValidity()) {
        form.submit();
        alert('WELCOME BACK!'); // THÔNG BÁO ĐĂNG NHẬP THÀNH CÔNG
        window.location.href = 'index.html';
    } else { // HIỂN THỊ THÔNG BÁO XÁC THỰC CHO CÁC TRƯỜNG HỢP KHÔNG HỢP LỆ
        form.reportValidity();
    }
}

// CHUYỂN ĐẾN CÁC ELEMENTS TIẾP THEO BẰNG CÁCH NHẤN PHÍM "Enter" (REGISTER)
const inputs = document.querySelectorAll("#register input"); // CHỌN TẤT CẢ INPUT TRONG FORM

inputs.forEach((input, index) => {
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // CHẶN VIỆC MẶC ĐỊNH GỬI BIỂU MẪU

            // CHUYỂN ĐẾN INPUT TIẾP THEO NẾU CÓ
            const nextInput = inputs[index + 1];
            if (nextInput) {
                nextInput.focus();
            } else {
                // CHUYỂN ĐẾN NÚT "CREATE!" NẾU KHÔNG CÒN INPUT
                document.querySelector("#register #create-btn").focus();
            }
        }
    });
});

// ĐẢM BẢO INPUT PHẢI CÓ GIÁ TRỊ TRƯỚC KHI SUBMIT (REGISTER P1)
function submitAndRedirect(event) {  // CHẶN VIỆC MẶC ĐỊNH GỬI BIỂU MẪU
    event.preventDefault();

    const form = document.getElementById('registerP1');

    // KIỂM TRA XEM FORM CÓ GIÁ TRỊ INPUT CHƯA
    if (form.checkValidity()) {
        form.submit();
        window.location.href = 'registerP2.html';
    } else { // HIỂN THỊ THÔNG BÁO XÁC THỰC CHO CÁC TRƯỜNG HỢP KHÔNG HỢP LỆ
        form.reportValidity();
    }
}

// ĐẢM BẢO INPUT PHẢI CÓ GIÁ TRỊ TRƯỚC KHI SUBMIT (REGISTER P2)
function submitAndRedirect(event) {  // CHẶN VIỆC MẶC ĐỊNH GỬI BIỂU MẪU
    event.preventDefault();

    const form = document.getElementById('registerP2');

    // KIỂM TRA XEM FORM CÓ GIÁ TRỊ INPUT CHƯA
    if (form.checkValidity()) {
        form.submit();
        alert('ACCOUNT CREATED!'); // THÔNG BÁO ĐĂNG KÝ THÀNH CÔNG
        window.location.href = 'login.html';
    } else { // HIỂN THỊ THÔNG BÁO XÁC THỰC CHO CÁC TRƯỜNG HỢP KHÔNG HỢP LỆ
        form.reportValidity();
    }
}

// ĐẢM BẢO INPUT PHẢI CÓ GIÁ TRỊ TRƯỚC KHI SUBMIT (POSTING)
function submitAndRedirect(event) {  // CHẶN VIỆC MẶC ĐỊNH GỬI BIỂU MẪU
    event.preventDefault();

    const form = document.getElementById('posting');

    // KIỂM TRA XEM FORM CÓ GIÁ TRỊ INPUT CHƯA
    if (form.checkValidity()) {
        form.submit();
        alert('ARTICLE POSTED');
        window.location.href = 'index.html';
    } else { // HIỂN THỊ THÔNG BÁO XÁC THỰC CHO CÁC TRƯỜNG HỢP KHÔNG HỢP LỆ
        form.reportValidity();
    }
}

// CHUYỂN ĐẾN CÁC ELEMENTS TIẾP THEO BẰNG CÁCH NHẤN PHÍM "Enter" (POSTING)
const inputs = document.querySelectorAll("#posting input"); // CHỌN TẤT CẢ INPUT TRONG FORM

inputs.forEach((input, index) => {
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // CHẶN VIỆC MẶC ĐỊNH GỬI BIỂU MẪU

            // CHUYỂN ĐẾN INPUT TIẾP THEO NẾU CÓ
            const nextInput = inputs[index + 1];
            if (nextInput) {
                nextInput.focus();
            } else {
                // CHUYỂN ĐẾN NÚT "SUBMIT!" NẾU KHÔNG CÒN INPUT
                document.querySelector("#posting button").focus();
            }
        }
    });
});

// XEM XÉT SỰ TƯƠNG ĐỒNG KHI LẶP LẠI PASSWORD ĐỐI VỚI PASSWORD GỐC
var check = function () {
    if ( // NẾU HAI INPUT CÓ GIÁ TRỊ BẰNG NHAU THÌ XUẤT THÔNG BÁO "MATCHED"
        document.getElementById("input-password").value ==
        document.getElementById("confirm-password").value
    ) {
        document.getElementById("message").style.color = "#4a73e8";
        document.getElementById("message").innerHTML = "MATCHED";
    } else if ( // NẾU MỘT TRONG HAI INPUT CÓ GIÁ TRị BẰNG 0 THÌ KHÔNG CÓ HÀNH ĐỘNG
        document.getElementById("input-password").value == 0 ||
        document.getElementById("confirm-password").value == 0
    ) {
        document.getElementById("message").innerHTML = " ";
    } else if ( // NẾU CẢ HAI INPUT CÓ GIÁ TRị BẰNG 0 THÌ KHÔNG CÓ HÀNH ĐỘNG
        document.getElementById("input-password").value == 0 &&
        document.getElementById("confirm-password").value == 0
    ) {
        document.getElementById("message").innerHTML = " ";
    } else { // NẾU HAI GIÁ TRỊ INPUT KHÁC NHAU VÀ KHÁC 0 THÌ XUẤT THÔNG BÁO "NOT MATCHING"
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "NOT MATCHING";
    }
};
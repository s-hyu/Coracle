// 账号密码
const VALID_EMAIL = "ba234035729yh03";
const VALID_PASSWORD = "tCTZ4-ZfMNP";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#loginForm"); // 获取表单
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // 防止默认表单提交行为

        const email = document.querySelector("#email").value.trim(); // 获取输入的账号
        const password = document.querySelector("#password").value.trim(); // 获取输入的密码

        // 验证账号密码
        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            alert("Verification successful!");
            window.location.href = "personal.html"; // 跳转到个人信息页面
        } else {
            alert("Please verify the data. The entered verification code and ID is not matching");
        }
    });
});

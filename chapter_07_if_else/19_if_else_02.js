let isLogin = true;
let userRole = "editor";
if (isLogin) {
    if (userRole === "admin") {
        console.log("Welcome, admin! You can access all the thinks");
    } else if (userRole === "editor") {
        console.log("Welcome, editor! You can edit content.");
    } else {
        console.log("Welcome, user! You can view content.");
    }
} else {
    console.log("Please log in to access the content.");
}

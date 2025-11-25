export function getUsers() {
if (typeof window === "undefined") return [];
const saved = localStorage.getItem("users");
return saved ? JSON.parse(saved) : [];
}


export function saveUsers(users) {
if (typeof window !== "undefined") {
localStorage.setItem("users", JSON.stringify(users));
}
}
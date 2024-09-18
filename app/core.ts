export const userNamePattern = /^[a-zA-Z0-9 !@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{2,15}$/;
export const emailPattern = /^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?!.*\s{2})[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,24}$/;
export const otpPattern = /^[a-zA-Z0-9]{6}$/
export const phoneNumberPattern = /^03\d{9}$/
export const rollNoPattern = /^\d{6}$/
export const cnicPattern = /^\d{13}/

export const paginationRowsPerPageData = [10, 20, 30, 40, 50]
export const educationOptions = ["Middle", "Matric", "Intermediate", "O level/A Level", "Undergraduate", "Graduated", "Other"]
export const educationArray = educationOptions.map((option: string) => option?.toUpperCase())
export const genderOptions = ["Male", "Female", "Other"]
export const genderArray = genderOptions.map((option: string) => option?.toUpperCase())
export const profilePictureSizeLimit = 10000000 // 1_mb

export const baseUrl = "https://api.kiacademy.in/api"
export const webUrl = "https://kenz-innovations-web-app.vercel.app/"
export const profilePicture = "https://res.cloudinary.com/do6sd9nyx/image/upload/v1706343891/we-app-nextjs/Assets/profile-picture_ufgahm.png"
# WorkConnect - Professional Profile Building Website

Welcome to WorkConnect, a project brought to you by the team Hack Heroes for the Scaler Open Source HackQuest Phase 2! 
WorkConnect is the catalyst for your professional success, offering seamless profile building, personalization, and cutting-edge technology. Join us to embark on your journey to excellence in development, design, content creation, and marketing.

## Project Overview
It is your go-to platform for creating a robust online portfolio. Designed for job seekers in development, design, content creation, and marketing, it simplifies the process of aggregating portfolios from multiple sources like GitHub, StackOverflow, Behance, Dribbble, and more. Users can add projects, highlight their work, and even include a 2-3-minute youtube video testimonial. WorkConnect also offers flexibility in denoting availability for part-time, full-time, gigs, or internships, catering to professionals in different career stages.

## Features

WorkConnect offers the following key features:

- **User-Friendly Onboarding**: WorkConnect provides a smooth and user-friendly onboarding process. Furthermore, the platform provides the ease of one-tap LinkedIn sign-in, which simplifies profile building and leverages current LinkedIn data to save users time.

- **User Security and Account Access:** WorkConnect prioritises user security and account access by employing user verification techniques, including email verification. Furthermore, in the case of a forgotten password, a user-friendly password reset tool streamlines account recovery, with reset links delivered to registered email addresses, assuring both convenience and account security.

- **Effortless Portfolio Building:** WorkConnect streamlines the process of developing a complete online portfolio by seamlessly integrating work from numerous sources including GitHub, LeetCode, StackOverflow for developers, Behance and Dribbble for designers, Instgram, Youtube for Content Creators, etc.

- **Customization:** Tailor your profile by selecting desired skills and adding relevant links to ensure your profile appropriately portrays your expertise so that the profile is visible to correct people, which may hire you or help you get hired.

- **Project Showcase:** Use project descriptions, photographs, links, and demo videos to effectively display your work. We used QuillJS a rich text editor to input and display project information like Project titles, description, images and links.

- **Engage with Video Testimonials:** Embrace the power of a 3-4 minute YouTube video testimonial to authentically showcase your personality, skills, and career aspirations. This dynamic feature goes beyond traditional text and gives potential employers a deeper insight into your professional identity.

- **Career Opportunities:** ailor your WorkConnect profile to indicate your availability for a wide range of opportunities, from part-time roles to full-time positions, freelance gigs, and valuable internships. This versatility accommodates professionals at different stages of their career journey and opens doors to a multitude of career paths.

## Tech Stack
```
|Website
├── Frontend
├──├── NextJS
├──├── Tailwind CSS
├── Backend
├──├── TypeScript
├── Database
├──├──MongoDB
├── Authentication
├──├── NextAuth
├──├── JWT
├── Deployment
├──├── Vercel
```

### Contributors
[Shivansh Arora](https://github.com/ShivanshAr97) <br/>
[Ravi Nain](https://github.com/ravinainn)

### Contribute

We welcome contributions to make WorkConnect even better! Feel free to clone and fork this repository, make improvements, and submit a pull request. We appreciate your support in our mission to help everyone.

### Feedback

We're continually improving WorkConnect, and your feedback is essential in this process. If you encounter any issues, have suggestions, or want to report a bug, please open an issue on our GitHub repository or please feel free to [contact us](mailto:shivansh.arora973@gmail.com). We appreciate your input and will do our best to address your concerns.

### Screenshots

### Landing Page
Landing page of our website WorkConnect
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/27055ddc-c4f2-47ba-8636-82a0af8968c7)
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/8fc86496-0faa-443c-871c-e024a45b1a58)
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/d1cd207e-e040-4173-b9aa-8d99e2dd0cc9)

---
### SignUp
Signup using email and password.
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/0b7c57be-fbe7-4988-80d9-f9b4fb64d4de)

---
### Login
Login using name email and password.
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/0cf7239c-b0b0-4553-ab91-69008badcbc7)

---

### LinkedIn SignUp
Signup using One tap LinkedIn Authentication using NextAuth
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/7608383d-9056-4985-b672-bf130c4b36d4)

---

### Verify Email
Email verification, mails sent using nodemailer and tokens generated using JWT.
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/ec46b525-69e7-40f2-a43f-34aca5e9072b)

---
### Reset Password
Enter your email
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/13b01aac-ceda-49b1-8ae5-f669e9876644)
Mail is recieved on the email provided with a unique token url to change your password
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/bec9b3b7-1a5a-4d81-86b1-8e86aca7666f)
Enter your new email
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/c83b3876-9e61-478d-9a63-b5bc844981c1)

---
### Profile
Profile page having basic information pre-filled like name and email. Other information can be filled by once clicking on the edit button. Profile page not accessible if the user is not signed in.
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/0888520e-e098-4d1c-a564-9bfd89a02a8b)
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/9da81f04-ac14-4086-92e9-a6d436fc1d3b)

---
### List of candidates
Contains list of all the candidates registered on the platform so that the person hiring can filter the people on the basis of skill required like developer, designer, product manager, etc. Clicking on the user profile takes to that user page
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/9d101f5f-3ffa-4e39-bce0-8073610dd097)

---

### Profile of a single user
It contains the information about the user. The information provided by him/her in the profile building page.
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/9306d688-57e2-41c7-b9ed-bb9b870a3a56)
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/26e6b0df-53d1-4f76-b963-24599848cf5b)

### Projects section using Quill
Here you can add the projects. It uses a rich text editor QuillJS in which you can do almost anything a google docs provide like adding images, videos, links, changing colors, fonts, bold, italics, justifying text, etc.
![image](https://github.com/ShivanshAr97/work-connect/assets/96040322/2ee6bef2-0023-4743-8871-54b846752cad)


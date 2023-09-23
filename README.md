> 💻 PROJECT NAME ✨ => Course App💻
<br>



<a href="https://drive.google.com/file/d/19gKWKiF6bSgZI0X1FsSb8hXZCgM0KGvg/view?usp=share_link">![Demo video of Game](https://img.shields.io/badge/Demo_Video_Of_Game-Click_ME-brightgreen.svg?style=plastic&logo=YouTube&logoColor=red)</a>

[![Backend Repo Link](https://img.shields.io/badge/Backend_Repo_Link-0A66C2?style=for-the-badge&logo=github&logoColor=#FF7139)](https://github.com/mrprincesingh/courseappbackend)
[![Backend Deploy to Render](https://img.shields.io/badge/Backend_Deployed_Render_Link-0A66C2?style=for-the-badge&logo=ko-fi&logoColor=white)](https://courseappbackendd.onrender.com/
)

[![Deployed App Vercel Link](https://img.shields.io/badge/Deployed_App_Vercel_Link-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://coursestartup.vercel.app/)

---

> ✨ABOUT Project AND THEIR RULES🧑‍💻

⬇️To access the application, please follow these steps:

⭕ Start the Backend Server:
Open your terminal and navigate to the backend directory of the project. Use the following command to start the backend server:

  ✨ npm run dev
   
This command will initialize the backend server, allowing it to handle incoming requests.

⭕ Start the Frontend Application:
Open another terminal window and navigate to the frontend directory of the project. Use the following command to start the frontend application:

   ✨npm start
  
Once executed, the frontend application will be accessible at http://localhost:3000 in your web browser.

⭕ User Registration and Login:
You can sign up as a user by providing your registration details. Additionally, you can log in as an administrator, but please note that the administrator credentials are hardcoded. The credentials are as follows:

Email: [Administrator's Email]
Password: [Administrator's Password]

⭕ User Functionality:
As a user, you have access to various features, including viewing and editing your profile. You can also access all available courses after subscribing and making payments through the integrated Razorpay payment gateway.

⭕ Admin Functionality:
Administrators have similar access to user features but cannot purchase subscriptions since they already have administrative privileges. Admins have a separate dashboard where they can monitor user activity, add, delete, and edit courses and lectures, and change user roles.

This application provides a seamless experience for both users and administrators, allowing them to interact with courses and manage user-related tasks efficiently.

Please note that for security reasons, it's essential to use strong and unique passwords and avoid hard-coding sensitive credentials in a production environment. Additionally, consider implementing authentication and authorization mechanisms to enhance the security of your application.



## 🔗 Profile Links✨




 | Collaborators| Resume | Github                                                                                                                         |Linkedin                                                                                                                                                            | Portfolio                                                                                                                                    |
| -------------| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Shikha Gupta | [![Resume](https://img.shields.io/badge/my_Resume-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://drive.google.com/file/d/1YE62u2ChjmlR-EKeqZ75UvFMg_KcY86T/view?usp=sharing) | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/shikhu51197/)| [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shikha-gupta-12a2b5199) |[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shikhu51197.github.io/) |  
| Prince Singh | [![Resume](https://img.shields.io/badge/my_Resume-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://drive.google.com/file/d/142LD5wD4ruf4Mo2np9CKQweA5s0GbBE0/view?usp=sharing) | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mrprincesingh)| [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/prince-singh-a35963199/) |[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://mrprincesingh.github.io/) |



  ---
## 💫Tech-Stack->

- #### For Frontend:-
   - `HTML5`
  - `CSS3`
  - `JavaScript `
   - `Redux`
  - `ReactJS`
   - `ES6 `

- #### For Backend:-
   - `NodeJS`
   - `ExpressJS`
    - `MongoDB `
- #### For deploy database:- 
    
     - `Render`

- #### For Styling:-  
   - `Chakra UI `
   

- #### For live Project: -
   - `Vercel`
   
## ⭕Steps to run our Project :

✨Clone the repository.

✨Run the command `npm install` in both the frontend and backend folders.

✨Run the command `npm run server` in the backend folder.

✨Run the command `npm start` in the frontend folder run on localhost:3000.


![spgmr](https://user-images.githubusercontent.com/107506646/222902675-7e06b37e-bbca-4803-9792-cc6752afee3e.gif)


---
## Features ✨:-
---
 | Serial No            | Feature                                                              |
| ----------------- | ------------------------------------------------------ |
| 1 | User signup and Login |
| 2 | Home Page, Multiplayer Accessibility |
| 3 | Gameboard Page, live Chat |
| 4 | LeaderBoard  Page, Impressive UI|
| 5 | navbar, footer, completely Responsive |
| 6 | Demo video, about game and rules  |

---
# Package.json(Dependency)✨:-

 | Serial No            | Backend                      |  Frontend      |
| ----------------- | -------------------|--------------------- |
| 1 | bcrypt |   Chakra-ui  |
| 2 | mongoose |  React Router dom |
| 3 | cors | redux  |
| 4 | dotenv |  react redux |
| 5 | express | chartjs |
| 6 | jsonwebtoken | redux thunk |
| 7 | cloudinary | react-hot-toast |
| 8 | cookie-parser |  react-chartjs-2 |
| 9 | datauri |  protected-route-react |
| 10 | node-cron | react-icons |
| 11 | multer |   axios |
| 12 | nodemailer | react-dom |
| 13 | razorpay | react |
| 14 | validator | react-toolkit |

---

## Flow

```mermaid
graph TD;
    App-->HomePage
    HomePage-->Users;
    Users-->SignUpPage;
      SignUpPage-->loginPage;
       loginPage-->Profie;
       HomePage --> Admin
       Admin --> LoginPage
       LoginPage--> AdminProfile
      AdminProfile--> DeshboardPage
       DeshboardPage-->LeaderBoardPage
       DeshboardPage-->HomePage
     
```

---
## Screenshots 📷
---                                     
                                                                                                                          
                                                                                                                          
                                                                                                                     
                                                                                                                          
                                                                                                                          
                                                                                                                          
                                                                                                                          
                                                                                                                          

---


<h1 align="center">✨Thank You✨</h1>

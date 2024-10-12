 ## Running the app


### Clone: 

```bash
git clone https://github.com/mesho254/user-list.git
```

### install Dependencies : 

```bash
cd user-list
npm install
```

### Run app: 

```bash
npm start
```


## 1. Explanation

### Ant Design Table:

- I used the Table component from Ant Design to display the list of users. Each row is clickable, triggering the display of a modal with additional user details.
Ant Design Modal:

- When a user is clicked, the modal opens with their information. I used Space to organize the details neatly.
Error Handling and Loading States:

- A loading spinner (Spin) is shown while data is being fetched.
If fetching fails, I display an error message using message.error.

 ### Pagination:

 - The table is paginated with pageSize: 5 for better user experience.

 ## 2. Result

- User List: Users are displayed in a paginated table with their names and emails.
- Modal: Clicking a user opens a modal with their name, email, address, and company.
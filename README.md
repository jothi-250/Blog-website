## Project overview
 Users can :  <br>
 - View a list of blog posts <br>
 - Read full blog by clicking Read more <br>
 - Create their own blog post in a  form <br>
 
 ## Technologies Used
- **React** –  library for building UI components.
- **React Router DOM** – Routing between Home (`/`), Blog Details (`/blog/:id`), and Create Blog (`/create-blog`) pages.
- **React Icons** – For icons in buttons (e.g., `FaPen`).
- **JavaScript (ES6+)** – Component logic, data handling, state updates.
- **CSS** – Custom styling:

 ## Components 

- **App.js**
  
  - Manages user-created blogs using `useState`.
  - Sets up all routes using `Routes` and `Route` from React Router DOM:
    - `/` → Home blog list.
    - `/blog/:id` → BlogDetail page.
    - `/create-blog` → CreateBlog page.
  - Combines preloaded blogs from `BlogData.js` with newly created blogs for display.

- **BlogCard Component**
  - Props: `id`, `title`, `description`.
  - Displays a single blog post .
  - Includes "Read more →" link to `/blog/:id`.
    

- **BlogList Component**
  - Fetches blogs using `getBlogs()` from `BlogData.js`.
  - Maps each blog to `BlogCard`.
  


- **BlogDetail Component**
  - Uses `useParams` to get `id` from the URL.
  - Displays full blog content:
    - `title`, `author`, `date`, and `content`.
  - Button at bottom to navigate to Create Blog page.
  - If blog is not found: displays "Blog not found".

- **CreateBlog Component**
  - Form for creating new blogs.
  - `handleSubmit` adds a new blog to `blogs` state.
  - `handleDelete` clears the form inputs.

- **Data**
  - Preloaded blogs stored in an array.
  - `getBlogs()` returns all blogs.
  - `addBlog(newBlog)` adds a new blog to the list.
  - Has `id`, `title`, `description`.

---

## State Management Explanation

- **Main State**
  - `blogs` state in `App.js` stores user-created blogs.
  - 
    ```js
    const [blogs, setBlogs] = useState([]);
    ```
  - Passed as props to 
    - `BlogDetail` (for viewing newly added blogs).
    - `CreateBlog` (for adding new blogs).

  - **Props**
  - `BlogCard` receives data via props (`id`, `title`, `description`).
  - Data flows (App → BlogCard / BlogDetail / CreateBlog).

- **Routing / Navigation**
  - React Router DOM handles page changes:
    - Home → Blog Details (`/blog/:id`) → Create Blog (`/create-blog`).
  - `useNavigate` used for navigation in BlogDetail and CreateBlog.

- **Data Flow**
  - Preloaded blogs come from `BlogData.js`.
  - New blogs are added to `blogs` state in `App.js`.
  - `BlogCard` displays (`blogData + blogs`).

---


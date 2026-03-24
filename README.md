# DevBlog Pro Frontend

Professional React + Vite frontend for a blog platform with:
- Public user-facing blog pages
- Separate admin-only portal
- CRUD dashboard for post management

## Route structure

### Public routes
- `/` - public homepage and post feed
- `/login` - user login
- `/signup` - user registration

### Admin routes
- `/admin/login` - admin authentication page
- `/admin` - admin dashboard (default create view)
- `/admin/create` - create post
- `/admin/edit` - edit post
- `/admin/delete` - delete post

## Admin credentials
Admin login checks these environment variables:
- `VITE_ADMIN_EMAIL` (default: `admin@blog.com`)
- `VITE_ADMIN_PASSWORD` (default: `Admin@123`)

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

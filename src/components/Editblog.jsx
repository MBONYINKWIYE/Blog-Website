import { useEffect, useState } from 'react'
import axiosClient from '../Services/GlobalApi'

const Editblog = () => {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [formData, setFormData] = useState({ title: '', description: '' })
  const [status, setStatus] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosClient.get('/blogs')
        setPosts(response.data.blogs)
      } catch {
        setStatus('Unable to load posts')
      }
    }

    fetchPosts()
  }, [])

  const startEdit = (post) => {
    setSelectedPost(post)
    setFormData({ title: post.title, description: post.description })
    setStatus('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedPost) return

    try {
      const response = await axiosClient.put(`/blogs/${selectedPost._id}`, formData)
      const updated = response?.data?.blog || { ...selectedPost, ...formData }

      setPosts((prev) => prev.map((post) => (post._id === selectedPost._id ? { ...post, ...updated } : post)))
      setStatus('Post updated successfully')
      setSelectedPost(null)
    } catch {
      setStatus('Failed to update post')
    }
  }

  return (
    <section className='grid gap-6 lg:grid-cols-2'>
      <div className='bg-white rounded-lg p-4'>
        <h2 className='font-bold text-xl mb-4'>Choose post to edit</h2>
        <ul className='space-y-3'>
          {posts.map((post) => (
            <li key={post._id} className='flex items-center justify-between border rounded p-3'>
              <span className='font-medium'>{post.title}</span>
              <button className='bg-purple-600 text-white px-3 py-1 rounded' onClick={() => startEdit(post)}>
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className='bg-white rounded-lg p-4'>
        <h2 className='font-bold text-xl mb-4'>Edit selected post</h2>
        {status && <p className='text-sm font-semibold text-purple-700 mb-3'>{status}</p>}
        {!selectedPost ? (
          <p className='text-gray-600'>Select a post from the list to start editing.</p>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-3'>
            <div>
              <label className='block mb-1 font-medium'>Title</label>
              <input name='title' value={formData.title} onChange={handleChange} className='w-full border rounded p-2' required />
            </div>
            <div>
              <label className='block mb-1 font-medium'>Description</label>
              <textarea
                name='description'
                value={formData.description}
                onChange={handleChange}
                className='w-full border rounded p-2 min-h-28'
                required
              />
            </div>
            <button type='submit' className='bg-green-600 text-white px-4 py-2 rounded'>
              Save changes
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Editblog

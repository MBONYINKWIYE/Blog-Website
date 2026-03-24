import { useState } from 'react'
import axiosClient from '../Services/GlobalApi'
import { useForm } from 'react-hook-form'

const Intropost = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm()
  const [message, setMessage] = useState('')

  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('image', data.image[0])

    try {
      await axiosClient.post('/blogs', formData)
      setMessage('Blog was created successfully!')
      reset()
    } catch (err) {
      setMessage(err?.response?.data?.message || 'Unable to create blog right now.')
    }
  }

  return (
    <section className='mb-6'>
      <div className='bg-gray-100 p-7 gap-x-4 mr-12 ml-12 rounded w-90 '>
        <h1 className='justify-center text-center font-bold text-2xl text-indigo-600'>Create new post</h1>
        {message && <p className='text-center mt-4 text-sm font-semibold text-purple-700'>{message}</p>}

        <div className='justify-center items-center w-[80%]'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col text-justify items-right justify-center px-6 py-8 mt-[50px] mb-[50px] mx-auto md:h-screen lg:py-0'>
            <label className='font-medium underline'>Blog Title:</label>
            <br />
            <input
              type='text'
              placeholder="What's your blog title?"
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5'
              {...register('title', { required: true })}
            />{' '}
            <br />
            <label>Picture</label>
            <input type='file' {...register('image', { required: true })} />

            <label className='font-medium underline'>Blog Content</label>
            <br />
            <textarea className='outline-none h-12 rounded bg-gray-200 p-2 border-none' {...register('description', { required: true })}></textarea>
            <button disabled={isSubmitting} className='bg-purple-500 text-white mt-2 font-bold w-[120px] rounded-full m-[40%] disabled:opacity-70'>
              {isSubmitting ? 'Posting...' : 'Post'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Intropost
